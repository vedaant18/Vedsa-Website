import { ArrowRight, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 retro-grid opacity-30"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-fade-in-up">
          <span className="gradient-text text-glow-pink">AUTOMATION</span>
          <br />
          <span className="text-foreground">THAT SCALES</span>
        </h1>

        {/* Subheading */}
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Automations that improve efficiency and save time for your business
        </h2>

        {/* Description */}
        <p className="font-body text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We design and ship n8n workflows that remove manual work, connect your stack end‑to‑end, and build reliable systems your team can trust.
        </p>

        <p className="font-body text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          From lead capture and qualification to sequencing, reporting, and alerts — our automations are fast, observable, and easy to maintain.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#cta"
            className="group relative px-8 py-4 font-heading font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center gap-2 text-primary-foreground">
              Get started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          
          <a
            href="#workflows"
            className="group px-8 py-4 font-heading font-bold text-lg neon-border-blue rounded-lg hover:bg-secondary/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            See workflows
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Feature Pills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {[
            "Faster onboarding",
            "Lead capture → CRM",
            "AI assisted agents",
            "Reports & alerts"
          ].map((feature, index) => (
            <div
              key={index}
              className="glass px-6 py-3 rounded-full font-body text-sm hover:glass-hover cursor-default"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
