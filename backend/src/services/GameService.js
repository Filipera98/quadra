import GameRepository from '../repositories/GameRepository.js';

const validTypes = ["P" ,"G"];
const validStatuses = ["O", "C"];
const getAllGames = async () => {
      const Game = await GameRepository.getAllGames();
      return Game ;
};

const getGameById = async ( {id} ) => {
        id = null;
        await validateIdParam({ id: id });
        const Game = await GameRepository.getGameById({ id: id});
        return Game ;
};

const saveGame = async ({ time_a_id, time_b_id, horario_inicio, endereco }) => {
        await validateIdParam({ time_a_id: time_a_id });
        await validateIdParam({ time_b_id: time_b_id });
        await validateTypeParam({ horario_inicio: horario_inicio });
        await validateStatusParam({ endereco: endereco });
        GameRepository.saveGame({ time_a_id: time_a_id, time_b_id: time_b_id, horario_inicio: horario_inicio, endereco: endereco });
        
};
//RELACIONAR CAMPO DE ARBITRO NA TABELA JOGO
const updateGameById = async ({ time_a_id, time_b_id, horario_inicio, endereco }) => {
      await validateIdParam({ time_a_id: time_a_id });
      await validateIdParam({ time_b_id: time_b_id });
      await validateTypeParam({ horario_inicio: horario_inicio });
      await validateStatusParam({ endereco: endereco });
      GameRepository.updateGameById({ time_a_id: time_a_id, time_b_id: time_b_id, horario_inicio: horario_inicio, endereco: endereco });
};
//RELACIONAR CAMPO DE ARBITRO NA TABELA JOGO


const deleteGameById = async ({ id }) => {
      await validateIdParam({ id: id });
      GameRepository.deleteGameById({ id: id});
      
};

const validateIdParam = async ({ id }) => {
      if (!id) {
            throw { code: 400, message: "ID parameter is required." };
      }
      //Validar se o Id existe na tabela instituicao
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

export default { getAllGames, getGameById, saveGame, updateGameById, deleteGameById };