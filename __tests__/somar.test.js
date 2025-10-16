import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from '../src/services/calculadora.js'

//jamais dividir por zero

describe("Testando função Soma", () => {

    it('Somando dois número positivos', () => {
        const resultado = somar (1, 2)

        expect (resultado).toBe(3)
    })

     it('Somando dois número negativos', () => {
        const resultado = somar (-1, -2)

        expect (resultado).toBe(-3)
    })
     it('Somando dois número com casa decimal', () => {
        const resultado = somar (1.2, 2.2)

        expect (resultado).toBe(3.4)
    })

     it('Somando zero com outro número', () => {
        const resultado = somar (0, 2)

        expect (resultado).toBe(2)
    })
    
     it('Somando um número com zero', () => {
        const resultado = somar (1, 0)

        expect (resultado).toBe(1)
    })
} )