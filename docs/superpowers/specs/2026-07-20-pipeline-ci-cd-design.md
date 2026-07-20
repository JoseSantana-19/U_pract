# Diseño: Página de equipo con pipeline CI/CD (GitHub Actions + Pages)

**Fecha:** 2026-07-20
**Contexto:** Trabajo autónomo, Integración de Sistemas y Plataformas, Unidad III (Segundo Parcial). Guía: `TI_SegundoParcial_ISP_MaholyVelasquez (1).pdf`.

## Objetivo

Desplegar automáticamente, en cada push a `main`, una página estática con información del equipo (Universidad Laica Eloy Alfaro de Manabí, carrera Tecnologías de la Información, materia Integración de Sistemas y Plataformas, docente Ing. Maholy Velásquez), usando GitHub Actions como pipeline y GitHub Pages como destino.

## Arquitectura

```
U_pract/
├── .github/workflows/deploy.yml   # pipeline Actions (test -> build -> deploy)
├── index.html                     # página principal
├── src/
│   ├── main.js                    # lógica (build info, toggle tema, confetti)
│   ├── style.css
│   └── data/team.js               # datos del equipo (array)
├── public/                        # assets estáticos
├── tests/
│   └── team.test.js               # Vitest, valida datos del equipo
├── package.json
├── vite.config.js
└── README.md
```

Stack: Vite (vanilla) + Vitest. Sin framework UI — HTML/CSS/JS plano bajo un bundler real, para que el pipeline tenga etapas build/test genuinas.

## Flujo del pipeline

1. Push a `main` dispara `.github/workflows/deploy.yml`.
2. Job `test-and-build`: `npm ci` → `npm test` (Vitest) → `npm run build` (Vite genera `dist/`, inyecta commit hash + timestamp vía `define`).
3. Job `deploy` (depende del anterior vía `needs`): sube `dist/` como artifact y lo publica con `actions/deploy-pages`.
4. Si `test` o `build` fallan, `deploy` no corre.
5. Sitio público: `https://josesantana-19.github.io/U_pract/`.

## Reparto de trabajo (commits individuales por integrante)

| # | Persona | Parte | Rama |
|---|---------|-------|------|
| 1 | Jose Santana | Scaffold Vite, estructura, `index.html` esqueleto, pipeline `deploy.yml` | `feature/scaffold-pipeline` |
| 2 | Palma Tejena Michael | `src/data/team.js` + tarjetas del equipo (HTML/CSS) | `feature/team-cards` |
| 3 | Meza Bolaños Jordan | Hero section + footer con commit hash/timestamp + toggle modo oscuro | `feature/hero-footer` |
| 4 | Solórzano Macías Nayely | `tests/team.test.js` (Vitest) + README (explicación técnica) + easter egg/confetti | `feature/tests-docs` |

Cada quien clona el repo, trabaja en su rama con su propia identidad git (nombre/email de su cuenta GitHub), commitea, hace push y abre PR contra `main`. El merge de cada PR deja su autoría en el historial (criterio 4 de la rúbrica).

## Testing

Único test real: Vitest valida que `team.js` tenga los 4 integrantes con campos requeridos (`nombre`, `rol`). Corre en el pipeline antes del build; si falla, no se despliega.

## Fuera de alcance

- Backend, base de datos, autenticación.
- Frameworks UI (React/Vue) — vanilla JS es suficiente y más simple de repartir entre 4 personas.
- Entornos de staging — solo producción (Pages).
