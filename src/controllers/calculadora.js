import ServiceCalculadora from '../services/calculadora.js'
 //chama o service
// faz a fórmula 
//pega o resultado
// tue problema principal esta na abbertura 
// e fechamento de {}
// se vc identar fica mais facil, 
// da pra comparar assim como deixei

class ControllerCalculadora {

    Somar (req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = ServiceCalculadora.somar(num1, num2)
            res.status(200).send({
                msg: "O resultado é " + result,
                data: result,
                error: null
        })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })
        }
    }
        //*********************************************** */
        

     Subtrair (req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = ServiceCalculadora.subtrair(num1, num2)
            res.status(200).send({
                msg: "O resultado é " + result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })
        }
        
            //***************************************************************************** */
            
   
    }

     Multiplicar (req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = ServiceCalculadora.multiplicar(num1, num2)
            res.status(200).send({
                msg: "O resultado é " + result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })
            //************************************************************************** */
        
        
    

     Dividir (req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = ServiceCalculadora.multiplicar(num1, num2)
            res.status(200).send({
                msg: "O resultado é " + result,
                data: result,
                error: null
            })
        { catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })
        
        }
    }


export default new ControllerCalculadora()