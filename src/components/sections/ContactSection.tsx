import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: "📍",
    text: "Plaza de flores, Teodosio Parreño 115, Lima 15047",
  },
  {
    icon: "📞",
    text: "+51 XXX XXX XXX",
  },
  {
    icon: "🕐",
    text: "Lunes a Sábado: 8am - 7pm",
  },
] as const;

export default function ContactSection() {
  return (
    <section id="contacto" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <p
              className="text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Atención cercana
            </p>
            <h2
              className="text-4xl sm:text-5xl"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Contáctanos
            </h2>
            <p className="max-w-xl text-lg leading-8">
              Estamos en Lima para crear el arreglo perfecto para ti
            </p>
          </div>

          <div
            className="space-y-4 rounded-[2rem] border p-6"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-secondary) 10%, var(--color-cream))",
              borderColor:
                "color-mix(in srgb, var(--color-accent) 14%, transparent)",
            }}
          >
            {contactDetails.map((detail) => (
              <p key={detail.text} className="flex items-start gap-3 text-base leading-7">
                <span aria-hidden="true">{detail.icon}</span>
                <span>{detail.text}</span>
              </p>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
