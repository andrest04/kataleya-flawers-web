import Image from "next/image";

import HeroButtons from "./HeroButtons";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-5">
            <p
              className="text-sm font-semibold tracking-[0.22em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Detalles y floristería...
            </p>
            <h1
              className="text-5xl leading-none sm:text-6xl lg:text-7xl"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Kataleya Flawers
            </h1>
            <p className="max-w-2xl text-lg leading-8">
              32 años creando momentos especiales con arreglos florales únicos y
              orquídeas de la más alta calidad en Lima.
            </p>
          </div>

          <HeroButtons
            primaryTarget="#catalogo"
            secondaryTarget="#contacto"
          />
        </div>

        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src="/hero-placeholder.svg"
            alt="Hero Image"
            width={1200}
            height={600}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
