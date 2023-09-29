import React from "react";
import { Todo } from "../model";
import ToDoCard from "./ToDoCard";

interface Props {
  toDos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListOfTodos: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      {toDos.map((toDo) => ( 
        <ToDoCard
          toDo={toDo}
          key={toDo.id}
          toDos={toDos}
          setToDos={setToDos}
        />
      ))}
    </div>
  );
};

export default ListOfTodos;
