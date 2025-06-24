import InstituicaoService from '../services/InstituicaoService.js';

const getAllInstituicao = async (request, response) => {
     try{
        const instituicao = await InstituicaoService.getAllInstituicao();
        console.log(instituicao); 
        response.status(200).json({ message:`Instituicao retrieved successfully`, instituicao: instituicao });                                             
    }catch(error){
        console.log(error); // todo inserir um logger
        response.status(error.code || 500).json({ message: `Error retrieving instituicao: ${error.message}`});
    }
};

const getInstituicaoById = async (request, response) => {
   
    try{
        const instituicao = await InstituicaoService.getInstituicaoById(request.params);
        console.log(instituicao); 
        response.status(200).json({ message:`Instituicao with ID retrieved successfully`, instituicao: instituicao });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code || 500).json({ message: `Error retrieving instituicao with ID: ${error.message}`});
    }
}; 

const saveInstituicao = async (request, response) => {
    try{
        await InstituicaoService.saveInstituicao(request.body);
        console.log(instituicao); 
        response.status(201).json({ message:`Instituicao persisted successfully`});                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code || 500).json({ message: `Error persisting instituicao: ${error.message}`});
    }
};

const updateInstituicaoById = async (request, response) => {
    try{
        const { id } = request.params;
        const { time_a_id, time_b_id, horario_inicio, endereco } = request.body; // Mudar com a tabela instituicao
        InstituicaoService.updateInstituicaoById({ time_a_id: time_a_id, time_b_id: time_b_id, horario_inicio: horario_inicio, endereco: endereco }); // Mudar com a tabela instituicao
        response.status(200).json({ message:`Instituicao updated successfully.` });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code || 500).json({ message: `Error updating instituicao: ${error.message}`});
    }  
};

const deleteInstituicaoById = async (request, response) => {
    try{
        InstituicaoService.deleteInstituicaoById(request.params);
        console.log(instituicao); 
        response.status(200).json({ message:`Instituicao deleted successfully.` });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code || 500).json({ message: `Error deleting instituicao: ${error.message}`});
    }    

};

export default { getAllInstituicao, getInstituicaoById, saveInstituicao, updateInstituicaoById, deleteInstituicaoById };