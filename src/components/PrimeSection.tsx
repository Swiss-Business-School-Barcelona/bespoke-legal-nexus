import { Star, Clock, BarChart3, Zap, ShieldCheck } from "lucide-react";

const features = [
  { icon: Star, label: "Atención prioritaria" },
  { icon: Clock, label: "Disponibilidad 24/7" },
  { icon: BarChart3, label: "Seguimiento constante" },
  { icon: Zap, label: "Intervención inmediata" },
  { icon: ShieldCheck, label: "Estrategia personalizada" },
];

const PrimeSection = () => {
  return (
    <section id="prime" className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Cuando el nivel de exigencia es máximo
        </h2>
        <p className="text-muted-foreground font-body text-base mb-4">Servicio Prime</p>
        <div className="gold-divider w-24 mx-auto my-6" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-4 p-6">
              <f.icon className="text-primary" size={28} />
              <span className="font-body text-sm tracking-wide text-foreground">{f.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-12 font-elegant italic text-primary text-lg max-w-xl mx-auto">
          Diseñado para situaciones críticas donde cada decisión cuenta.
        </p>
      </div>
    </section>
  );
};

export default PrimeSection;
