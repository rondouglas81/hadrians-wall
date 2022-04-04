import React from "react";
import { InputBox } from "~/components/game/input/input-box.component";
import { getIconFromReward } from "~/utils";

export const ThreeColumnTrack = ({ track, handleClick }) => {
  return (
    <div className="three-column-track">
      <div className="three-column-track-info">{track.name}</div>
      <div className="three-column-track-column">
        {track.inputs
          .filter((i) => i.column === "left")
          .map((config) => (
            <InputBox
              key={config.id}
              value={config.value}
              wide={config.reward?.length > 1}
              icon={getIconFromReward(config.reward)}
              onClick={() => handleClick(config.id)}
            />
          ))}
      </div>
      <div className="three-column-track-column">
        {track.inputs
          .filter((i) => i.column === "center")
          .map((config) => (
            <InputBox
              key={config.id}
              value={config.value}
              wide={config.reward?.length > 1}
              icon={getIconFromReward(config.reward)}
              onClick={() => handleClick(config.id)}
            />
          ))}
      </div>
      <div className="three-column-track-column">
        {track.inputs
          .filter((i) => i.column === "right")
          .map((config) => (
            <InputBox
              key={config.id}
              value={config.value}
              wide={config.reward?.length > 1}
              icon={getIconFromReward(config.reward)}
              onClick={() => handleClick(config.id)}
            />
          ))}
      </div>
    </div>
  );
};
