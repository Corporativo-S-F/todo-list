import { Todo } from "./todo.class";

export class TodoList {


    constructor() {
        this.cargarLocalStorage()
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (parseFloat(todo.id) === parseFloat(id)) {
                todo.completado = !todo.completado;
                localStorage.setItem('todo', JSON.stringify(this.todos));
                break
            }
        }
    }

    eliminarTodoCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado)
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : []

        this.todos = this.todos.map((obj) => Todo.fromJson(obj))
    }

}