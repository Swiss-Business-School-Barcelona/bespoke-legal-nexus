import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/gbo-logo-main.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-black/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(212,175,55,0.18),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(212,175,55,0.12),transparent_50%)]" />
      </div>
      <div className="relative z-10 container mx-auto px-5 md:px-8 py-16 md:py-24 text-center flex flex-col items-center animate-fade-in-up">
        <div className="w-full max-w-[240px] md:max-w-[300px] mb-8 md:mb-10 transition-transform duration-700 hover:scale-[1.015]">
          <img
            src={logo}
            alt="GBO crest - Galina Braniste Olarescu"
            width={828}
            height={952}
            className="w-full h-auto object-contain drop-shadow-[0_0_28px_rgba(212,175,55,0.25)]"
          />
        </div>

        <h1 className="font-display text-4xl md:text-6xl tracking-[0.03em] leading-[1.08] text-gold-gradient max-w-5xl">
          Galina Braniste Olarescu
        </h1>

        <div className="gold-divider w-40 md:w-56 mt-7 mb-7" />

        <p className="font-body uppercase text-[11px] md:text-sm tracking-[0.28em] text-foreground/85 max-w-4xl">
          Despacho internacional de abogados
        </p>

        <p className="font-body text-[12px] md:text-sm tracking-[0.18em] text-foreground/75 mt-3 max-w-4xl">
          Частная международная юридическая практика
        </p>

        <div className="gold-divider w-48 md:w-64 mt-8 mb-8" />

        <p className="font-elegant italic text-primary text-3xl md:text-5xl leading-tight">
          Su tranquilidad, garantizada.
        </p>

        <p className="font-elegant italic text-primary/85 text-2xl md:text-4xl leading-tight mt-3">
          Ваше спокойствие гарантировано.
        </p>

        <a
          href="#contacto"
          className="mt-10 inline-block bg-gold-gradient text-primary-foreground font-body text-xs md:text-sm tracking-[0.2em] uppercase px-8 md:px-10 py-3 md:py-4 rounded hover:opacity-90 transition-opacity"
        >
          Solicitar consulta privada
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
