import React from "react";

const StartScreen = ({ handleStart }) => {
  return (
    <>
      <div>
        <div className="row align-items-center justify-content-center give-height">
          <div className="my-card row justify-content-between align-items-center w-50">
            <h4 className="text-center">Mulai Tes</h4>
            <p className="lead text-center">Good Luck!</p>

            <button
              className="btn btn-danger my-1 w-50 mx-auto"
              onClick={() => handleStart()}
            >
              Mulai
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartScreen;
