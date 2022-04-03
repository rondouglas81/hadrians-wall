import React, { useContext } from "react";
import { ThreeColumnTrack } from "./three-column-track.component";
import { GameContext } from "~/context/game.context";

export const CippiTrack = () => {
  const { cippiTrack, actions } = useContext(GameContext);

  const handleCippiTrackClicked = (id) => {
    actions.setCippiData(id, 1);
  };

  return (
    <ThreeColumnTrack
      track={cippiTrack}
      handleClick={handleCippiTrackClicked}
    />
  );
};
