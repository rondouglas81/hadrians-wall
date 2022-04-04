import { useState } from "react";
import { config } from "~/game.config";

export const useGameData = () => {
  const [playerSupply, setPlayerSupply] = useState({
    resources: 0,
    soldiers: 0,
    builders: 0,
    servants: 0,
    civilians: 0,
  });

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
    const input = newCohorts[side].inputs[index];
    if (input.requiresPrevious) {
      if (newCohorts[side].inputs[index - 1].value !== 1) {
        return;
      }
    }
    input.value = value;

    if (input.reward) {
      giveReward(input.reward, 1);
    }

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

          if (input.reward) {
            giveReward(input.reward, 1);
          }
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

          if (input.reward) {
            giveReward(input.reward, 1);
          }
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

          if (input.reward) {
            giveReward(input.reward, 1);
          }
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

          if (input.reward) {
            giveReward(input.reward, 1);
          }
        }
        return input;
      }),
    };
    setWallTrack(newWallTrack);
  };

  const giveReward = (reward, amount) => {
    reward.forEach((type) => {
      switch (type) {
        case "resource":
          setPlayerSupply({
            ...playerSupply,
            resources: playerSupply.resources + amount,
          });
          break;
        case "soldier":
          setPlayerSupply({
            ...playerSupply,
            soldiers: playerSupply.soldiers + amount,
          });
          break;
        case "builder":
          setPlayerSupply({
            ...playerSupply,
            builders: playerSupply.builders + amount,
          });

          break;
        case "servant":
          setPlayerSupply({
            ...playerSupply,
            servants: playerSupply.servants + amount,
          });
          break;
        case "civilian":
          setPlayerSupply({
            ...playerSupply,
            civilians: playerSupply.civilians + amount,
          });
          break;
      }
    });
  };

  const actions = {
    setCohortData,
    setMiningData,
    setWallGuardData,
    setCippiData,
    setWallData,
    giveReward,
  };

  return {
    playerSupply,
    actions,
    cohorts,
    miningTrack,
    wallGuardTrack,
    cippiTrack,
    wallTrack,
  };
};
