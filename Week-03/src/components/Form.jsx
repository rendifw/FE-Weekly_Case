import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import Calendar from "../assets/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({ setTasks }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!task || !date) return;

    const newTask = {
      id: uuidv4(),
      task: task,
      date: format(date, "yyyy-MM-dd"),
      completed: false,
    };

    setTask("");
    setDate(null);

    setTasks((prev) => [...prev, newTask]);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-5 mb-4 font-medium"
    >
      <div className="basis-1/2 flex flex-col gap-2.5 w-full">
        <label>What do you want to do?</label>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="placeholder-[#C9C9C9] bg-white px-6 py-4 rounded-lg border-[#EBEBEB] border-1 w-full"
          type="text"
          placeholder="Study for mid exams..."
        />
      </div>

      <div className="basis-2/5 flex flex-col gap-2.5 w-full">
        <label>When should it be done?</label>
        <div className="relative w-full">
          <DatePicker
            selected={date}
            onChange={(val) => setDate(val)}
            dateFormat="EEEE, do MMMM yyyy"
            placeholderText="Friday, 25th April 2025"
            className="placeholder-[#C9C9C9] bg-white px-6 py-4 rounded-lg border-[#EBEBEB] border-1 w-full"
            type="text"
            placeholder="Monday, 25th April 2025"
          />
          <span className="absolute -translate-y-1/2 pointer-events-none top-1/2 right-6">
            <img src={Calendar} alt="Calendar icon" />
          </span>
        </div>
      </div>
      <button
        className="rounded-lg basis-[10%] bg-[#0C51FF] text-white p-4 h-fit cursor-pointer"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};

export default Form;
