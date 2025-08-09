import db from '../config/database.js';

const getAllJogadores = async () => {
    const [rows] = await db.query('SELECT nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem FROM JOGADOR');
    return rows;
};

const getJogadoresById = async ({ id }) => {
    const [rows] = await db.query('SELECT nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem FROM JOGADOR WHERE ID = ?', [id]);
    return rows;
};

const saveJogadores = ({ nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem }) => {
    db.query('INSERT INTO JOGADOR (nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem) VALUES (?, ?, ?, ?, ?, ?, ?)', [nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem]);

};

const updateJogadoresById = ({ id, nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem }) => {
    db.query('UPDATE JOGADOR SET nome_jogador = ?, numero_camisa = ?, apelido = ?, idade = ?, data_nascimento = ?, estado_origem = ?, pais_origem = ? WHERE id = ?', [nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem, id]);
};

const deleteJogadoresById = ({ id }) => {
    db.query('DELETE FROM JOGADOR WHERE ID= ?', [id]);
};

export default { getAllJogadores, getJogadoresById, saveJogadores, updateJogadoresById, deleteJogadoresById };