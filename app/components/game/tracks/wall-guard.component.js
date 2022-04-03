import React, { useContext } from "react";
import { ThreeColumnTrack } from "./three-column-track.component";
import { GameContext } from "~/context/game.context";

export const WallGuardTrack = () => {
  const { wallGuardTrack, actions } = useContext(GameContext);

  const handleWallGaurdTrackClicked = (id) => {
    actions.setWallGuardData(id, 1);
  };

  return (
    <ThreeColumnTrack
      track={wallGuardTrack}
      handleClick={handleWallGaurdTrackClicked}
    />
  );
};
