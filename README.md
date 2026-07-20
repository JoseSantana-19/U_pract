# U_pract

![Deploy](https://github.com/JoseSantana-19/U_pract/actions/workflows/deploy.yml/badge.svg)

Página del equipo — Integración de Sistemas y Plataformas, Segundo Parcial (Unidad III), Uleam.
Desplegada automáticamente vía GitHub Actions a GitHub Pages en cada push a `main`: https://josesantana-19.github.io/U_pract/

## Desarrollo local

```bash
npm install
npm run dev      # servidor local
npm test         # Vitest
npm run build    # build de producción a dist/
```

## Pipeline

`.github/workflows/deploy.yml`: en cada push a `main` corre `test` → `build` → `deploy` (GitHub Pages). Si test o build fallan, no se despliega.

## Equipo

- Palma Tejena Michael Javier
- Meza Bolaños Jordan Isidro
- Solórzano Macías Nayely Andreina
- Santana Zambrano Jose Luis

<!-- TODO (Nayely): sección de explicación técnica — proceso, herramientas, problemas y soluciones -->
