import React, { useState } from "react";
import background from "./assets/todo3image.jpeg"; // Substitua pelo caminho real da sua imagem

function App() {
  const [toDoItem, setTodoItem] = useState("");
  const [toDoList, setToDoList] = useState([
    {
      id: "0",
      label: "Estudar",
      checked: true,
    },
  ]);

  const handleAddItem = () => {
    setToDoList([
      ...toDoList,
      {
        label: toDoItem,
        checked: false,
        id: `${toDoList.length + 1}`,
      },
    ]);
    setTodoItem("");
  };

  const handleRemoveItem = (id) => {
    const newList = toDoList.filter((item) => item.id !== id);
    setToDoList(newList);
  };

  const toogleItem = (id) => {
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className=" bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Lista de Tarefas
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Digite sua Tarefa..."
            value={toDoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>

      <div className="mt-8 flex">
        <ul>
          {toDoList.map((item) => (
            <li
              key={item.id}
              className="bg-white p-2 rounded shadow-md mb-2 flex justify-between items-center ml-2"
            >
              <input
                onClick={() => toogleItem(item.id)}
                className="h-6 w-6 mr-3"
                type="checkbox"
                checked={item.checked}
              />
              <span>{item.label}</span>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
