import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from '../src/services/exercicios'

describe('Testando função somar',  () => {

    it('Subtraindo dois número positivos', () => {
        const resultado = somar (1, 2)

        expect (resultado).toBe(3)
    })

     it('Subtraindo dois número negativos', () => {
        const resultado = somar (-1, -2)

        expect (resultado).toBe(-3)
    })
     it('Subtraindo dois número com casa decimal', () => {
        const resultado = somar (1.2, 2.2)

        expect (resultado).toBe(3.4)
    })

     it('Subtraindo zero com outro número', () => {
        const resultado = somar (0, 2)

        expect (resultado).toBe(2)
    })
    
     it('Subtraindo um número com zero', () => {
        const resultado = somar (1, 0)

        expect (resultado).toBe(1)
    })
} )