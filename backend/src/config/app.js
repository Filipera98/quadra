import express from 'express';
import cors from 'cors';
import GameRouter from '../routes/GameRouter.js';



const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/games/', GameRouter);


export default app;