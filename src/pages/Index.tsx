import { CosmicBackground } from "@/components/CosmicBackground";
import { ThreeJSScene } from "@/components/ThreeJSScene";
import { PresentationContainer } from "@/components/PresentationContainer";

const Index = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      <CosmicBackground />
      <ThreeJSScene />
      <div className="relative z-10">
        <PresentationContainer />
      </div>
    </main>
  );
};

export default Index;
