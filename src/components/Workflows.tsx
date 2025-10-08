import { Mail, Users, Search, Shirt } from "lucide-react";
import { useEffect } from "react";

const workflowsData = [
  {
    id: "wf-emailer",
    tag: "Area 01",
    icon: Mail,
    title: "Email Prospecting Agent",
    description: "Discovers targets, enriches contacts, personalizes outreach, schedules sends and tracks replies.",
    badges: ["Inputs: lists, CRM, domains", "Outputs: warm replies", "KPIs: open/reply rate"]
  },
  {
    id: "wf-agent",
    tag: "Area 02",
    icon: Users,
    title: "Candidate/Lead Ops Agent",
    description: "Scores and routes leads or candidates, asks follow‑ups, and books meetings for you.",
    badges: ["Inputs: forms, inbox", "Outputs: routed + booked", "KPIs: SLA, conversion"]
  },
  {
    id: "wf-keywords",
    tag: "Area 03",
    icon: Search,
    title: "Keyword Intelligence Agent",
    description: "Collects SERPs, clusters topics, scores difficulty vs. intent, and outputs briefs.",
    badges: ["Inputs: queries", "Outputs: briefs", "KPIs: coverage, impact"]
  },
  {
    id: "wf-garment",
    tag: "Area 04",
    icon: Shirt,
    title: "Garment-to-Model Agent",
    description: "Transforms garment images into on‑model visuals with consistent style and lighting.",
    badges: ["Inputs: product images", "Outputs: on‑model shots", "KPIs: time saved"]
  }
];

const Workflows = () => {
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
    <section id="workflows" className="relative py-[5vh] px-[5vw]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-[3vh] text-center">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-semibold text-muted-foreground">Automation Solutions</h2>
        </div>

        {/* Workflow Cards */}
        <div className="space-y-[clamp(1rem,3vw,1.5rem)] flex flex-col items-center">
          {workflowsData.map((workflow) => {
            const Icon = workflow.icon;
            return (
              <article key={workflow.id} className="relative scroll-reveal w-full max-w-[1400px]">
                <div className="w-full bg-[hsl(220,13%,6%)] border border-[hsl(0,0%,12%)] rounded-2xl p-[clamp(1.25rem,4vw,2rem)] shadow-md transition-all hover:shadow-lg" style={{
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5), 0 0 44px hsla(162, 30%, 60%, 0.25)'
                }}>
                  {/* Tag */}
                  <div className="absolute -top-3 left-6 bg-background border border-border rounded-full px-2.5 py-1 text-xs text-muted-foreground tracking-wider">
                    {workflow.tag}
                  </div>

                  {/* Icon */}
                  <div 
                    className="mx-auto mb-[2vh] flex items-center justify-center border border-white/[0.08] rounded-2xl" 
                    style={{
                      width: 'clamp(180px, 20vw, 240px)',
                      height: 'clamp(90px, 10vw, 120px)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 20px hsla(162, 30%, 60%, 0.1)'
                    }}
                  >
                    <Icon 
                      style={{
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'clamp(65px, 8vw, 90px)',
                        filter: 'drop-shadow(0 0 12px hsla(162, 30%, 60%, 0.4))',
                        opacity: 0.9
                      }}
                      className="text-primary" 
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-foreground mb-[1vh] text-center" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                    {workflow.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-[70ch] mx-auto mb-[2vh] text-center" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    {workflow.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-5 justify-center">
                    {workflow.badges.map((badge, idx) => (
                      <span key={idx} className="border border-border text-muted-foreground px-3 py-1.5 rounded-full text-sm">
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <a href="#" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-full transition-all hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md">
                      View tools
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflows;
