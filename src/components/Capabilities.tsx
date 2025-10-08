import { useEffect } from "react";

const Capabilities = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.stagger-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      emoji: "⚙️",
      title: "Workflow orchestration",
      description: "Design reliable n8n flows with retries, branching, and observability."
    },
    {
      emoji: "🔗",
      title: "Integrations",
      description: "Connect SaaS, CRMs, spreadsheets, email, webhooks, and databases."
    },
    {
      emoji: "🤖",
      title: "AI assistance",
      description: "Use LLMs for enrichment, classification, and personalized messaging."
    }
  ];

  return (
    <section className="py-[5vh] px-[5vw] max-w-7xl mx-auto">
      <div className="text-center mb-[3vh]">
        <h2 className="font-semibold text-foreground mb-2" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>Capabilities</h2>
        <p className="text-muted-foreground" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}>What we commonly automate for growth, ops, and content teams.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {capabilities.map((cap, index) => (
          <div key={index} className="bg-[hsl(220,13%,6%)] border border-border rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md stagger-item">
            <div className="text-2xl mb-2">{cap.emoji}</div>
            <div className="font-heading font-bold text-foreground mb-2">{cap.title}</div>
            <div className="text-muted-foreground text-sm leading-relaxed">{cap.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;

