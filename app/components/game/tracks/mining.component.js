import React, { useContext } from "react";
import { ThreeColumnTrack } from "./three-column-track.component";
import { GameContext } from "~/context/game.context";

export const MiningTrack = () => {
  const { miningTrack, actions } = useContext(GameContext);

  const handleMiningTrackClicked = (id) => {
    actions.setMiningData(id, 1);
  };

  return (
    <ThreeColumnTrack
      track={miningTrack}
      handleClick={handleMiningTrackClicked}
    />
  );
};
