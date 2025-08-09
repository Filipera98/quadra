import express from 'express';
import ArbitroController from '../controllers/ArbitroController.js';

const ArbitroRouter = express.Router();

ArbitroRouter.get("/", (req, res) => ArbitroController.getAllArbitro(req, res));
ArbitroRouter.get("/:id", (req, res) => ArbitroController.getArbitroById(req, res));
ArbitroRouter.post("/", (req, res) => ArbitroController.saveArbitro(req, res));
ArbitroRouter.put("/:id", (req, res) => ArbitroController.updateArbitroById(req, res));
ArbitroRouter.delete("/:id", (req, res) => ArbitroController.deleteArbitroById(req, res));

export default ArbitroRouter;
