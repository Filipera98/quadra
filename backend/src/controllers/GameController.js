import GameService from '../services/GameService.js';

const getAllGames = async (request, response) => {
     try{
        const game = await GameService.getAllGames();
        console.log(game); 
        response.status(200).json({ message:`Jogo retrieved successfully`, game: game });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error retrieving jogos: ${error.message}`});
    }
};

const getGameById = async (request, response) => {
   
    try{
        const game = await GameService.getGameById(request.params);
        console.log(game); 
        response.status(200).json({ message:`Jogo with ID retrieved successfully`, game: game });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error retrieving jogo with ID: ${error.message}`});
    }
}; 

const saveGame = async (request, response) => {
    try{
        await GameService.saveGame(request.body);
        console.log(game); 
        response.status(201).json({ message:`Jogo persisted successfully`});                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error persisting jogo: ${error.message}`});
    }
};

const updateGameById = async (request, response) => {
    try{
        const { id } = request.params;
        const { time_a_id, time_b_id, horario_inicio, endereco } = request.body;
        GameService.updateGameById({ time_a_id: time_a_id, time_b_id: time_b_id, horario_inicio: horario_inicio, endereco: endereco }); 
        response.status(200).json({ message:`Jogo updated successfully.` });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error updating jogo: ${error.message}`});
    }  
};

const deleteGameById = async (request, response) => {
    try{
        GameService.deleteGameById(request.params);
        console.log(game); 
        response.status(200).json({ message:`Jogo deleted successfully.` });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error deleting jogo: ${error.message}`});
    }    

};

export default { getAllGames, getGameById, saveGame, updateGameById, deleteGameById };