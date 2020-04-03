const connection = require('../database/connection')


// Padrão MVC sem mais do que 5 recursos padrão da arquitetura, para listar casos da ong, sera usado o arquivo ProfileController
module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;         // obtem dados dos query params, caso nao exista, utiliza 1 como default
        
        const [count] = await connection('incidents').count();      // obtem contagem total de incidentes, o retorno deste tipo de parametro é no header

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)                 // paginação 
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        res.header('X-Total-Count', count['count(*)']);

        return res.json(incidents);
    },
    
    async create(req, res) {
        const { title, description, value } = req.body;

        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });             // retorna um array com os IDs cadastrados (neste caso  somente 1)

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')      // conexão com a tabela 'incidents'
            .where('id', id)                                // busca as entradas na tabela com o id passado no request.params
            .select('ong_id')                               // seleciona somente a coluna ong_id
            .first();                                       // somente primeiro valor

        if (incident.ong_id != ong_id) {
            return res.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('incidents').where('id', id).delete(); // operação de delete do id especifico da tabela

        return res.status(204).send();
    }
}