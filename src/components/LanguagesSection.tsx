import { Globe } from "lucide-react";

const languages = ["Moldavo", "Rumano", "Ruso", "Español", "Catalán"];

const LanguagesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <Globe className="mx-auto mb-6 text-primary" size={40} />
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Comunicación sin barreras
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {languages.map((lang) => (
            <span key={lang} className="font-body text-sm tracking-widest uppercase text-muted-foreground border border-border px-6 py-2 rounded">
              {lang}
            </span>
          ))}
        </div>
        <p className="font-elegant italic text-primary text-lg">
          Comunicación clara, sin intermediarios.
        </p>
      </div>
    </section>
  );
};

export default LanguagesSection;
