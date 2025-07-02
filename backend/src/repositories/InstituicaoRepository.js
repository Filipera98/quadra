import db from '../config/database.js';

const getAllInstituicao = async () => {
    const [rows] = await db.query('SELECT nome_instituicao, apelido, abreviacao, fundacao, estado_origem FROM INSTITUICAO');
    return rows;
};

const getInstituicaoById = async ({ id }) => {
    const [rows] = await db.query('SELECT nome_instituicao, apelido, abreviacao, fundacao, estado_origem FROM INSTITUICAO WHERE ID = ?', [id]);
    return rows;
};

const saveInstituicao = ({ nome_instituicao, apelido, abreviacao, fundacao, estado_origem }) => {
    db.query('INSERT INTO INSTITUICAO (nome_instituicao, apelido, abreviacao, fundacao, estado_origem) VALUES (?, ?, ?)', [nome_instituicao, apelido, abreviacao, fundacao, estado_origem]);

};

const updateInstituicaoById = ({ nome_instituicao, apelido, abreviacao, fundacao, estado_origem }) => {
    db.query('UPDATE INSTITUICAO SET nome_instituicao, apelido, abreviacao, fundacao, estado_origem = ? WHERE id = ?', [nome_instituicao, apelido, abreviacao, fundacao, estado_origem]);
};

const deleteInstituicaoById = ({ id }) => {
    db.query('DELETE FROM INSTITUICAO WHERE ID= ?', [id]);
};

export default { getAllInstituicao, getInstituicaoById, saveInstituicao, updateInstituicaoById, deleteInstituicaoById };