import InstituicaoRepository from '../repositories/InstituicaoRepository.js';

const validTypes = ['A', 'D']; // A = Aluguel - D = Diaria
const validStatus = ['D', 'F']; // D = Disponível - F = Fechado
const validateNomeInstituicao = async ({ nome_instituicao }) => {
      if (!nome_instituicao) {
            throw {
                  code: 400,
                  message: "Nome Instituição é obrigatório."
            };
      }
      if (typeof nome_instituicao !== 'string') {
            throw {
                  code: 400,
                  message: "Não pode ter números."
            };
      }
      if (/\d/.test(nome_instituicao)) {
            throw { code: 400, message: "nome_instituicao não pode ter números." };
      }
      if (nome_instituicao.trim().length > 100) {
            throw {
                  code: 400,
                  message: "Máximo 100 caracteres."
            };
      }
};
const validateApelido = async ({ apelido }) => {
      if (!apelido) {
            throw {
                  code: 400,
                  message: "Apelido é obrigatório."
            };
      }
      if (typeof apelido !== 'string') {
            throw {
                  code: 400,
                  message: "Pode ter números."
            };
      }
      if (apelido.trim().length > 30) {
            throw {
                  code: 400,
                  message: "Máximo 30 caracteres."
            };
      }

};
const validateAbreviacao = async ({ abreviacao }) => {
      if (!abreviacao) {
            throw {
                  code: 400,
                  message: "Abreviacao é obrigatório."
            };
      }
      if (typeof abreviacao !== 'string') {
            throw {
                  code: 400,
                  message: "Não pode ter números."
            };
      }
      if (/\d/.test(abreviacao)) {
            throw { code: 400, message: "Abreviação não pode ter números." };
      }
      if (abreviacao.trim().length > 5) {
            throw {
                  code: 400,
                  message: "Máximo 5 caracteres."
            };
      }

};
const validateFundacao = async ({ fundacao }) => {
      if (!fundacao) {
            throw {
                  code: 400,
                  message: "Fundação é obrigatório."
            };
      }
      if (typeof fundacao !== 'string') {
            throw {
                  code: 400,
                  message: "Apenas números."
            };
      }
      if (fundacao.trim().length > 100) {
            throw {
                  code: 400,
                  message: "Máximo 100 caracteres."
            };
      }

};
const validateEstado_Origem = async ({ estado_origem }) => {
      if (!estado_origem) {
            throw {
                  code: 400,
                  message: "Estado é obrigatório."
            };
      }
      if (typeof estado_origem !== 'string') {
            throw {
                  code: 400,
                  message: "Não pode ter números."
            };
      }
      if (/\d/.test(estado_origem)) {
            throw { code: 400, message: "Estado Origem não pode ter números." };
      }
      if (estado_origem.trim().length > 100) {
            throw {
                  code: 400,
                  message: "Máximo 100 caracteres."
            };
      }
};

const getAllInstituicao = async () => {
      const Instituicao = await InstituicaoRepository.getAllInstituicao();
      return Instituicao;
};

const getInstituicaoById = async ({ id }) => {
      await validateIdParam({ id: id });
      const Instituicao = await InstituicaoRepository.getInstituicaoById({ id: id });
      return Instituicao;
};

const saveInstituicao = async ({ nome_instituicao, apelido, abreviacao, fundacao, estado_origem }) => {
      await validateNomeInstituicao({ nome_instituicao });
      await validateApelido({ apelido });
      await validateAbreviacao({ abreviacao });
      await validateFundacao({ fundacao });
      await validateEstado_Origem({ estado_origem });

      await InstituicaoRepository.saveInstituicao({ nome_instituicao, apelido, abreviacao, fundacao, estado_origem });
};

const updateInstituicaoById = async ({ nome_instituicao, apelido, abreviacao, fundacao, estado_origem }) => {
      await validateNomeInstituicao({ nome_instituicao });
      await validateApelido({ apelido });
      await validateAbreviacao({ abreviacao });
      await validateFundacao({ fundacao });
      await validateEstado_Origem({ estado_origem });

      await InstituicaoRepository.updateInstituicaoById({ nome_instituicao, apelido, abreviacao, fundacao, estado_origem });
};

const deleteInstituicaoById = async ({ id }) => {
      await validateIdParam({ id: id });
      await InstituicaoRepository.deleteInstituicaoById({ id: id });
};

const validateIdParam = async ({ id }) => {
      if (!id) {
            throw { code: 400, message: "ID parameter is required." };
      }

}

const validateTypeParam = async ({ type }) => {
      if (!type) {
            throw { code: 400, message: "Type parameter is required." };
      }
      if (!validTypes.includes(type)) {
            throw { code: 400, message: "Type parameter is invalid." };
      }
}

const validateStatusParam = async ({ status }) => {
      if (!status) {
            throw { code: 400, message: "Status parameter is required." };
      }
      if (!validStatus.includes(status)) {
            throw { code: 400, message: "Status parameter is invalid." };
      }
};

export default { getAllInstituicao, getInstituicaoById, saveInstituicao, updateInstituicaoById, deleteInstituicaoById };