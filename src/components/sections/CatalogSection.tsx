import Image from "next/image";

const products = [
  {
    id: 1,
    nombre: "Jardín Encendido",
    descripcion: "Composición vibrante para celebrar fechas que merecen quedarse en la memoria.",
    categoria: "Arreglos florales",
  },
  {
    id: 2,
    nombre: "Orquídea Imperial",
    descripcion: "Selección elegante con presencia delicada para regalar distinción y calma.",
    categoria: "Orquídeas",
  },
  {
    id: 3,
    nombre: "Ramo Aurora",
    descripcion: "Ramo fresco y expresivo pensado para sorprender con un gesto cercano.",
    categoria: "Ramos",
  },
  {
    id: 4,
    nombre: "Mesa de Primavera",
    descripcion: "Centro floral equilibrado para elevar reuniones, cenas y celebraciones íntimas.",
    categoria: "Centros de mesa",
  },
  {
    id: 5,
    nombre: "Homenaje Sereno",
    descripcion: "Diseño sobrio y respetuoso para acompañar despedidas con sensibilidad.",
    categoria: "Coronas",
  },
  {
    id: 6,
    nombre: "Detalle Esencial",
    descripcion: "Arreglo compacto con acabado fino para obsequios con intención y calidez.",
    categoria: "Detalles",
  },
] as const;

export default function CatalogSection() {
  return (
    <section
      id="catalogo"
      className="scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-4 text-center">
          <p
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Colección destacada
          </p>
          <div className="space-y-3">
            <h2
              className="text-4xl sm:text-5xl"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Nuestro Catálogo
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8">
              Arreglos pensados para cada momento especial
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[1.75rem] border transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-cream)",
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 35%, transparent)",
                boxShadow:
                  "0 18px 50px color-mix(in srgb, var(--color-dark) 8%, transparent)",
              }}
            >
              <div
                className="relative aspect-[4/3]"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-secondary) 18%, var(--color-cream))",
                }}
              >
                <Image
                  src="/catalog-placeholder.svg"
                  alt={product.nombre}
                  fill
                  priority={product.id === 1}
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 px-6 py-6">
                <p
                  className="text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ color: "var(--color-accent)" }}
                >
                  {product.categoria}
                </p>
                <h3
                  className="text-2xl"
                  style={{
                    color: "var(--color-dark)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {product.nombre}
                </h3>
                <p className="text-sm leading-7">{product.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
