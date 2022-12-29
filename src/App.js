import "./App.css";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typeography from "@mui/material/Typography";

function App() {
  const [state, setState] = useState({ ctm: +new Date(), n: 5, clicked: "" });
  const turn = function (e) {
    const ns = { ...state };
    ns.clicked += e.target.id;
    setState(ns);
  };

  const reset = function (e) {
    const ns = { ...state };
    ns.clicked = "";
    setState(ns);
  };
  return (
    <Paper
      square
      elevation={1}
      sx={{
        p: 1,
        m: 0,
      }}
    >
      <Typeography variant="h3">Tractor</Typeography>
      <Typeography variant="h5">{state.n}</Typeography>
      <ButtonGroup orientation="vertical" size="large" fullWidth>
        {new Array(state.n).fill().map((e, i) => (
          <Button
            disabled={state.clicked.indexOf(i) > -1}
            variant="contained"
            id={`turn-${i}`}
            onClick={turn}
            key={i}
          >
            Turn - {1 + i} {console.log(state)}
          </Button>
        ))}
      </ButtonGroup>
      <hr/>
      <Button variant="outlined" onClick={reset}>RESET</Button>
    </Paper>
  );
}

export default App;
