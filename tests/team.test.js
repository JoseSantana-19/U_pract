// TODO (Nayely): ampliar cobertura (validar los 4 integrantes, campos requeridos, etc.)
import { describe, it, expect } from 'vitest'
import { team } from '../src/data/team.js'

describe('team data', () => {
  it('has at least one member with nombre and rol', () => {
    expect(team.length).toBeGreaterThan(0)
    for (const p of team) {
      expect(p.nombre).toBeTruthy()
      expect(p.rol).toBeTruthy()
    }
  })
})
