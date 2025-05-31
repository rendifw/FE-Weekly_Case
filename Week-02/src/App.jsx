import { useState } from "react";
import reactLogo from "./assets/react.png";
import "./App.css";
import Flashcard from "./Flashcard";
import Badge from "./Badge";
import { data } from "./data";


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
