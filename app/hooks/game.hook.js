import { useState } from "react";
import { config } from "~/game.config";

export const useGameData = () => {
  const [cohorts, setCohorts] = useState({
    left: { ...config.tracks.cohort.left },
    center: { ...config.tracks.cohort.center },
    right: { ...config.tracks.cohort.right },
  });

  const [miningTrack, setMiningTrack] = useState({
    ...config.tracks.miningAndForesting,
  });

  const [wallGuardTrack, setWallGuardTrack] = useState({
    ...config.tracks.wallGuard,
  });

  const [cippiTrack, setCippiTrack] = useState({
    ...config.tracks.cippi,
  });

  const [wallTrack, setWallTrack] = useState({
    ...config.tracks.wall,
  });

  const setCohortData = (side, index, value) => {
    const newCohorts = { ...cohorts };
    if (newCohorts[side].inputs[index].requiresPrevious) {
      if (newCohorts[side].inputs[index - 1].value !== 1) {
        return;
      }
    }
    newCohorts[side].inputs[index].value = value;
    console.log(
      "you earned these rewards",
      newCohorts[side].inputs[index].reward
    );
    setCohorts(newCohorts);
  };

  const setMiningData = (id, value) => {
    const newMiningTrack = {
      ...miningTrack,
      inputs: miningTrack.inputs.map((input, index) => {
        if (input.id === id) {
          if (
            input.requiresPrevious &&
            miningTrack.inputs[index - 1].value !== 1
          ) {
            return input;
          }
          input.value = value;
          console.log("you earned these rewards", input.reward);
        }
        return input;
      }),
    };
    setMiningTrack(newMiningTrack);
  };

  const setWallGuardData = (id, value) => {
    const newWallGuardTrack = {
      ...wallGuardTrack,
      inputs: wallGuardTrack.inputs.map((input, index) => {
        if (input.id === id) {
          if (
            input.requiresPrevious &&
            wallGuardTrack.inputs[index - 1].value !== 1
          ) {
            return input;
          }
          input.value = value;
          console.log("you earned these rewards", input.reward);
        }
        return input;
      }),
    };
    setWallGuardTrack(newWallGuardTrack);
  };

  const setCippiData = (id, value) => {
    const newCippiTrack = {
      ...cippiTrack,
      inputs: cippiTrack.inputs.map((input, index) => {
        if (input.id === id) {
          if (
            input.requiresPrevious &&
            cippiTrack.inputs[index - 1].value !== 1
          ) {
            return input;
          }
          input.value = value;
          console.log("you earned these rewards", input.reward);
        }
        return input;
      }),
    };
    setCippiTrack(newCippiTrack);
  };

  const setWallData = (id, value) => {
    const newWallTrack = {
      ...wallTrack,
      inputs: wallTrack.inputs.map((input, index) => {
        if (input.id === id) {
          if (
            input.requiresPrevious &&
            wallTrack.inputs[index - 1].value !== 1
          ) {
            return input;
          }
          input.value = value;
          console.log("you earned these rewards", input.reward);
        }
        return input;
      }),
    };
    setCippiTrack(newWallTrack);
  };

  const actions = {
    setCohortData,
    setMiningData,
    setWallGuardData,
    setCippiData,
    setWallData,
  };

  return {
    actions,
    cohorts,
    miningTrack,
    wallGuardTrack,
    cippiTrack,
    wallTrack,
  };
};
