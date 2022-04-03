import React, { useContext } from "react";
import { ThreeColumnTrack } from "./three-column-track.component";
import { GameContext } from "~/context/game.context";

export const WallTrack = () => {
  const { wallTrack, actions } = useContext(GameContext);

  const handleWallTrackClicked = (id) => {
    actions.setWallData(id, 1);
  };

  return (
    <ThreeColumnTrack track={wallTrack} handleClick={handleWallTrackClicked} />
  );
};
