const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-[5vw] pt-20">
      {/* Main Heading */}
      <h1 
        className="font-heading font-extrabold text-center leading-[0.85] uppercase tracking-tight w-full"
        style={{ 
          fontSize: 'clamp(2rem, 10vw, 15vw)',
          maxWidth: '100%'
        }}
      >
        <span className="block gradient-text hero-line" style={{ whiteSpace: 'nowrap' }}>AUTOMATION</span>
        <span className="block gradient-text-white hero-line" style={{ whiteSpace: 'nowrap' }}>THAT SCALES</span>
      </h1>
    </section>
  );
};

export default Hero;
