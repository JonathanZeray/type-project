import React from "react";

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }) => {
  return (
    <form className="flex w-3/4 relative items-center font-Gabarito my-6" onSubmit={(e) => handleAdd(e)}>
      <input
        value={toDo}
        onChange={(e) => {
          setToDo(e.target.value);
        }}
        type="input"
        placeholder="write a new task"
        className="w-full rounded-md border-solid border-2 p-4 text-xl sm:text-2xl"
      />
      <button
        className="bg-slate-300 rounded-md border-2 p-2 m-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default InputField;
