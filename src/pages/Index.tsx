import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Workflows from "@/components/Workflows";
import CallToAction from "@/components/CallToAction";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <Workflows />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
