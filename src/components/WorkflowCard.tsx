import { ArrowRight } from "lucide-react";

interface WorkflowCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
  emailSubject: string;
  emailBody: string;
}

const WorkflowCard = ({
  number,
  title,
  description,
  features,
  images,
  emailSubject,
  emailBody,
}: WorkflowCardProps) => {
  return (
    <div className="glass glass-hover rounded-2xl p-6 sm:p-8 animate-fade-in-up">
      {/* Header */}
      <div className="mb-6">
        <span className="font-heading text-sm text-primary mb-2 block">Workflow {number}</span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 text-glow-pink">
          {title}
        </h3>
        <p className="font-body text-foreground/80 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-6">
        {features.map((feature, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full text-sm font-body bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-foreground"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Images */}
      <div className={`grid ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mb-6`}>
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg neon-border">
            <img
              src={image}
              alt={`${title} preview ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href={`mailto:vedsa0507@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
        className="group inline-flex items-center gap-2 px-6 py-3 font-body font-medium rounded-lg neon-border hover:bg-primary/10 transition-all duration-300"
      >
        Request this workflow
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default WorkflowCard;
