import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/gbo-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-8 animate-fade-in-up">
        <img src={logo} alt="GBO - Galina Braniste Olarescu" className="w-48 md:w-64 mb-4" />
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl text-foreground">
          Defensa legal internacional al más alto nivel.
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl tracking-wide">
          Estrategia, discreción y protección absoluta para clientes que no pueden permitirse errores.
        </p>

        <div className="gold-divider w-48 my-4" />

        <div className="flex flex-col gap-2 font-elegant italic text-primary text-lg md:text-xl">
          <span>Su tranquilidad, garantizada.</span>
          <span>Ваше спокойствие гарантировано.</span>
          <span>Liniștea dumneavoastră, garantată.</span>
          <span>La seva tranquil·litat, garantida.</span>
        </div>

        <a
          href="#contacto"
          className="mt-6 inline-block bg-gold-gradient text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 rounded hover:opacity-90 transition-opacity"
        >
          Solicitar consulta privada
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
