import WorkflowCard from "./WorkflowCard";

const workflowsData = [
  {
    number: "01",
    title: "Cold Emailer Workflow",
    description: "Finds targets, enriches data, generates tailored email copy, sequences outreach, and tracks replies across your CRM.",
    features: ["Finder", "Enrichment", "Open/Reply Tracking", "CRM Sync"],
    images: ["https://vedsan8n52002.xyz/assets/wf-cold-emailer.jpg"],
    emailSubject: "Request Cold Emailer Workflow",
    emailBody: "Hi Sahil, I'm interested in the Cold Emailer Workflow. Please reach out with next steps.",
  },
  {
    number: "02",
    title: "Hiring / Lead Agent Workflow",
    description: "Multi-agent pipeline that qualifies candidates or leads, routes them, asks follow-ups, and books meetings automatically.",
    features: ["Multi-Agent", "Scoring", "Auto-Routing", "Calendar"],
    images: ["https://vedsan8n52002.xyz/assets/wf-hiring-leadgen.jpg"],
    emailSubject: "Request Hiring / Lead Agent Workflow",
    emailBody: "Hi Sahil, I'm interested in the Hiring / Lead Agent Workflow. Please reach out.",
  },
  {
    number: "03",
    title: "Keyword Research Workflow",
    description: "Pulls SERP data, clusters keywords, scores difficulty vs. intent, and exports ready-to-brief topic maps.",
    features: ["SERP", "Clustering", "Intent", "Export"],
    images: [
      "https://vedsan8n52002.xyz/assets/wf-keyword-1.jpg",
      "https://vedsan8n52002.xyz/assets/wf-keyword-2.jpg",
    ],
    emailSubject: "Request Keyword Research Workflow",
    emailBody: "Hi Sahil, I'd like the Keyword Research Workflow. Let's chat.",
  },
  {
    number: "04",
    title: "Garment → Model Generator",
    description: "Takes garment images and generates on-model visuals with consistent poses and lighting for product previews.",
    features: ["Vision", "Styles", "Consistency", "Batch"],
    images: ["https://vedsan8n52002.xyz/assets/wf-model-generator.jpg"],
    emailSubject: "Request Garment → Model Generator",
    emailBody: "Hi Sahil, I'm interested in the Garment to Model Generator. Please reach out.",
  },
];

const Workflows = () => {
  return (
    <section id="workflows" className="relative py-20 sm:py-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold gradient-text text-glow-blue mb-4">
            Our Workflows
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Workflow Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {workflowsData.map((workflow, index) => (
            <WorkflowCard key={index} {...workflow} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflows;
