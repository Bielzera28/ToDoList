import { useState } from "react";
import "./styles.scss";
import Todo from "./components/todo/todo";
import TodoForm from "./components/todoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir para a Academia",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map ((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    
    setTodos(newTodos);

  }

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm  addTodo={addTodo}/>
    </div>
  );
}

export default App;
