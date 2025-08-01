import db from '../config/database.js';

const getAllArbitro = async () => {
    const [rows] = await db.query('SELECT id, nome, formacao, nacionalidade FROM ARBITRO');
    return rows;
};

const getArbitroById = async ({ id }) => {
    const [rows] = await db.query('SELECT id, nome, formacao, nacionalidade FROM ARBITRO WHERE id = ?', [id]);
    return rows[0];
};

const saveArbitro = async ({ id, nome, formacao, nacionalidade }) => {
    await db.query('INSERT INTO ARBITRO (id, nome, formacao, nacionalidade) VALUES (?, ?, ?, ?)', [id, nome, formacao, nacionalidade]);
};

const updateArbitroById = async ({ id, nome, formacao, nacionalidade }) => {
    await db.query('UPDATE ARBITRO SET nome = ?, formacao = ?, nacionalidade = ? WHERE id = ?', [nome, formacao, nacionalidade, id]);
};

const deleteArbitroById = async ({ id }) => {
    await db.query('DELETE FROM ARBITRO WHERE id = ?', [id]);
};

export default { getAllArbitro, getArbitroById, saveArbitro, updateArbitroById, deleteArbitroById };