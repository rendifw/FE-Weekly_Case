import { useState } from "react";
import reactLogo from "./assets/react.png";
import "./App.css";
import Flashcard from "./Flashcard";
import Badge from "./Badge";

const data = [
  {
    question: "What does a useEffect dependency array do?",
    answer: "Re-runs the useEffect function whenever any dependency changes.",
    difficulty: "Easy",
  },
  {
    question: "List all of React's Component Lifecycles!",
    answer:
      "A React Component has three lifecycle phases: mounting, updating and unmounting.",
    difficulty: "Medium",
  },
  {
    question: "What is a Higher Order Component?",
    answer:
      "A function that takes a component and returns an enhanced component version.",
    difficulty: "Hard",
  },
  {
    question: "What is The Compound Component Pattern?",
    answer:
      "A pattern enabling related components to share state implicitly, promoting flexible design.",
    difficulty: "Hard",
  },
  {
    question: "What is prop drilling and how to fix it?",
    answer:
      "Prop drilling refers to passing props through several layers; the Context API can streamline this.",
    difficulty: "Easy",
  },
  {
    question: "What is the usage of the useRef hook?",
    answer:
      "It maintains a mutable value between renders without causing re-renders, useful for DOM refs.",
    difficulty: "Medium",
  },
];

function App() {
  const [openNumber, setOpenNumber] = useState(null);
  return (
    <>
      <header>
        <Badge>From Beginner to Advanced Questions</Badge>
        <div>
          <img src={reactLogo} alt="React Logo" />
          <h1>The React Flash Cards.</h1>
        </div>
        <p>Test your react knowledge by answering the flashcards below</p>
      </header>
      <main>
        {data.map((card, i) => (
          <Flashcard
            number={i + 1}
            open={openNumber}
            setOpen={setOpenNumber}
            question={card.question}
            answer={card.answer}
            difficulty={card.difficulty}
            key={i}
          />
        ))}
      </main>
    </>
  );
}

export default App;
