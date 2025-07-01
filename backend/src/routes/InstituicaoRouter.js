import express from 'express';
import InstituicaoController from '../controllers/InstituicaoController.js';

const InstituicaoRouter = express.Router();

InstituicaoRouter.get("/", (req, res) => InstituicaoController.getAllInstituicao(req, res));
InstituicaoRouter.get("/:id", (req, res) => InstituicaoController.getInstituicaoById(req, res));
InstituicaoRouter.post("/", (req, res) => InstituicaoController.saveInstituicao(req, res));
InstituicaoRouter.put("/:id", (req, res) => InstituicaoController.updateInstituicaoById(req, res));
InstituicaoRouter.delete("/:id", (req, res) => InstituicaoController.deleteInstituicaoById(req, res));

export default InstituicaoRouter;