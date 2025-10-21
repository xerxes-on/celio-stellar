#!/usr/bin/env python3

"""Extract partner entries from scraped.html into a JSON file."""

from __future__ import annotations

import argparse
import json
import time
from pathlib import Path
from typing import Dict, List, Sequence

from bs4 import BeautifulSoup  # type: ignore
from deep_translator import GoogleTranslator  # type: ignore


REPLACEMENTS = {
    "\u2018": "'",
    "\u2019": "'",
    "\u201c": '"',
    "\u201d": '"',
    "\u2013": "-",
    "\u2014": "-",
}


def normalize_text(value: str) -> str:
    """Collapse whitespace and replace non-ASCII punctuation."""
    for original, replacement in REPLACEMENTS.items():
        value = value.replace(original, replacement)
    return " ".join(value.split())


def extract_partner(article) -> Dict[str, str]:
    title_el = article.select_one(".portfolio-page-card__title")
    name = normalize_text(title_el.get_text(strip=True)) if title_el else ""

    img_el = article.select_one(".portfolio-page-card__picture img")
    image = img_el.get("src", "").strip() if img_el else ""

    text_el = article.select_one(".portfolio-page-card__text")
    description = (
        normalize_text(" ".join(text_el.stripped_strings)) if text_el else ""
    )

    return {
        "name": name,
        "image": image,
        "description": {
            "en": description,
        },
    }


def translate_batch(sentences: Sequence[str], dest: str, retries: int = 3) -> List[str]:
    """Translate a batch of sentences, retrying on failure."""
    if not sentences:
        return []

    for attempt in range(1, retries + 1):
        try:
            translated = GoogleTranslator(source="en", target=dest).translate_batch(
                sentences
            )
            return [normalize_text(item) for item in translated]
        except Exception:  # pragma: no cover - network errors
            if attempt == retries:
                raise
            time.sleep(1.5 * attempt)
    return []


def main(html_path: Path, output_path: Path) -> None:
    soup = BeautifulSoup(html_path.read_text(encoding="utf-8"), "html.parser")
    partners: List[Dict[str, Dict[str, str]]] = [
        extract_partner(article) for article in soup.select("article.portfolio-page-card")
    ]

    english_descriptions = [partner["description"]["en"] for partner in partners]

    for lang_code in ("ru", "uz"):
        translations = translate_batch(english_descriptions, dest=lang_code)
        for partner, translated_text in zip(partners, translations):
            partner["description"][lang_code] = translated_text

    output_path.write_text(
        json.dumps(partners, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Extract partner info from scraped HTML into JSON."
    )
    parser.add_argument(
        "--html",
        type=Path,
        default=Path("scraped.html"),
        help="Path to the scraped HTML file.",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=Path("public/partners.json"),
        help="Path to write the JSON output.",
    )
    arguments = parser.parse_args()
    main(arguments.html, arguments.out)
