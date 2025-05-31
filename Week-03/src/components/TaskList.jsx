import Calendar from "../assets/calendar.svg";
import Arrow from "../assets/arrow.svg";
import Task from "./Task";
import { isAfter, parseISO } from "date-fns";
import { useState } from "react";

const TaskList = ({ data, today, setTasks }) => {
  const todayList = data.filter((task) => task.date === today);
  const otherList = data
    .filter((task) => isAfter(parseISO(task.date), parseISO(today)))
    .sort((a, b) => parseISO(a.date) - parseISO(b.date));

  const [showToday, setShowToday] = useState(true);
  const [showOther, setShowOther] = useState(true);

  return (
    <>
      <section className="flex flex-col gap-4 mt-9">
        <div className="flex items-center gap-3 ">
          <img
            src={Arrow}
            alt="Toggle arrow"
            className={`transition-transform duration-500 cursor-pointer ${
              showToday ? "rotate-0" : "-rotate-180"
            }`}
            onClick={() => setShowToday((prev) => !prev)}
          />
          <img src={Calendar} alt="Calendar icon" />
          <p>Today</p>
          <span className="bg-[#F6F6F6] rounded-sm px-2 py-0.5">
            {todayList.length}
          </span>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            showToday ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div
            className={`flex flex-col gap-3 px-6 overflow-hidden transition-[max-height] duration-500`}
          >
            {todayList.map((task) => (
              <Task
                key={task.id}
                setTasks={setTasks}
                today={today}
                data={task}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 mt-9">
        <div className="flex items-center gap-3">
          <img
            src={Arrow}
            alt="Toggle arrow"
            className={`transition-transform duration-500 cursor-pointer ${
              showOther ? "rotate-0" : "-rotate-180"
            }`}
            onClick={() => setShowOther((prev) => !prev)}
          />
          <img src={Calendar} alt="Calendar icon" />
          <p>Other</p>
          <span className="bg-[#F6F6F6] rounded-sm px-2 py-0.5">
            {otherList.length}
          </span>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            showOther ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div
            className={`flex flex-col gap-3 px-6 overflow-hidden transition-[max-height] duration-500`}
          >
            {otherList.map((task) => (
              <Task
                key={task.id}
                setTasks={setTasks}
                today={today}
                data={task}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskList;
