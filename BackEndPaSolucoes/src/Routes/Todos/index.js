const express = require("express");
const Routes = express.Router()
const todosRoutes = express.Router();
const TodosControler = require("../../Controlers/todos")

todosRoutes.get("/todos/todosAll",  
    TodosControler.getAllTodos 
),
todosRoutes.post("/todos/todo",
    TodosControler.getTodoById
)
todosRoutes.post("/todos/updatetodo",
    TodosControler.updateTodoById
)
todosRoutes.post("/todos/createtodo",
    TodosControler.createTodo
)
todosRoutes.post("/todos/deletetodo",
    TodosControler.deleteTodoById
)

module.exports = todosRoutes ;
