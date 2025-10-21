import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Project Alpha",
    description: "Revolutionary AI-powered solution",
    tech: "AI/ML • Cloud • React",
  },
  {
    title: "Project Nova",
    description: "Next-gen blockchain platform",
    tech: "Web3 • Smart Contracts • DeFi",
  },
  {
    title: "Project Quantum",
    description: "Advanced data analytics suite",
    tech: "Big Data • Analytics • Python",
  },
];

export const ProjectsSlide = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-16">
      <motion.h2 
        className="text-7xl font-bold mb-20 text-center bg-gradient-to-r from-primary to-cosmic-pink bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Projects
      </motion.h2>
      
      <div className="grid grid-cols-3 gap-12 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <Card className="bg-card/50 backdrop-blur-xl border-primary/30 p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                className="w-16 h-16 bg-gradient-cosmic rounded-2xl mb-6 mx-auto"
              />
              
              <h3 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
              <p className="text-xl text-foreground/70 mb-4">{project.description}</p>
              <p className="text-sm text-primary font-semibold tracking-wide">{project.tech}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
