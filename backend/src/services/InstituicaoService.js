import InstituicaoRepository from '../repositories/InstituicaoRepository.js';
import { errorMessages } from '../utils/errorMessages.js';

const validateNomeInstituicao = async ({ nome_instituicao }) => {
      if (!nome_instituicao) {
            throw {
                  code: 400,
                  message: errorMessages['REQUIRED_NAME_FIELD']
            };
      }

      if (typeof nome_instituicao !== 'string') {
            throw {
                  code: 400,
                  message: errorMessages['INVALID_TEXT_FORMAT'] + 'Ex: Instituição XYZ / G3X.'
            };
      }

      if (nome_instituicao.trim().length > 100) {
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
                  message: errorMessages['REQUIRED_ALIAS_FIELD']
            };
      }

      if (typeof apelido !== 'string') {
            throw {
                  code: 400,
                  message: errorMessages['INVALID_TEXT_FORMAT']
            };
      }

      if (apelido.trim().length > 30) {
            throw {
                  code: 400,
                  message: errorMessages['MAX_LENGTH_EXCEEDED'] + "30 caracteres."
            };
      }

};

const validateAbreviacao = async ({ abreviacao }) => {
      if (!abreviacao) {
            throw {
                  code: 400,
                  message: errorMessages['REQUIRED_SHORT_NAME_FIELD']
            };
      }

      if (typeof abreviacao !== 'string') {
            throw {
                  code: 400,
                  message: errorMessages['INVALID_TEXT_FORMAT']
            };
      }

      if (abreviacao.trim().length > 5) {
            throw {
                  code: 400,
                  message: errorMessages['MAX_LENGTH_EXCEEDED'] + "5 caracteres."
            };
      }

};

const validateFundacao = async ({ fundacao }) => {
      if (!fundacao) {
            throw {
                  code: 400,
                  message: errorMessages['REQUIRED_CREATED_DATE_FIELD']
            };
      }

      if (typeof fundacao !== 'string') {
            throw {
                  code: 400,
                  message: errorMessages['INVALID_TEXT_FORMAT']
            };
      }

      if (fundacao.trim().length > 100) {
            throw {
                  code: 400,
                  message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
            };
      }

};

const validateEstado_Origem = async ({ estado_origem }) => {
      if (!estado_origem) {
            throw {
                  code: 400,
                  message: errorMessages['REQUIRED_STATE_FIELD']
            };
      }

      if (typeof estado_origem !== 'string') {
            throw {
                  code: 400,
                  message: errorMessages['INVALID_TEXT_FORMAT']
            };
      }

      if (estado_origem.trim().length > 100) {
            throw {
                  code: 400,
                  message: errorMessages['MAX_LENGTH_EXCEEDED'] + "100 caracteres."
            };
      }
};

const validateIdParam = async ({ id }) => {
      if (!id) {
            throw { code: 400, message: errorMessages['REQUIRED_ID'] };
      }
};

const validateIfExistsInstituicao = async ({ id }) => {
      const instituicao = await InstituicaoRepository.getInstituicaoById({ id });
      if (!instituicao || instituicao.length === 0) {
            throw { code: 404, message: errorMessages['NOT_FOUND'] };
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

      InstituicaoRepository.saveInstituicao({ nome_instituicao, apelido, abreviacao, fundacao, estado_origem });
};

const updateInstituicaoById = async ({ id, nome_instituicao, apelido, abreviacao, fundacao, estado_origem }) => {
      await validateIdParam({ id });
      await validateIfExistsInstituicao({ id });
      await validateNomeInstituicao({ nome_instituicao });
      await validateApelido({ apelido });
      await validateAbreviacao({ abreviacao });
      await validateFundacao({ fundacao });
      await validateEstado_Origem({ estado_origem });
      await InstituicaoRepository.updateInstituicaoById({ nome_instituicao, apelido, abreviacao, fundacao, estado_origem, id });
};

const deleteInstituicaoById = async ({ id }) => {
      await validateIdParam({ id: id });
      await validateIfExistsInstituicao({ id });
      await InstituicaoRepository.deleteInstituicaoById({ id: id });
};

export default { getAllInstituicao, getInstituicaoById, saveInstituicao, updateInstituicaoById, deleteInstituicaoById };