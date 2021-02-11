import React from "react";
import usePlayerState from "../../hooks/usePlayerState";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

function PlayAll() {
  const { playerState, toggleVideoPlay } = usePlayerState();

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item xs>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth={true}
          onClick={toggleVideoPlay}
        >
          {playerState.playing ? "Pause All" : "Play All"}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PlayAll;
