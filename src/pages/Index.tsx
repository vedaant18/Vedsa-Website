import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Workflows from "@/components/Workflows";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
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
