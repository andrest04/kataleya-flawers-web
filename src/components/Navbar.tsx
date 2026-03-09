"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = (href: string) => {
    const target = document.querySelector(href);

    if (!target) {
      setIsMenuOpen(false);
      return;
    }

    const top =
      target.getBoundingClientRect().top + window.scrollY - 88;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-[background-color,box-shadow]"
      style={{
        backgroundColor: "var(--color-cream)",
        boxShadow: isScrolled
          ? "0 10px 30px color-mix(in srgb, var(--color-dark) 10%, transparent)"
          : "none",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="text-left text-2xl leading-none"
          onClick={() => handleNavigate("#hero")}
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-heading)",
          }}
        >
          Kataleya Flawers
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className="cursor-pointer text-sm tracking-[0.08em] uppercase transition-opacity hover:opacity-70"
              onClick={() => handleNavigate(link.href)}
              style={{ color: "var(--color-dark)" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span
            className="block h-0.5 w-6 transition-transform"
            style={{
              backgroundColor: "var(--color-dark)",
              transform: isMenuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-0.5 w-6 transition-opacity"
            style={{
              backgroundColor: "var(--color-dark)",
              opacity: isMenuOpen ? "0" : "1",
            }}
          />
          <span
            className="block h-0.5 w-6 transition-transform"
            style={{
              backgroundColor: "var(--color-dark)",
              transform: isMenuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {isMenuOpen ? (
        <div
          className="border-t px-4 py-4 md:hidden"
          style={{
            backgroundColor: "var(--color-cream)",
            borderColor: "color-mix(in srgb, var(--color-dark) 12%, transparent)",
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                className="w-full text-left text-sm tracking-[0.08em] uppercase"
                onClick={() => handleNavigate(link.href)}
                style={{ color: "var(--color-dark)" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
