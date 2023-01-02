import "./App.css";
import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typeography from "@mui/material/Typography";
import { useImmer } from "use-immer";
import Box from "@mui/material/Box";
import { ReactComponent as LeafIcon } from "./image2vector.svg";
import SvgIcon from "@mui/material/SvgIcon";

function App() {
  const [state, setState] = useImmer({ sessionStart: new Date(), rows: [] });
  const turn = (e) => {
    setState((draft) => {
      draft.rows.push({ htm: new Date() });
    });
  };

  return (
    <Paper
      square
      elevation={0}
      sx={{
        p: 1,
        m: 0,
      }}
    >
      <Typeography variant="h3">Tractor</Typeography>
      <Typeography variant="body2">
        {state.sessionStart.toISOString()}
      </Typeography>
      <Typeography variant="caption">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
          {state.rows.map((hit,i)=><Grid item key={i} xs={6}>{hit.htm.toISOString()}<SvgIcon sx={{color:"green"}}><LeafIcon/></SvgIcon></Grid>)}
          </Grid>
        </Box>
      </Typeography>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          minHeight: 200,
          position: "fixed",
          bottom: 0,
          left: 0, 
        }}
        onClick={turn}
      >
        Hit
      </Button>
    </Paper>
  );
}

export default App;
