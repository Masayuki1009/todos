import { initPool } from '../db/connection';

const pool = initPool();

const insertTodo = (title: string) => {

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO todos (title, created_at) VALUES (?, ?)`,
        [
            title,
            Date.now()
        ], (err: any, result: any) => {
            if(err) {
                return reject(err);
            }
            return resolve(result);
        })
    })
}

const getTodos = () => {

    return new Promise((resolve, reject) => {
        pool.query(
        'SELECT * FROM todos',
        (err: any, result: any) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    })
}

const deleteTodos = (id: string) => {

    return new Promise((resolve, reject) => {
        pool.query(
            'DELETE FROM todos WHERE id= ?',
            [id],
            (err: any, result: any) => {
              if (err) {
                  return reject(err);
              }
                  return resolve(result);
            },
          );
    })
}

const editTodos = (editText: string, editId: string) => {

    return new Promise((resolve, reject) => {
    pool.query(
        'UPDATE todos SET title= ? WHERE id= ?;',
        [
            editText,
            editId
        ],
        (err, result) => {
          // if fail to get todos from the DB, return error message to client
          if (err) {
              return reject(err);
          }
              return resolve(result);
        },
      );
    })
}

export default {
    insertTodo,
    getTodos,
    deleteTodos,
    editTodos,
}