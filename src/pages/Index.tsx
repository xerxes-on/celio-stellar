import { CosmicBackground } from "@/components/CosmicBackground";
import { ThreeJSScene } from "@/components/ThreeJSScene";
import { PresentationContainer } from "@/components/PresentationContainer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      <CosmicBackground />
      <ThreeJSScene />
      <Header />
      <div className="relative z-10">
        <PresentationContainer />
      </div>
    </main>
  );
};

export default Index;
