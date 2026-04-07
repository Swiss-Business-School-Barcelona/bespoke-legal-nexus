import portrait from "@/assets/lawyer-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="despacho" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded">
            <img src={portrait} alt="Galina Braniste Olarescu" className="w-full h-auto object-cover" loading="lazy" width={896} height={1152} />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Precisión jurídica.<br />Compromiso absoluto.
            </h2>
            <div className="gold-divider w-24" />
            <div className="flex flex-col gap-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                En un entorno legal complejo, la diferencia no está solo en el conocimiento, sino en la capacidad de actuar con decisión, anticipación y control.
              </p>
              <p>
                G.B.O – GALINA BRANISTE OLARESCU, con base en Barcelona, representa un enfoque legal internacional orientado a clientes que exigen resultados, confidencialidad y atención personalizada.
              </p>
              <p>
                Cada caso se aborda con una estrategia única, diseñada para proteger los intereses del cliente en todo momento.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="font-display text-xl text-foreground mb-4">Galina Braniste Olarescu</h3>
              <ul className="flex flex-col gap-2 text-muted-foreground font-body text-sm">
                <li>• Licenciada en Derecho – UOC Barcelona</li>
                <li>• Màster en Derecho Laboral</li>
                <li>• Màster en Impuestos y Fiscalidad</li>
                <li>• Más de 15 años de experiencia</li>
                <li>• Especialización en entorno internacional</li>
                <li>• Atención directa y personalizada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
