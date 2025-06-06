import { useRef, useState } from "react";
import Search from "../assets/icons/Search.svg";

const Form = ({ setFilter }) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setFilter(search);
  }

  function handleChange(e) {
    const value = e.target.value;
    setSearch(value);
    if (value === "") {
      setFilter("");
    }
  }

  return (
    <section className="flex justify-between w-full">
      <h2 className="text-3xl">Products</h2>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <div
          className="flex border-[1px] border-[#E0E0E0] rounded-4xl px-6 py-2 text-sm leading-6 focus-within:border-black"
          onClick={() => inputRef.current.focus()}
        >
          <img src={Search} alt="Search icon" />
          <input
            type="text"
            ref={inputRef}
            value={search}
            onChange={handleChange}
            placeholder="Search Products"
            className="ml-4 outline-none "
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center px-8 py-2 text-sm leading-6 text-white bg-black cursor-pointer rounded-4xl"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Form;
