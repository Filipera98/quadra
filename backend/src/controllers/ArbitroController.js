import ArbitroService from '../services/ArbitroService.js';

const getAllArbitro = async (request, response) => {
    try {
        const arbitro = await ArbitroService.getAllArbitro();
        console.log(arbitro);
        response.status(200).json({ message: `Arbitro retrieved successfully`, arbitro: arbitro });
    } catch (error) {
        console.log(error);
        response.status(typeof error.code === 'number' ? error.code : 500)
            .json({ message: `Error retrieving arbitros: ${error.message}` });
    }
};

const getArbitroById = async (request, response) => {
    try {
        const arbitro = await ArbitroService.getArbitroById(request.params);
        console.log(arbitro);
        response.status(200).json({ message: `Arbitro with ID retrieved successfully`, arbitro: arbitro });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error retrieving arbitro with ID: ${error.message}` });
    }
};

const saveArbitro = async (request, response) => {
    try {
        await ArbitroService.saveArbitro(request.body);
        response.status(201).json({ message: `Arbitro persisted successfully` });
    } catch (error) {
        console.log(error);
        response.status(typeof error.code === 'number' ? error.code : 500)
            .json({ message: `Error persisting arbitro: ${error.message}` });
    }
};

const updateArbitroById = async (request, response) => {
    try {
        const { id } = request.params;
        const { nome, formacao, nacionalidade } = request.body;
        await ArbitroService.updateArbitroById({ id, nome, formacao, nacionalidade });
        response.status(200).json({ message: `Arbitro updated successfully.` });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error updating arbitro: ${error.message}` });
    }
};

const deleteArbitroById = async (request, response) => {
    try {
        await ArbitroService.deleteArbitroById({ id: request.params.id });
        response.status(200).json({ message: `Arbitro deleted successfully.` });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error deleting arbitro: ${error.message}` });
    }
};

export default { getAllArbitro, getArbitroById, saveArbitro, updateArbitroById, deleteArbitroById };