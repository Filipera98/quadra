import JogadoresService from '../services/JogadoresService.js';

const getAllJogadores = async (request, response) => {
    try {
        const jogadores = await JogadoresService.getAllJogadores();
        console.log(jogadores);
        response.status(200).json({ message: `Jogador retrieved successfully`, jogadores: jogadores });
    } catch (error) {
        console.log(error);
        response.status(typeof error.code === 'number' ? error.code : 500)
            .json({ message: `Error retrieving jogador: ${error.message}` });
    }
};

const getJogadoresById = async (request, response) => {
    try {
        const jogadores = await JogadoresService.getJogadoresById(request.params);
        console.log(jogadores);
        response.status(200).json({ message: `Jogador with ID retrieved successfully`, jogadores: jogadores });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error retrieving jogador with ID: ${error.message}` });
    }
};

const saveJogadores = async (request, response) => {
    try {
        await JogadoresService.saveJogadores(request.body);
        response.status(201).json({ message: `Jogador persisted successfully` });
    } catch (error) {
        console.log(error);
        response.status(typeof error.code === 'number' ? error.code : 500)
            .json({ message: `Error persisting jogador: ${error.message}` });
    }
};

const updateJogadoresById = async (request, response) => {
    try {
        const { id } = request.params;
        const { nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem } = request.body;
        await JogadoresService.updateJogadoresById({ id, nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem });
        response.status(200).json({ message: `Jogador updated successfully.` });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error updating jogador: ${error.message}` });
    }
};

const deleteJogadoresById = async (request, response) => {
    try {
        await JogadoresService.deleteJogadoresById({ id: request.params.id });
        response.status(200).json({ message: `Jogador deleted successfully.` });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error deleting jogador: ${error.message}` });
    }
};

export default { getAllJogadores, getJogadoresById, saveJogadores, updateJogadoresById, deleteJogadoresById };