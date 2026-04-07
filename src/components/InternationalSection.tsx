import { Plane, MapPin, Handshake, Car, HeartHandshake } from "lucide-react";

const items = [
  { icon: Plane, label: "Desplazamientos profesionales internacionales" },
  { icon: Handshake, label: "Acompañamiento legal presencial" },
  { icon: MapPin, label: "Coordinación integral de gestiones" },
  { icon: Car, label: "Recepción en aeropuerto en Barcelona" },
  { icon: HeartHandshake, label: "Asistencia completa durante la estancia" },
];

const InternationalSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Movilidad total en Europa
          </h2>
          <div className="gold-divider w-24 mx-auto my-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            El despacho ofrece cobertura en toda Europa, adaptándose completamente a las necesidades del cliente.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <item.icon className="text-primary shrink-0 mt-1" size={20} />
              <span className="font-body text-sm text-foreground/80">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
            Usted no se adapta al proceso.<br />
            <span className="text-gold-gradient">El proceso se adapta a usted.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
