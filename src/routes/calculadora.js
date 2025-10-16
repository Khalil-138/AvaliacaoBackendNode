import express from 'express'
import controllerCalculadora from '../controllers/calculadora.js'
const router = express.Router()

// localhost:3000/exercicio1?num1=30&num2=45
router.get('/somar', controllerCalculadora.SomarGet)
router.post('/somar', controllerCalculadora.SomarPost)

router.get('/subtrair', controllerCalculadora.SubtrairGet)
router.post('/subtrair', controllerCalculadora.SubtrairPost)

router.get('/multiplicar', controllerCalculadora.MultiplicarGet)
router.post('/multiplicar', controllerCalculadora.MultiplicarPost)

router.get('/dividir', controllerCalculadora.DividirGet)
router.post('/dividir', controllerCalculadora.DividirPost)

export default router