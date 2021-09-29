import React from "react";

const Question = ({ questions, page, handleAnsClick }) => {
  return (
    <>
      <div className="bg-light text-dark">
        <div className="row align-items-center justify-content-center give-height">
          <div
            className="my-card row justify-content-between align-items-center"
            style={{ width: "40vw" }}
          >
            <div className="col-lg">
              <h5>
                Pertanyaan {page + 1}/{questions.length}
              </h5>
              <p>{questions[page].questionText}</p>
            </div>
            <div className="col-lg">
              {questions[page].answerOptions.map((eachAnswer) => {
                return (
                  <button
                    className="btn btn-block btn-primary w-100 mb-2"
                    onClick={() =>
                      handleAnsClick(
                        eachAnswer.isCorrect,
                        eachAnswer.answerText
                      )
                    }
                  >
                    {eachAnswer.answerText}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
