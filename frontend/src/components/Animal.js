import React from "react";

const Animal = ({ type }) => {
  if (type == "cat") {
    return <span>thanks!</span>;
  } else {
    return <></>;
    // return <span>noThanks...</span>;
  }
};

export default Animal;
