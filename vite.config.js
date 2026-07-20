import { defineConfig } from 'vite'
import { execSync } from 'node:child_process'

function commitHash() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 7)
  try {
    return execSync('git rev-parse --short HEAD').toString().trim()
  } catch {
    return 'dev'
  }
}

export default defineConfig({
  base: '/U_pract/',
  define: {
    __BUILD_COMMIT__: JSON.stringify(commitHash()),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
})
