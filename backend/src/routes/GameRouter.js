import express from 'express';
import GameController from '../controllers/GameController.js';

const GameRouter = express.Router();

GameRouter.get("/",       (req, res) => GameController.getAllGames(req, res));
GameRouter.get("/:id",    (req, res) => GameController.getGameById(req, res));
GameRouter.post("/",      (req, res) => GameController.saveGame(req, res));
GameRouter.put("/:id", (req, res) => GameController.updateGameById(req, res));
GameRouter.delete("/:id", (req, res) => GameController.deleteGameById(req, res));

export default GameRouter;