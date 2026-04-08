const testimonials = [
  {
    name: "Alexandru Mislitsev",
    detail: "Gran Canaria",
    text: "Gracias a la profesionalidad y dedicación del despacho, mi caso fue gestionado con absoluta precisión. Desde el primer momento transmiten confianza y seguridad. Recomiendo sus servicios sin ninguna duda.",
  },
  {
    name: "Tatiana Morozova",
    detail: "Reclamación de cantidades",
    text: "Un equipo altamente cualificado que logró resolver mi reclamación de forma eficaz. Destaco su claridad, comunicación constante y resultados excelentes. Verdaderos expertos en su campo.",
  },
  {
    name: "Natalia Ustinova",
    detail: "Desahucio y penal (amenazas)",
    text: "Mi situación era compleja, pero el despacho actuó con rapidez y firmeza. Me sentí respaldada en todo momento. Su experiencia en casos legales delicados marca la diferencia.",
  },
];

const trustMetrics = [
  { value: "+350", label: "Casos atendidos" },
  { value: "85%", label: "Casos ganados" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(212,175,55,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative container mx-auto px-4 max-w-6xl">
        <div className="text-center animate-fade-in-up">
          <h2 className="font-display text-3xl md:text-5xl text-gold-gradient leading-tight">
            Clientes que confían en nosotros
          </h2>
          <p className="mt-4 font-body text-sm md:text-base tracking-wide text-foreground/80">
            Resultados reales en derecho internacional
          </p>
          <div className="gold-divider w-36 md:w-48 mx-auto my-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="animate-fade-in-up rounded-xl border border-primary/30 bg-card/80 backdrop-blur-sm p-7 md:p-8 text-left shadow-[0_10px_45px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_16px_56px_rgba(212,175,55,0.2)]"
            >
              <h3 className="font-display text-2xl text-foreground leading-tight">{item.name}</h3>
              <p className="mt-2 text-sm tracking-wide text-[#D4AF37] font-body">{item.detail}</p>
              <div className="gold-divider w-16 my-5" />
              <p className="font-body text-sm md:text-base leading-relaxed text-foreground/85">"{item.text}"</p>
            </article>
          ))}
        </div>

        <div className="mt-14 md:mt-16 pt-8 border-t border-primary/25">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="animate-fade-in-up">
                <p className="font-display text-4xl md:text-5xl text-[#D4AF37] leading-none drop-shadow-[0_0_18px_rgba(212,175,55,0.25)]">
                  {metric.value}
                </p>
                <p className="mt-3 font-body text-sm tracking-wide text-foreground/75">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
