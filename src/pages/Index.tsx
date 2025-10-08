import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Workflows from "@/components/Workflows";
import Capabilities from "@/components/Capabilities";
import CallToAction from "@/components/CallToAction";
import WaveBackground from "@/components/WaveBackground";

const Index = () => {
  return (
    <div className="min-h-screen page-transition overflow-x-hidden relative">
      <WaveBackground />
      <div className="relative z-10 bg-transparent">
        <Navigation />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <About />
          <Workflows />
          <Capabilities />
          <CallToAction />
        </main>
      </div>
    </div>
  );
};

export default Index;
