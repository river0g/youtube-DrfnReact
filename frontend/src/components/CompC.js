import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import Button from "@material-ui/core/Button";

const CompC = () => {
  const { dispatchProvided } = useContext(AppContext);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatchProvided("add_1")}
      >
        Add + 1
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatchProvided("reset")}
      >
        Reset
      </Button>
    </div>
  );
};

export default CompC;
