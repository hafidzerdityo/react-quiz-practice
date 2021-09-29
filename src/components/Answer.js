import React from "react";

const Answer = ({ answers, handleRestart }) => {
  return (
    <div>
      <div className="row align-items-center justify-content-center give-height">
        <div
          className="my-card row justify-content-between align-items-center"
          style={{ width: "40vw" }}
        >
          {answers.map((ans) => {
            if (!ans.isCorrect) {
              return (
                <div className="bg-danger my-3 text-light p-2 ans-ctrl">
                  {ans.answerText}
                </div>
              );
            } else {
              return (
                <div className="bg-success my-3 text-light p-2 ans-ctrl">
                  {ans.answerText}
                </div>
              );
            }
          })}

          <button
            className="btn btn-primary w-50 mx-auto my-2"
            onClick={handleRestart}
          >
            Ulangi Tes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Answer;
