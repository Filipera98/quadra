import InstituicaoRepository from '../repositories/InstituicaoRepository.js';

const validTypes = ["P" ,"G"];
const validStatuses = ["O", "C"];
const getAllInstituicao = async () => {
      const Instituicao = await InstituicaoRepository.getAllInstituicao();
      return Instituicao ;
};

const getInstituicaoById = async ( {id} ) => {
        id = null;
        await validateIdParam({ id: id });
        const Instituicao = await InstituicaoRepository.getInstituicaoById({ id: id});
        return Instituicao ;
};

const saveInstituicao = async ({ time_a_id, time_b_id, horario_inicio, endereco }) => { //Mudar com a tabela instituicao
        await validateIdParam({ time_a_id: time_a_id });
        await validateIdParam({ time_b_id: time_b_id });
        await validateTypeParam({ horario_inicio: horario_inicio });
        await validateStatusParam({ endereco: endereco });
        InstituicaoRepository.saveInstituicao({ time_a_id: time_a_id, time_b_id: time_b_id, horario_inicio: horario_inicio, endereco: endereco });
        
};

const updateInstituicaoById = async ({ time_a_id, time_b_id, horario_inicio, endereco }) => {
      await validateIdParam({ time_a_id: time_a_id });
      await validateIdParam({ time_b_id: time_b_id });
      await validateTypeParam({ horario_inicio: horario_inicio });
      await validateStatusParam({ endereco: endereco });
      InstituicaoRepository.updateInstituicaoById({ time_a_id: time_a_id, time_b_id: time_b_id, horario_inicio: horario_inicio, endereco: endereco });
};



const deleteInstituicaoById = async ({ id }) => {
      await validateIdParam({ id: id });
      InstituicaoRepository.deleteInstituicaoById({ id: id});
      
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
      if(validTypes.includes(type)){
            throw { code: 400, message: "Type parameter is invalid." };
      }
}

const validateStatusParam = async ({ status }) => {
      if (!status) {
            throw { code: 400, message: "Status parameter is required." };
      } 
      if(validStatuses.includes(status)){
            throw { code: 400, message: "Status parameter is invalid." };
      }
};

export default { getAllInstituicao, getInstituicaoById, saveInstituicao, updateInstituicaoById, deleteInstituicaoById };