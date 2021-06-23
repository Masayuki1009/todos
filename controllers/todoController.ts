import { Request, Response } from 'express'
import todoService from '../services/todoService'

const addTodos = async (req: Request, res: Response) => {
    try {
        const { title } = req.body as any;
        const result = await todoService.insertTodo(title);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).send('failed to insert')
    }
}

const getTodos = async(req: Request, res: Response) => {
    try {
        const result = await todoService.getTodos();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).send('failed to insert')
    }
};

const deleteTodos = async (req: Request, res: Response) => {
    try {
        const  id  = req.params.id as any;
        const result = await todoService.deleteTodos(id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).send('failed to insert')
    }
}

const editTodos = async (req: Request, res: Response) => {
    try {
        const { editText } = req.body as any;
        const  editId = req.params.id as any;
        const result = await todoService.editTodos(editText, editId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).send('failed to insert')
    }
}


export default {
    addTodos,
    getTodos,
    deleteTodos,
    editTodos,
}