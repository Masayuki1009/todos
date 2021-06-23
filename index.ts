import express, { Router, Request, Response } from 'express';
import cors from 'cors';
import todoRouter from '../routes/todoRouter'

// initialize
const app = express();

// set middlewares
app.use(express.json());
app.use(cors());

// server config
const HOST = 'localhost';
const PORT = 5000;

// set router
app.use('/todos', todoRouter);

// start serve
app.listen(PORT, () => console.log(`server is running at http://${HOST}:${PORT}`));



