import "./App.css";
import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typeography from "@mui/material/Typography";
import { useImmer } from "use-immer";
import Box from "@mui/material/Box";
import { ReactComponent as LeafIcon } from "./image2vector.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Fab from "@mui/material/Fab";
import SaveIcon from "@mui/icons-material/Save";

function App() {
  const [state, setState] = useImmer({ sessionStart: new Date(), rows: [] });
  const turn = (e) => {
    setState((draft) => {
      draft.rows.push({ htm: new Date() });
      saveToLocalStorage(draft);
    });
  };

  const reset = () => {
    setState((draft) => {
      draft.sessionStart = new Date();
      draft.rows = [];
    });
  };

  const saveToLocalStorage = (newState) => {
    window.localStorage.setItem(
      `session-${newState.sessionStart.getTime()}`,
      JSON.stringify(newState)
    );
  };

  useEffect(() => {
    console.log("updated");
  });

  return (
    <Paper
      square
      elevation={0}
      sx={{
        p: 1,
        m: 0,
        flexGrow: 1,
      }}
    >
      <Typeography variant="h3">Tractor</Typeography>
      <Typeography variant="body2">
        {state.sessionStart.toISOString()}
      </Typeography>
      <Typeography variant="caption">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            {state.rows.map((hit, i) => (
              <Grid item key={i} xs={6}>
                {hit.htm.toISOString()}
                <SvgIcon sx={{ color: "green" }}>
                  <LeafIcon />
                </SvgIcon>
              </Grid>
            ))}
          </Grid>
          <Fab
            variant="extended"
            sx={{ position: "fixed", bottom: 64, mr: 1, right: 0 }}
            onClick={saveToLocalStorage(state)}
          >
            <SaveIcon />
            Save Session
          </Fab>
        </Box>
      </Typeography>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          borderTop: "1px solid grey",
          padding: 0,
          margin: 0,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ p: 1 }}
        >
          <Grid item xs={4}>
            <Button
              onClick={reset}
              sx={{ width: "100%" }}
              size="large"
              variant="outlined"
            >
              Reset
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button
              size="large"
              sx={{ width: "100%" }}
              variant="contained"
              onClick={turn}
            >
              Hit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default App;
