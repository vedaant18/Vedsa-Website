import { useState } from "react";
import { ArrowRight, ExternalLink, Phone, Mail, X } from "lucide-react";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="cta" className="relative py-20 sm:py-32">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass glass-hover rounded-3xl p-8 sm:p-12 text-center">
            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-glow-pink">
              Ready to automate your business with us?
            </h2>

            {/* Description */}
            <p className="font-body text-lg sm:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Tell us your goals. We'll propose a workflow plan and timeline.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:vedsa0507@gmail.com?subject=Get%20started%20with%20n8n&body=Hi%2C%20I'd%20like%20to%20discuss%20automations."
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
          </div>
        </div>
      </section>

      {/* Floating Book a Call Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 px-6 py-3 font-body font-bold rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-2xl hover:scale-110 transition-all duration-300 pulse-glow"
      >
        Book a call
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in-up">
          <div className="relative max-w-md w-full mx-4 glass rounded-2xl p-8 border-2 border-primary/50">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <X className="w-6 h-6 text-primary" />
            </button>

            {/* Modal Content */}
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4 text-glow-pink">
              Schedule a call
            </h3>

            <div className="flex gap-4 mb-6 font-body text-sm">
              <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-foreground">
                15–20 mins
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-foreground">
                Discovery
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-foreground">
                No commitment
              </span>
            </div>

            <p className="font-body text-foreground/80 mb-8">
              You can call directly or email to book a slot.
            </p>

            {/* Contact Options */}
            <div className="space-y-3">
              <a
                href="tel:7977189601"
                className="group flex items-center gap-3 w-full p-4 rounded-lg neon-border hover:bg-primary/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">Call 7977189601</span>
              </a>

              <a
                href="tel:9920133528"
                className="group flex items-center gap-3 w-full p-4 rounded-lg neon-border hover:bg-primary/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">Call 9920133528</span>
              </a>

              <a
                href="mailto:vedsa0507@gmail.com?subject=Book%20a%20call&body=Hi%20Sahil%2C%20I'd%20like%20to%20book%20a%20call.%20Please%20share%20available%20slots."
                className="group flex items-center gap-3 w-full p-4 rounded-lg neon-border-blue hover:bg-secondary/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-secondary" />
                <span className="font-body text-foreground">Email to book</span>
              </a>
            </div>

            <p className="font-body text-sm text-muted-foreground mt-6 text-center">
              Prefer WhatsApp? Include your number when emailing.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CallToAction;
