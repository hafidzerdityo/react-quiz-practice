import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import "./App.css";

import Question from "./components/Question";
import Score from "./components/Score";
import StartScreen from "./components/StartScreen";

function App() {
  const questions = [
    {
      questionText:
        "Short Circuit Evaluation dari code Javascript berikut yang menghasilkan nilai true adalah?",
      answerOptions: [
        { answerText: "false || undefined", isCorrect: false },
        { answerText: "false && [ ]", isCorrect: false },
        { answerText: "(3 > 2) || false  ", isCorrect: true },
        { answerText: "false || true", isCorrect: true },
      ],
    },
    {
      questionText:
        "Manakah dari framework berikut yang bukan merupakan framework Javascript?",
      answerOptions: [
        { answerText: "Angular", isCorrect: false },
        { answerText: "Vue", isCorrect: false },
        { answerText: "React", isCorrect: false },
        { answerText: "Tailwind", isCorrect: true },
      ],
    },
    {
      questionText:
        "Property CSS manakah yang digunakan untuk mengubah margin kiri dari sebuah element?",
      answerOptions: [
        { answerText: "padding-left", isCorrect: false },
        { answerText: "margin-left", isCorrect: true },
        { answerText: "border-left", isCorrect: false },
        { answerText: "display: block", isCorrect: false },
      ],
    },
    {
      questionText:
        "x = [1,[3,4,2][1],[2,2,['here']],0]. Jika ingin mengambil nilai string 'here' pada array x, maka indexing yang benar adalah?",
      answerOptions: [
        { answerText: "x[2][2][0]", isCorrect: true },
        { answerText: "x[0][2][2][0]", isCorrect: false },
        { answerText: "x[2][2]", isCorrect: false },
        { answerText: "syntax error", isCorrect: false },
      ],
    },
  ];

  const [page, setPage] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [start, setStart] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [toggleAnswers, setToggleAnswers] = useState(false);

  const handleAnsClick = (isCorrect, answerText) => {
    isCorrect && setScore(score + 1);

    setAnswers([...answers, { answerText, isCorrect }]);

    const nextPage = page + 1;

    nextPage < questions.length ? setPage(nextPage) : setShowScore(true);
  };

  const handleRestart = () => {
    setShowScore(false);
    setScore(0);
    setPage(0);
    setAnswers([]);
    setToggleAnswers(false);
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleAnswer = () => {
    setToggleAnswers(true);
  };

  return (
    <div>
      {!start ? (
        <StartScreen handleStart={handleStart} />
      ) : !showScore ? (
        <Question
          questions={questions}
          page={page}
          handleAnsClick={handleAnsClick}
        />
      ) : (
        <Score
          score={score}
          questions={questions}
          handleRestart={handleRestart}
          answers={answers}
          handleAnswer={handleAnswer}
          toggleAnswers={toggleAnswers}
        />
      )}
    </div>
  );
}

export default App;
