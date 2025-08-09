import express from 'express';
import cors from 'cors';
import GameRouter from '../routes/GameRouter.js';
import InstituicaoRouter from '../routes/InstituicaoRouter.js';
import ArbitroRouter from '../routes/ArbitroRouter.js';
import JogadoresRouter from '../routes/JogadoresRouter.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/games/', GameRouter);
app.use('/api/instituicao/', InstituicaoRouter);
app.use('/api/arbitro/', ArbitroRouter);
app.use('/api/jogadores/', JogadoresRouter);

export default app;