import JogadoresRepository from '../repositories/JogadoresRepository.js';
import { errorMessages } from '../utils/errorMessages.js';

const validateIdParam = async ({ id }) => {
    if (!id) {
        throw { code: 400, message: "ID parameter is required." };
    }
}

const validateNomeJogador = async ({ nome_jogador }) => {
    if (!nome_jogador) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof nome_jogador !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'Ex: João Silva / Maria Oliveira.'
        };
    }

    if (nome_jogador.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};

const validateNumeroCamisa = async ({ numero_camisa }) => {
    if (!numero_camisa) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof numero_camisa !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'EX: Curso de Arbitragem / Curso de Formação.'
        };
    }

    if (numero_camisa.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};

const validateApelido = async ({ apelido }) => {
    if (!apelido) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof apelido !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'Ex: Brasileiro / Americano.'
        };
    }

    if (apelido.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};

const validateIdade = async ({ idade }) => {
    if (!idade) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof idade !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'Ex: Brasileiro / Americano.'
        };
    }

    if (idade.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};

const validateDataNascimento = async ({ data_nascimento }) => {
    if (!data_nascimento) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof data_nascimento !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'Ex: Brasileiro / Americano.'
        };
    }

    if (data_nascimento.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};

const validateEstadoOrigem = async ({ estado_origem }) => {
    if (!estado_origem) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof estado_origem !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'Ex: Brasileiro / Americano.'
        };
    }

    if (estado_origem.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};

const validatePaisOrigem = async ({ pais_origem }) => {
    if (!pais_origem) {
        throw {
            code: 400,
            message: errorMessages['REQUIRED_NAME_FIELD']
        };
    }

    if (typeof pais_origem !== 'string') {
        throw {
            code: 400,
            message: errorMessages['INVALID_TEXT_FORMAT'] + 'Ex: Brasileiro / Americano.'
        };
    }

    if (pais_origem.trim().length > 100) {
        throw {
            code: 400,
            message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
        };
    }
};

const getAllJogadores = async () => {
    const Jogadores = await JogadoresRepository.getAllJogadores();
    return Jogadores;
};

const getJogadoresById = async ({ id }) => {
    await validateIdParam({ id });
    const jogadores = await JogadoresRepository.getJogadoresById({ id });
    if (!jogadores) {
        throw { code: 404, message: "Jogador não encontrado." };
    }
    return jogadores;
};

const saveJogadores = async ({ nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem }) => {
    await validateNomeJogador({ nome_jogador: nome_jogador });
    await validateNumeroCamisa({ numero_camisa: numero_camisa });
    await validateApelido({ apelido: apelido });
    await validateIdade({ idade: idade });
    await validateDataNascimento({ data_nascimento: data_nascimento });
    await validateEstadoOrigem({ estado_origem: estado_origem });
    await validatePaisOrigem({ pais_origem: pais_origem });
    await JogadoresRepository.saveJogadores({ nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem });
};

const updateJogadoresById = async ({ id, nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem }) => {
    await validateIdParam({ id: id });
    await validateNomeJogador({ nome_jogador: nome_jogador });
    await validateNumeroCamisa({ numero_camisa: numero_camisa });
    await validateApelido({ apelido: apelido });
    await validateIdade({ idade: idade });
    await validateDataNascimento({ data_nascimento: data_nascimento });
    await validateEstadoOrigem({ estado_origem: estado_origem });
    await validatePaisOrigem({ pais_origem: pais_origem });
    await JogadoresRepository.saveJogadores({ nome_jogador, numero_camisa, apelido, idade, data_nascimento, estado_origem, pais_origem });
};

const deleteJogadoresById = async ({ id }) => {
    await validateIdParam({ id: id });
    JogadoresRepository.deleteJogadoresById({ id: id });

};

export default { getAllJogadores, getJogadoresById, saveJogadores, updateJogadoresById, deleteJogadoresById };