import React from "react";

import Answer from "./Answer";

const Score = ({
  score,
  questions,
  handleRestart,
  answers,
  handleAnswer,
  toggleAnswers,
}) => {
  return (
    <>
      {!toggleAnswers ? (
        <div>
          <div className="row align-items-center justify-content-center give-height">
            <div
              className="my-card row justify-content-between align-items-center"
              style={{ width: "40vw" }}
            >
              <p className="lead">
                Berhasil menjawab {score} dari {questions.length} pertanyaan
              </p>

              <h4>Score: {((score / questions.length) * 100).toFixed(2)}%</h4>
              <button
                className="btn btn-primary my-3 w-25 mx-auto"
                onClick={() => handleRestart()}
              >
                Ulangi Tes
              </button>
              <button
                className="btn btn-success my-3 w-25 mx-auto"
                onClick={() => handleAnswer()}
              >
                Cek Jawaban
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Answer answers={answers} handleRestart={handleRestart} />
      )}
    </>
  );
};

export default Score;
