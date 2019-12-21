import React from "react";

const Round = ({ avilable, num }) => {
  return (
    <div>
      {avilable ? (
        <button className="round set-center" id="r-true">
          {num}
        </button>
      ) : (
        <div className="round set-center" id="r-false">
          {num}
        </div>
      )}
    </div>
  );
};

export default Round;
