import React, { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";

const C = (props) => {
  const { countProvided: count } = useContext(AppContext); // prop drilingを避けるためのuseContext

  return (
    <div>
      <h3>C</h3>
      Count: {count} by C-component
    </div>
  );
};

export default C;
