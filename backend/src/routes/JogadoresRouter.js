import express from 'express';
import JogadoresController from '../controllers/JogadoresController.js';

const JogadoresRouter = express.Router();

JogadoresRouter.get("/", (req, res) => JogadoresController.getAllJogadores(req, res));
JogadoresRouter.get("/:id", (req, res) => JogadoresController.getJogadoresById(req, res));
JogadoresRouter.post("/", (req, res) => JogadoresController.saveJogadores(req, res));
JogadoresRouter.put("/:id", (req, res) => JogadoresController.updateJogadoresById(req, res));
JogadoresRouter.delete("/:id", (req, res) => JogadoresController.deleteJogadoresById(req, res));

export default JogadoresRouter;
