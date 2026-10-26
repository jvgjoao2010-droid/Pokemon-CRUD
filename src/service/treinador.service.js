import { pool } from "../config/db.js";

class treinadorService {

    async getTudo() {
        const res = await pool.query('SELECT * FROM treinador');
        return res.rows;
    }

    async create(dados) {
        const { nome } = dados;

        const res = await pool.query(
            'INSERT INTO treinadores ( nome ) VALUES ($1) RETURNING *',
            [nome]
        );

        return res.rows[0];
    }

    async update(dados) {
        const { nome } = dados;
        const res = await pool.query(
            'UPDATE treinador SET nome = $1 RETURNING *',
            [nome]
        );
        return res.rows[0];
    }

    async delete(id) {
        const res = await pool.query('DELETE FROM treinador WHERE id = $1 RETURNING *', [id]);
        return res.rows[0];
    }
}



export default new treinadorService();