import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import usePlayerState from "../../hooks/usePlayerState";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

function Player({ url }) {
  const $videoPlayer = useRef(null);
  const {
    playerState,
    toggleVideoPlay,
    toggleMuted,
    handleVolumeChange,
    handleVolumeSeekDown,
  } = usePlayerState($videoPlayer);

  useEffect(() => {
    playerState.playing
      ? $videoPlayer.current.player.handlePlay()
      : $videoPlayer.current.player.handlePause();
  }, [$videoPlayer, playerState.playing]);

  return (
    <>
      <Grid container direction="row" alignItems="center">
        <Grid item lg={12} sm={6}>
          <ReactPlayer
            ref={$videoPlayer}
            url={url}
            width={"100%"}
            height={"100%"}
            playing={playerState.playing}
            muted={playerState.muted}
            volume={playerState.volume}
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={toggleVideoPlay}
          >
            {playerState.playing ? "Pause" : "Play"}
          </Button>
        </Grid>

        <Grid item xs>
          <IconButton color="inherit" onClick={toggleMuted}>
            {playerState.muted ? (
              <VolumeOffIcon fontSize="small" />
            ) : (
              <VolumeUpIcon fontSize="small" />
            )}
          </IconButton>
        </Grid>

        <Grid item xs={7}>
          <Slider
            aria-label="volume"
            color="secondary"
            onChange={handleVolumeChange}
            onChangeCommitted={handleVolumeSeekDown}
            defaultValue={20}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Player;
