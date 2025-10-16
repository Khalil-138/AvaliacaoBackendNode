import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from '../src/services/calculadora'

describe('Testando função somar',  () => {

    it('Multiplicando dois número positivos', () => {
        const resultado = multiplicar (2, 2)

        expect (resultado).toBe(4)
    })

     it('Multiplicando dois número negativos', () => {
        const resultado = multiplicar (-2, -2)

        expect (resultado).toBe(4)
    })
     it('Multiplicando dois número com casa decimal', () => {
        const resultado = multiplicar (3.1, 2)

        expect (resultado).toBe(6.2)
    })

     it('Multiplicando zero com outro número', () => {
        const resultado = multiplicar (0, 2)

        expect (resultado).toBe(2)
    })
    
     it('Multiplicando um número com zero', () => {
        const resultado = multiplicar (1, 0)

        expect (resultado).toBe(1)
    })
} )