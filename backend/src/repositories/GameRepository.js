import db from '../config/database.js';
    const getAllGames = async () => {
    const [rows] = await db.query('SELECT id, time_a_id, time_b_id, horario_inicio, endereco FROM JOGO');
    return rows;
};

const getGameById = async ( {id} ) => {
    const [rows] = await db.query('SELECT id, time_a_id, time_b_id, horario_inicio, endereco FROM JOGO WHERE ID = ?', [id]);
    return rows;
};

const saveGame = ({ time_a_id, time_b_id, horario_inicio, endereco }) => {
    db.query('INSERT INTO JOGO (time_a_id, time_b_id, horario_inicio, endereco) VALUES (?, ?, ?)', [time_a_id, time_b_id, horario_inicio, endereco]);

};

const updateGameById = ({ time_a_id, time_b_id, horario_inicio, endereco }) => {
    db.query('UPDATE JOGO SET time_a_id, time_b_id, horario_inicio, endereco = ? WHERE id = ?', [time_a_id, time_b_id, horario_inicio, endereco]);
};

const deleteGameById = ({ id }) => {
    db.query('DELETE FROM JOGO WHERE ID= ?', [id]);
};




export default { getAllGames, getGameById, saveGame, updateGameById, deleteGameById };