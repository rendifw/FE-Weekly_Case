import Checked from "../assets/checked.svg";
import Unchecked from "../assets/unchecked.svg";
import Tag from "./Tag";

const Task = ({ setTasks, today, data }) => {
  function handleClick() {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === data.id ? { ...task, completed: !data.completed } : task
      )
    );
  }

  return (
    <>
      {data.completed ? (
        <div
          className="bg-[#F8F8F8] text-[#9D9D9D] cursor-pointer flex justify-between items-center py-2.5 px-4 rounded-md"
          onClick={handleClick}
        >
          <div className="flex gap-4 text-[1rem]">
            <img src={Checked} alt="Checked checkbox" />
            <p className="line-through">{data.task}</p>
          </div>
          <Tag date={data.date} today={today} />
        </div>
      ) : (
        <div
          className="cursor-pointer flex justify-between items-center py-2.5 px-4 rounded-md"
          onClick={handleClick}
        >
          <div className="flex gap-4 text-[1rem]">
            <img src={Unchecked} alt="Checked checkbox" />
            <p className="">{data.task}</p>
          </div>
          <Tag date={data.date} today={today} />
        </div>
      )}
    </>
  );
};

export default Task;
