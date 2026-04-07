const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} G.B.O — Galina Braniste Olarescu
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mt-2">
          Despacho Internacional de Abogados · Barcelona
        </p>
      </div>
    </footer>
  );
};

export default Footer;
