import { Scale, Shield, Briefcase, FileText, Home, Users, Lock, Gavel } from "lucide-react";

const areas = [
  { icon: Scale, title: "Derecho Civil" },
  { icon: Gavel, title: "Derecho Penal" },
  { icon: Briefcase, title: "Derecho Laboral" },
  { icon: Users, title: "Empresas y Sociedades" },
  { icon: FileText, title: "Contratos" },
  { icon: Home, title: "Inmobiliario e Hipotecario" },
  { icon: Shield, title: "Extranjería" },
  { icon: Lock, title: "Derecho Penitenciario", subtitle: "Servicio Prime" },
];

const PracticeAreasSection = () => {
  return (
    <section id="areas" className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Cobertura legal integral
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {areas.map((area) => (
            <div key={area.title} className="group border border-border bg-secondary/50 rounded p-8 flex flex-col items-center gap-4 hover:border-primary/50 transition-colors">
              <area.icon className="text-primary" size={32} />
              <h3 className="font-display text-lg text-foreground">{area.title}</h3>
              {area.subtitle && (
                <span className="font-elegant italic text-primary text-sm">{area.subtitle}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
