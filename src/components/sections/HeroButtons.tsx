"use client";

type HeroButtonsProps = {
  primaryTarget: string;
  secondaryTarget: string;
};

export default function HeroButtons({
  primaryTarget,
  secondaryTarget,
}: HeroButtonsProps) {
  const handleScroll = (targetId: string) => {
    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 88;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <button
        type="button"
        className="rounded-full px-7 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-opacity hover:opacity-90"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-cream)",
        }}
        onClick={() => handleScroll(primaryTarget)}
      >
        Ver catálogo
      </button>
      <button
        type="button"
        className="rounded-full border px-7 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-opacity hover:opacity-80"
        style={{
          borderColor: "var(--color-accent)",
          color: "var(--color-accent)",
        }}
        onClick={() => handleScroll(secondaryTarget)}
      >
        Contáctanos
      </button>
    </div>
  );
}
