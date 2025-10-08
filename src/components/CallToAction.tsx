import { useState } from "react";
import { Phone, Mail, X } from "lucide-react";

const CallToAction = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <>
      <section id="cta" className="py-[5vh] px-[5vw] max-w-7xl mx-auto">
        <div className="bg-[hsl(220,13%,6%)] border border-border rounded-2xl p-[clamp(1.5rem,5vw,2.5rem)] text-center shadow-md">
          <h3 className="font-heading font-bold text-foreground mb-[1vh]" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)' }}>
            Ready to automate your workflow?
          </h3>
          <p className="text-muted-foreground mb-[2vh] max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}>
            Tell us your goals. We'll propose a plan and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-[clamp(0.75rem,2vw,1rem)] justify-center">
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-semibold rounded-xl transition-all hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md text-sm md:text-base"
            >
              Get started
            </button>
            <a
              href="#workflows"
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary font-semibold rounded-xl transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5 text-sm md:text-base"
            >
              See agents
            </a>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-50 flex flex-col md:flex-row gap-2 md:gap-3">
        <button
          onClick={() => setIsEnquiryModalOpen(true)}
          className="bg-primary text-white font-bold px-6 py-2.5 rounded-full hover:bg-secondary transition-all hover:-translate-y-0.5 shadow-lg text-sm whitespace-nowrap order-2 md:order-1 min-w-[120px]"
        >
          Enquire
        </button>
        <button
          onClick={() => setIsCallModalOpen(true)}
          className="bg-primary text-white font-bold px-6 py-2.5 rounded-full hover:bg-secondary transition-all hover:-translate-y-0.5 shadow-lg text-sm whitespace-nowrap order-1 md:order-2 min-w-[120px]"
        >
          Book a call
        </button>
      </div>

      {/* Call Modal */}
      {isCallModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4">
          <div className="relative bg-[#111] border border-border rounded-xl p-5 md:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsCallModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 border border-border rounded-full text-foreground hover:bg-white/10 transition-colors text-2xl leading-none"
            >
              ×
            </button>
            
            <h3 className="text-foreground font-semibold text-center mb-4">Schedule a call</h3>
            
            <div className="flex gap-2 justify-center mb-4">
              <span className="border border-border text-muted-foreground px-3 py-1 rounded-full text-xs bg-white/[0.02]">15–20 mins</span>
              <span className="border border-border text-muted-foreground px-3 py-1 rounded-full text-xs bg-white/[0.02]">Discovery</span>
              <span className="border border-border text-muted-foreground px-3 py-1 rounded-full text-xs bg-white/[0.02]">No commitment</span>
            </div>
            
            <p className="text-muted-foreground text-center mb-4 text-sm">You can call directly or email to book a slot.</p>
            
            <div className="space-y-2 mb-2">
              <a href="tel:7977189601" className="flex items-center gap-2 border border-border hover:border-foreground rounded-lg p-3 text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>Call 7977189601</span>
              </a>
              <a href="tel:9920133528" className="flex items-center gap-2 border border-border hover:border-foreground rounded-lg p-3 text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>Call 9920133528</span>
              </a>
            </div>
            
            <a href="mailto:vedsa0507@gmail.com?subject=Book%20a%20call&body=Hi%20Sahil%2C%20I'd%20like%20to%20book%20a%20call.%20Please%20share%20available%20slots." className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-semibold rounded-lg p-3 transition-colors mt-2">
              <Mail className="w-4 h-4" />
              <span>Email to book</span>
            </a>
            
            <p className="text-muted-foreground text-xs text-center mt-3">Prefer WhatsApp? Include your number when emailing.</p>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      {isEnquiryModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4">
          <div className="relative bg-[#111] border border-border rounded-xl p-5 md:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsEnquiryModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 border border-border rounded-full text-foreground hover:bg-white/10 transition-colors text-2xl leading-none"
            >
              ×
            </button>
            
            <h3 className="text-foreground font-semibold text-center mb-4">Project enquiry</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-foreground mb-1">Name</label>
                <input type="text" placeholder="Your name" className="w-full p-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none text-foreground" required />
              </div>
              <div>
                <label className="block text-sm text-foreground mb-1">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full p-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none text-foreground" required />
              </div>
              <div>
                <label className="block text-sm text-foreground mb-1">Company</label>
                <input type="text" placeholder="Company (optional)" className="w-full p-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none text-foreground" />
              </div>
              <div>
                <label className="block text-sm text-foreground mb-1">What do you need?</label>
                <textarea placeholder="Describe your workflow or automation needs" rows={4} className="w-full p-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none text-foreground resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-semibold rounded-xl p-3 transition-colors">
                Submit enquiry
              </button>
              <p className="text-muted-foreground text-xs text-center"></p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CallToAction;
