"use client";

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulario de contacto enviado");
  };

  return (
    <form
      className="space-y-5 rounded-[2rem] border p-6 sm:p-8"
      style={{
        backgroundColor: "var(--color-cream)",
        borderColor: "color-mix(in srgb, var(--color-primary) 16%, transparent)",
        boxShadow:
          "0 20px 50px color-mix(in srgb, var(--color-dark) 8%, transparent)",
      }}
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label htmlFor="nombre" className="text-sm font-semibold">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          className="w-full rounded-full border px-4 py-3 outline-none transition-opacity"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-dark) 14%, transparent)",
            color: "var(--color-dark)",
            backgroundColor: "var(--color-cream)",
          }}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="telefono" className="text-sm font-semibold">
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          className="w-full rounded-full border px-4 py-3 outline-none transition-opacity"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-dark) 14%, transparent)",
            color: "var(--color-dark)",
            backgroundColor: "var(--color-cream)",
          }}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-semibold">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          className="w-full rounded-[1.5rem] border px-4 py-3 outline-none transition-opacity"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-dark) 14%, transparent)",
            color: "var(--color-dark)",
            backgroundColor: "var(--color-cream)",
          }}
        />
      </div>

      <button
        type="submit"
        className="rounded-full px-7 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-opacity hover:opacity-90"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-cream)",
        }}
      >
        Enviar mensaje
      </button>
    </form>
  );
}
