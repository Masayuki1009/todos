import express, { Router, Request, Response, NextFunction } from 'express';
import todoController from '../controllers/todoController'

const router = Router();

router.post('/', todoController.addTodos);
router.get('/', todoController.getTodos);
router.delete('/:id', todoController.deleteTodos)
router.put('/:id', todoController.editTodos)

export default router