export default function Footer() {
  return (
    <footer
      className="px-4 py-14 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "var(--color-accent)",
        color: "var(--color-cream)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <h2
            className="text-3xl leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kataleya Flawers
          </h2>
          <p className="max-w-sm text-sm/6">Detalles y floristería...</p>
          <p className="text-sm/6 opacity-80">32 años acompañando momentos especiales.</p>
        </div>

        <div className="space-y-3">
          <h3
            className="text-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Dirección
          </h3>
          <p className="max-w-xs text-sm/6">
            Plaza de flores, Teodosio Parreño 115, Lima 15047
          </p>
        </div>

        <div className="space-y-3">
          <h3
            className="text-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contacto
          </h3>
          <p className="text-sm/6">+51 XXX XXX XXX</p>
        </div>
      </div>
    </footer>
  );
}
