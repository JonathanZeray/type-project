import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ListOfTodos from "./components/ListOfTodos";
import { Todo } from "./model";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>(" ");
  const [toDos, setToDos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...toDos, { id: Date.now(), todo: toDo, isDone: false }]);
      setToDo("");
    }
  };


  return (
    <div className="flex flex-col items-center bg-lightblue  w-full h-screen">
      <span className="mt-8 text-5xl font-Gabarito uppercase">Tasks To Do</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ListOfTodos toDos={toDos} setToDos={setToDos}/>
    </div>
  );
};

export default App;
