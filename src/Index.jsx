import { useState } from 'react';
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

  ])


  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default App
