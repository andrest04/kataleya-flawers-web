# Kataleya Flawers

Sitio web de landing page para **Kataleya Flawers**, floristería ubicada en Lima, Perú, con 32 años de experiencia en arreglos florales y orquídeas.

## Stack tecnológico

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **Playwright** (pruebas)
- **Fuentes:** Playfair Display (títulos) · Lato (cuerpo) vía Google Fonts

## Estructura del proyecto

```
src/
├── app/
│   ├── globals.css        # Variables CSS de la paleta y configuración de Tailwind
│   ├── layout.tsx         # Layout raíz (fuentes Geist + metadatos globales)
│   └── page.tsx           # Página principal (composición de secciones)
└── components/
    ├── Navbar.tsx          # Barra de navegación fija con scroll suave y menú móvil
    ├── Footer.tsx          # Pie de página con dirección y contacto
    └── sections/
        ├── HeroSection.tsx     # Sección de bienvenida con imagen y CTAs
        ├── HeroButtons.tsx     # Botones de llamada a la acción del hero
        ├── CatalogSection.tsx  # Catálogo de 6 productos en grilla responsiva
        ├── AboutSection.tsx    # Historia y estadísticas del negocio
        ├── ContactSection.tsx  # Sección de contacto (formulario + datos)
        └── ContactForm.tsx     # Formulario de contacto
```

## Secciones de la página

| ID anchor    | Sección   | Descripción                                              |
| ------------ | --------- | -------------------------------------------------------- |
| `#hero`      | Hero      | Presentación de la marca con botones hacia catálogo y contacto |
| `#catalogo`  | Catálogo  | Grilla de 6 productos: arreglos, orquídeas, ramos, centros de mesa, coronas y detalles |
| `#nosotros`  | Nosotros  | Historia del negocio con 3 métricas destacadas           |
| `#contacto`  | Contacto  | Formulario de contacto, dirección y horario de atención  |

## Paleta de colores

| Variable              | Valor       | Uso                  |
| --------------------- | ----------- | -------------------- |
| `--color-primary`     | `#c0392b`   | Títulos principales  |
| `--color-secondary`   | `#e8b84b`   | Acentos dorados      |
| `--color-accent`      | `#2d5a1b`   | Verde destacado      |
| `--color-cream`       | `#fdfcfa`   | Fondo base           |
| `--color-dark`        | `#1a1a1a`   | Texto general        |

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

| Comando         | Descripción                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desarrollo             |
| `npm run build` | Compilación para producción        |
| `npm run start` | Servidor de producción             |

