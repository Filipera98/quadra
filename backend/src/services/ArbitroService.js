import ArbitroRepository from '../repositories/ArbitroRepository.js';
import { errorMessages } from '../utils/errorMessages.js';

const validateIdParam = async ({ id }) => {
    if (!id) {
        throw { code: 400, message: "ID parameter is required." };
    }
}

const validateNome = async ({ nome }) => {
    if (!nome) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof nome !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'Ex: João Silva / Maria Oliveira.'
        };
    }

    if (nome.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};

const validateFormacao = async ({ formacao }) => {
    if (!formacao) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof formacao !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'EX: Curso de Arbitragem / Curso de Formação.'
        };
    }

    if (formacao.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};

const validateNacionalidade = async ({ nacionalidade }) => {
    if (!nacionalidade) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof nacionalidade !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'Ex: Brasileiro / Americano.'
        };
    }

    if (nacionalidade.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};


const getAllArbitro = async () => {
    const Arbitro = await ArbitroRepository.getAllArbitro();
    return Arbitro;
};

const getArbitroById = async ({ id }) => {
    await validateIdParam({ id });
    const arbitro = await ArbitroRepository.getArbitroById({ id });
    if (!arbitro) {
        throw { code: 404, message: "Árbitro não encontrado." };
    }
    return arbitro;
};

const saveArbitro = async ({ nome, formacao, nacionalidade }) => {
    await validateNome({ nome: nome });
    await validateFormacao({ formacao: formacao });
    await validateNacionalidade({ nacionalidade: nacionalidade });
    await ArbitroRepository.saveArbitro({ nome, formacao, nacionalidade });
};

const updateArbitroById = async ({ id, nome, formacao, nacionalidade }) => {
    await validateIdParam({ id: id });
    await validateNome({ nome: nome });
    await validateFormacao({ formacao: formacao });
    await validateNacionalidade({ nacionalidade: nacionalidade });
    ArbitroRepository.updateArbitroById({ nome, formacao, nacionalidade, id });
};

const deleteArbitroById = async ({ id }) => {
    await validateIdParam({ id: id });
    ArbitroRepository.deleteArbitroById({ id: id });

};

export default { getAllArbitro, getArbitroById, saveArbitro, updateArbitroById, deleteArbitroById };