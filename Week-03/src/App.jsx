import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { format } from "date-fns";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("TASKS");
    return savedTasks ? JSON.parse(savedTasks) : data
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks))
  }, [tasks])

  let today = "2025-04-12";
  let parsedToday = format(today, "EEEE, dd MMMM yyyy");

  return (
    <main className="flex flex-col w-full text-black bg-white px-19 py-12 rounded-xl font-[Hanken_Grotesk] font-medium">
      <header className="font-inter mb-[4rem]">
        <h2 className="mb-2 text-3xl font-semibold">Good Morning, User 👋</h2>
        <p className="text-[#9D9D9D]">It's {parsedToday}</p>
      </header>
      <Form setTasks={setTasks} />
      <TaskList data={tasks} today={today} setTasks={setTasks} />
    </main>
  );
}

export default App;
