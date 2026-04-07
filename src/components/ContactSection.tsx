import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `Hola, soy ${form.name}. ${form.message}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(whatsappText)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Consulta privada
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
        <p className="text-muted-foreground font-body mb-10">
          La primera toma de contacto es completamente confidencial.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <input
            type="text"
            placeholder="Nombre completo"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-secondary border border-border rounded px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-secondary border border-border rounded px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-secondary border border-border rounded px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder="Describa brevemente su consulta"
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-secondary border border-border rounded px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-gold-gradient text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
          >
            <Send size={16} />
            Enviar consulta
          </button>
        </form>
        <div className="mt-8">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-primary font-body text-sm tracking-wide hover:opacity-80 transition-opacity"
          >
            <MessageCircle size={20} />
            WhatsApp directo — Atención inmediata
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
