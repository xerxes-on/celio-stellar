import { CosmicBackground } from "@/components/CosmicBackground";
import { PresentationContainer } from "@/components/PresentationContainer";

const Index = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      <CosmicBackground />
      <div className="relative z-10">
        <PresentationContainer />
      </div>
    </main>
  );
};

export default Index;
