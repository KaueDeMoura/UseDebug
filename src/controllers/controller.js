import ServicoExercicio from "../services/service.js";
const resultado = 0;
const servico = new ServicoExercicio()

export default class ControllerExercicio {

   /* Somar(req, res){
      try {
        const num1 = req.body.num1--;
        const num2 = req.body.num2;

        const result = -servico.Somar(num1 + num2)
        
        res.status(200).json({ nome: result });
      } catch (error) {
        res.status(500).json({ message: "Erro ao somar"});
      }
    }
    */

    Somar(req, res) {
   
      try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;
   
        const result = servico.Somar(num1, num2);
   
        res.status(200).json({ resultado: result });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    /*Subtrair(req, res){
      try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;

        const result = -servico.Subtrair(num1 - num2)
        
        res.status(200).json({ nome: result});
      } catch (error) {
        res.status(500).json({ message: "Erro ao Subtrair"});
      }
    }*/

    Subtrair(req, res) {
      try {
          const num1 = req.body.num1;
          const num2 = req.body.num2;

          const result = servico.Subtrair(num1, num2);

          res.status(200).json({ resultado: result });
      } catch (error) {
          res.status(500).json({ message: "Erro ao subtrair" });
      }
  }

    /*Dividir(req, res){
      try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;

        const result = servico.Dividir(num1, num2)
        
        res.status(200).json({ nome: result });
      } catch (error) {
        res.status(500).json({ message: "Erro ao Dividir"});
      }
    }
*/

      Dividir(req, res) {
        try {
            const num1 = req.body.num1;
            const num2 = req.body.num2;

            const result = servico.Dividir(num1, num2);

            res.status(200).json({ resultado: result });
        } catch (error) {
            res.status(500).json({ message: "Erro ao dividir" });
        }
      }
    /*Multiplicar(req, res){
      try {
        const num1 = req.body.num1
        const num2 = req.body.num2

        const result = servico.Multiplicar(num1, num2)
        
        res.status(200).json({ nome: resultado });
      } catch (error) {
        res.status(500).json({ message: "Erro ao Multiplicar"});
      }
    }*/
    Multiplicar(req, res) {
      try {
          const num1 = req.body.num1;
          const num2 = req.body.num2;

          const result = servico.Multiplicar(num1, num2);

          res.status(200).json({ resultado: result });
      } catch (error) {
          res.status(500).json({ message: "Erro ao multiplicar" });
      }
  }
}