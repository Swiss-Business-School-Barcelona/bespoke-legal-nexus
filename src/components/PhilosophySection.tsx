import { CheckCircle } from "lucide-react";

const values = ["Control", "Protección", "Estrategia", "Compromiso real"];

const PhilosophySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Confianza que se demuestra
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
        <p className="text-muted-foreground font-body text-base mb-4">
          Cada cliente recibe atención directa, comunicación constante y una implicación total.
        </p>
        <p className="font-elegant italic text-primary text-lg mb-12">
          No hay improvisación. No hay margen para el error.
        </p>

        <div className="border border-border rounded p-10 bg-secondary/30">
          <p className="font-display text-xl text-foreground mb-8">Elegir G.B.O es elegir:</p>
          <div className="flex flex-col items-center gap-4">
            {values.map((v) => (
              <div key={v} className="flex items-center gap-3 justify-center">
                <CheckCircle className="text-primary" size={20} />
                <span className="font-body tracking-wide text-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
