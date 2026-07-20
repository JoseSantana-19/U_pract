import { team } from './data/team.js'

document.getElementById('build-commit').textContent = __BUILD_COMMIT__
document.getElementById('build-time').textContent = new Date(__BUILD_TIME__).toLocaleString('es-EC')

const grid = document.getElementById('team-grid')
grid.innerHTML = team
  .map((p) => `<div class="team-card"><strong>${p.nombre}</strong><br /><span>${p.rol}</span></div>`)
  .join('')

const themeToggle = document.getElementById('theme-toggle')
const applyTheme = (theme) => document.documentElement.setAttribute('data-theme', theme)
applyTheme(localStorage.getItem('theme') || 'light')
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  localStorage.setItem('theme', next)
})
