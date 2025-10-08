import Navigation from "@/components/Navigation";
import CallToAction from "@/components/CallToAction";
import HoneycombBackground from "@/components/HoneycombBackground";

const About = () => {
  return (
    <div className="min-h-screen page-transition overflow-x-hidden relative">
      <HoneycombBackground />
      <div className="relative z-10 bg-transparent">
        <Navigation />
        <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-[5vw] pt-20">
          <h1 
            className="font-heading font-extrabold text-center leading-[0.85] uppercase tracking-tight w-full" 
            style={{ 
              fontSize: 'clamp(2rem, 10vw, 15vw)',
              maxWidth: '100%'
            }}
          >
            <span className="block gradient-text hero-line" style={{ whiteSpace: 'nowrap' }}>ABOUT</span>
            <span className="block gradient-text-white hero-line" style={{ whiteSpace: 'nowrap' }}>OUR STUDIO</span>
          </h1>
        </section>

        {/* Team Section */}
        <section className="py-[5vh] px-[5vw]">
          <div className="text-center mb-[4vh] max-w-[1700px] mx-auto">
            <h2 className="font-bold text-foreground mb-[1vh]" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)' }}>Who we are</h2>
            <p className="font-bold text-foreground mb-[1vh]" style={{ fontSize: 'clamp(1.5em, 3vw, 1.875rem)' }}>We're Vedaant and Sahil — childhood friends turned creators. Passionate about innovation, we build AI-driven automation solutions that transform everyday processes into seamless, scalable systems.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-[1800px] mx-auto">
            <article className="bg-[hsl(220,13%,6%)] border border-border rounded-2xl p-6 md:p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex gap-5 md:gap-6 items-start">
                <div className="flex-1">
                  <div className="font-heading font-bold text-foreground text-xl md:text-2xl mb-4">Vedaant Bhangle</div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                   Passionate developer with a strong foundation in application and web development. With hands-on experience in supply chain operations, bridges the gap between technology and real-world business processes. Focused on designing AI-powered automation systems that are efficient, intuitive, and scalable. Known for a problem-solving mindset and the ability to turn complex ideas into practical digital solutions that deliver real impact.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/vedaant-bhangle-90384a212/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block px-6 py-2.5 border-2 border-primary text-primary font-semibold rounded-full transition-all hover:bg-primary hover:text-white text-sm md:text-base"
                  >
                    View LinkedIn
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="/profile_pictures/Vedaants pic.jpeg" 
                    alt="Vedaant Bhangle" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/30"
                  />
                </div>
              </div>
            </article>

            <article className="bg-[hsl(220,13%,6%)] border border-border rounded-2xl p-6 md:p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex gap-5 md:gap-6 items-start">
                <div className="flex-1">
                  <div className="font-heading font-bold text-foreground text-xl md:text-2xl mb-4">Sahil Mehra</div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                   Automation developer with deep expertise in process optimization and intelligent system design. Skilled at identifying inefficiencies and transforming them into streamlined, automated workflows. Specializes in building custom automation solutions that integrate AI and emerging technologies to enhance efficiency and precision. Combines technical accuracy with creativity, ensuring every solution is reliable, effective, and built to scale.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/sahil-mehra-a93549258/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block px-6 py-2.5 border-2 border-primary text-primary font-semibold rounded-full transition-all hover:bg-primary hover:text-white text-sm md:text-base"
                  >
                    View LinkedIn
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="/profile_pictures/Sahils pic.jpeg" 
                    alt="Sahil Mehra" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/30"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-12 px-8 max-w-7xl mx-auto">
          <div className="max-w-[980px] mx-auto text-center relative bg-[hsl(220,13%,6%)] border border-[hsl(0,0%,12%)] rounded-2xl p-12 shadow-lg" style={{
            boxShadow: '0 0 44px hsla(162, 30%, 60%, 0.25)'
          }}>
            {/* Glow Effect */}
            <div className="absolute inset-[-10%] bg-[radial-gradient(800px_300px_at_18%_30%,hsla(162,30%,60%,0.25),transparent_60%),radial-gradient(700px_280px_at_80%_70%,hsla(162,30%,60%,0.25),transparent_60%)] blur-[14px] -z-10 pointer-events-none"></div>
            
            <h2 className="text-[clamp(2rem,6vw,3.25rem)] font-heading font-bold text-foreground mb-4">
              We create smart automation that works as hard as you do.
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-[70ch] mx-auto mb-6">
              We design AI-powered automation solutions that handle the repetitive, the complex, and everything in between — so your team can move faster and focus on what truly matters. From workflow design to seamless execution, our systems bring clarity, speed, and reliability to every process.
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {["Workflow design", "Process intelligence", "Custom solutions", "Performance"].map((pill, index) => (
                <span
                  key={index}
                  className="border border-border text-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5 cursor-pointer"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-[5vh] px-[5vw] max-w-7xl mx-auto">
          <div className="text-center mb-[4vh]">
            <h2 className="font-bold text-foreground mb-[1vh]" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)' }}>How we work</h2>
            <p className="text-muted-foreground" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}>Opinionated process to ship fast, robust, and maintainable automation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(1.5rem,4vw,2rem)]">
            {/* Left Column - Description and Capabilities */}
            <div className="lg:col-span-2">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our automation philosophy centers on reliability and maintainability. Every workflow includes 
                proper error handling, smart retries, comprehensive alerts, and clean handover documentation. 
                We collaborate closely with your team to understand requirements and deliver solutions that scale.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-6">Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { emoji: "⚙️", label: "Workflow architecture" },
                  { emoji: "🔗", label: "Integrations & APIs" },
                  { emoji: "🤖", label: "AI agents & prompts" },
                  { emoji: "📈", label: "Monitoring & logging" },
                  { emoji: "🧪", label: "Testing & QA flows" },
                  { emoji: "📄", label: "Docs & handover" }
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[hsl(220,13%,6%)] border border-border rounded-xl p-4 transition-all hover:-translate-y-0.5">
                    <span className="text-2xl">{skill.emoji}</span>
                    <span className="text-foreground font-medium">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats */}
            <aside className="flex flex-col gap-8 bg-[hsl(220,13%,6%)] border border-border rounded-2xl p-8 shadow-sm">
              <div className="text-center">
                <span className="block text-5xl font-bold text-primary mb-2">50+</span>
                <span className="text-muted-foreground text-sm">Workflows shipped</span>
              </div>
              <div className="text-center">
                <span className="block text-5xl font-bold text-primary mb-2">99.9%</span>
                <span className="text-muted-foreground text-sm">Uptime targets</span>
              </div>
              <div className="text-center">
                <span className="block text-5xl font-bold text-primary mb-2">24/7</span>
                <span className="text-muted-foreground text-sm">Monitoring ready</span>
              </div>
            </aside>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-8 text-center text-muted-foreground">
          <div>© Vedsa Automation Studio</div>
        </footer>
      </main>

      {/* Call to action buttons are included from the component */}
      <CallToAction />
      </div>
    </div>
  );
};

export default About;

