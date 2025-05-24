import Badge from "./Badge";

const Flashcard = ({ number, question, answer, difficulty, open, setOpen }) => {
  return (
    <div className="card-container">
      <div
        className={`card ${open == number ? "flipped" : ""}`}
        onClick={() => (open == number ? setOpen(null) : setOpen(number))}
      >
        
        <div className="question">
          <p>Question {number}</p>
          <h2>{question}</h2>
          <Badge difficulty={difficulty}>{difficulty}</Badge>
        </div>

        <div className={`answer ${difficulty.toLowerCase()}-border`}>
          <div>
            <p>Answer :</p>
            <Badge difficulty={difficulty}>{difficulty}</Badge>
          </div>
          <h3>{question}</h3>
          <p>{answer}</p>
        </div>

      </div>
    </div>
  );
};

export default Flashcard;
