import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-[5vh] px-[5vw] max-w-7xl mx-auto">
      <div className="max-w-[980px] mx-auto text-center relative scroll-reveal">
        {/* Outer glow container */}
        <div className="absolute inset-0 rounded-2xl overflow-visible" style={{ filter: 'blur(40px)' }}>
          <div className="absolute inset-[-20%] bg-[radial-gradient(ellipse_at_center,hsla(162,30%,60%,0.3),transparent_70%)]"></div>
        </div>
        
        {/* Card content */}
        <div className="relative bg-[hsl(220,13%,6%)] border border-[hsl(0,0%,12%)] rounded-2xl p-[clamp(1.5rem,5vw,3rem)]" style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 60px hsla(162, 30%, 60%, 0.2), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}>
        
        <h2 className="text-[clamp(2rem,6vw,3.25rem)] font-heading font-bold text-foreground mb-4">
          Automations that improve efficiency and save time for your business.
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed max-w-[70ch] mx-auto mb-6">
          We design and ship n8n workflows that remove manual work, connect your stack end‑to‑end,
          and create reliable systems so your team can focus on growth. From lead capture and
          qualification, email sequencing and reporting, to back‑office syncs, alerts, and AI agents
          that handle routine decisions — we build automations that are fast, observable and easy to
          maintain. You get clean handover, documentation, and ownership so your business can scale
          confidently.
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { label: "Faster onboarding", href: "#workflows" },
            { label: "Lead capture → CRM", href: "#workflows" },
            { label: "AI assisted agents", href: "#workflows" },
            { label: "Reports & alerts", href: "#workflows" }
          ].map((pill, index) => (
            <a
              key={index}
              href={pill.href}
              className="border border-border text-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:border-foreground hover:shadow-sm hover:-translate-y-0.5"
            >
              {pill.label}
            </a>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;

