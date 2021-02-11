import React, { useState } from "react";

function usePlayerState() {
  const [playerState, setPlayerState] = useState({
    playing: false,
    muted: false,
    volume: 0.2,
  });

  function toggleMuted() {
    setPlayerState({
      ...playerState,
      muted: !playerState.muted,
    });
  }

  function toggleVideoPlay() {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    });
  }

  const handleVolumeChange = (event, newValue) => {
    setPlayerState({
      ...playerState,
      volume: newValue / 100,
      muted: newValue === 0 ? true : false,
    });
  };

  const handleVolumeSeekDown = (event, newValue) => {
    setPlayerState({
      ...playerState,
      volume: newValue / 100,
      muted: newValue === 0 ? true : false,
    });
  };

  return {
    playerState,
    toggleVideoPlay,
    toggleMuted,
    handleVolumeChange,
    handleVolumeSeekDown,
  };
}

export default usePlayerState;
