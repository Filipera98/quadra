import express from 'express';
import cors from 'cors';
import GameRouter from '../routes/GameRouter.js';
import InstituicaoRouter from '../routes/InstituicaoRouter.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/games/', GameRouter);
app.use('/api/instituicao/', InstituicaoRouter);


export default app;