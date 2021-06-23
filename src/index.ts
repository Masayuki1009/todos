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

// database config
// const DB_PASSWORD = '6df053a1';
// const DB_USER = 'b53ab85bbefae5';
// const DB_NAME = 'heroku_a005a0ae480313e';
// const DB_HOST = 'eu-cdbr-west-01.cleardb.com';
// const DB_PORT = 3306;

// create database connection pool
// const pool = mysql.createPool({
//   connectionLimit: 10,
//   password: DB_PASSWORD,
//   user: DB_USER,
//   database: DB_NAME,
//   host: DB_HOST,
//   port: DB_PORT,
// });

// ------------------------- MAIN PROCESS -----------------------------

// GET
// router.get('/', (req: Request, res: Response) => {
//   pool.query('SELECT * FROM todos;', (err, result) => {
//     // if fail to get todos from the DB, return error message to client
//     if (err) return res.status(500).send(`Failed: ${err.message}`);

//     res.status(200).json(result);
//   });
// });

// POST
// router.post('/', (req: Request, res: Response) => {
//   const { title } = req.body;

//   pool.query(
//     'INSERT INTO todos (title, created_at) VALUES (?, ?);',
//     [title, new Date()],
//     (err, result) => {
//       // if fail to get todos from the DB, return error message to client
//       if (err) return res.status(500).send(`Failed: ${err.message}`);

//       res.status(200).json(result);
//     },
//   );
// });

//Delete
// router.delete('/:id', (req: Request, res: Response) => {
//     const id = req.params.id;
//     pool.query(
//       'DELETE FROM todos WHERE id= ?;',
//       [id],
//       (err, result) => {
//         // if fail to get todos from the DB, return error message to client
//         if (err) return res.status(500).send(`Failed: ${err.message}`);

//         res.status(200).json(result);
//       },
//     );
//   });

// //PUT
// router.put('/:id', (req: Request, res: Response) => {
//   const { editText } = req.body;
//   const editId = req.params.id;
//   pool.query(
//     'UPDATE todos SET title= ? WHERE id= ?;',
//     [editText, editId],
//     (err, result) => {
//       // if fail to get todos from the DB, return error message to client
//       if (err) return res.status(500).send(`Failed: ${err.message}`);

//       res.status(200).json(result);
//     },
//   );
// });

// SQL文;いる

// ------------------------------------------------------------------


