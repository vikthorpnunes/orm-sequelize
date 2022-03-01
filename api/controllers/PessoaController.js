const database = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res){
        const pegaTodasAsPessoas = await database.Pessoas.findAll()
    }
}