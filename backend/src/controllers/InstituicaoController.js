import InstituicaoService from '../services/InstituicaoService.js';

const getAllInstituicao = async (request, response) => {
    try {
        const instituicao = await InstituicaoService.getAllInstituicao();
        console.log(instituicao);
        response.status(200).json({ message: `Instituicao retrieved successfully`, instituicao });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error retrieving instituicao: ${error.message}` });
    }
};

const getInstituicaoById = async (request, response) => {
    try {
        const instituicao = await InstituicaoService.getInstituicaoById(request.params);
        console.log(instituicao);
        response.status(200).json({ message: `Instituicao with ID retrieved successfully`, instituicao });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error retrieving instituicao with ID: ${error.message}` });
    }
};

const saveInstituicao = async (request, response) => {
    try {
        await InstituicaoService.saveInstituicao(request.body);
        response.status(201).json({ message: `Instituicao persisted successfully` });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error persisting instituicao: ${error.message}` });
    }
};

const updateInstituicaoById = async (request, response) => {
    try {
        const { nome_instituicao, apelido, abreviacao, fundacao, estado_origem } = request.body;
        await InstituicaoService.updateInstituicaoById({ nome_instituicao, apelido, abreviacao, fundacao, estado_origem });
        response.status(200).json({ message: `Instituicao updated successfully.` });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error updating instituicao: ${error.message}` });
    }
};

const deleteInstituicaoById = async (request, response) => {
    try {
        await InstituicaoService.deleteInstituicaoById(request.params);
        response.status(200).json({ message: `Instituicao deleted successfully.` });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({ message: `Error deleting instituicao: ${error.message}` });
    }
};

export default { getAllInstituicao, getInstituicaoById, saveInstituicao, updateInstituicaoById, deleteInstituicaoById };