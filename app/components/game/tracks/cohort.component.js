import React, { useContext } from "react";
import { InputBox } from "~/components/game/input/input-box.component";
import { GameContext } from "~/context/game.context";
import { getIconFromReward } from "~/utils";

export const Cohort = ({ side }) => {
  const { cohorts, actions } = useContext(GameContext);

  const handleCohortClicked = (index) => {
    actions.setCohortData(side, index, 1);
  };

  return (
    <div className="cohort">
      <div className="cohort-icon" data-side={side} />
      <div className="cohort-name">{`${side}\ncohort`}</div>
      <div className="cohort-cost-icon">X</div>
      <div className="cohort-input-container">
        {cohorts[side]?.inputs.map((config, index) => (
          <InputBox
            key={index}
            value={config.value}
            icon={getIconFromReward(config.reward)}
            onClick={() => handleCohortClicked(index)}
          />
        ))}
      </div>
    </div>
  );
};
