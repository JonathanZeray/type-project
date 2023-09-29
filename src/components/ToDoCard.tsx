import React from "react";
import { Todo } from "../model";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdDownloadDone } from "react-icons/md";

type Props = {
  toDo: Todo;
  toDos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const ToDoCard: React.FC<Props> = ({ toDo, toDos, setToDos }) => {
  return (
    <form className="flex w-2/4 rounded-lg p-6 my-2 bg-red-200">
      <h3 className="text-4xl sm:text-2xl">{toDo.todo}</h3>
      <div className="flex items-center justify-end ml-auto text-2xl sm:text-xl">
        <span className="mx-1 cursor-pointer">
          <MdDownloadDone />
        </span>
        <span className="mx-1 cursor-pointer">
          <AiOutlineEdit />
        </span>
        <span className="mx-1 cursor-pointer">
          <AiOutlineDelete />
        </span>
      </div>
    </form>
  );
};

export default ToDoCard;
