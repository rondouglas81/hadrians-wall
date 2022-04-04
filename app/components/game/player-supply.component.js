import React, { useContext } from "react";
import { Brick } from "~/components/game/icons/Brick";
import { Meeple } from "~/components/game/icons/Meeple";
import { GameContext } from "~/context/game.context";

export const PlayerSupply = () => {
  const { playerSupply } = useContext(GameContext);
  return (
    <div style={{ margin: "0 48px 24px 48px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          Resources
          <div style={{ display: "flex", alignItems: "center" }}>
            <Brick
              style={{ color: "#bbbbbb", marginRight: "4px" }}
              width="24px"
              height="24px"
            />
            <span style={{ fontSize: "18px", marginRight: "4px" }}>x</span>
            <span style={{ fontSize: "24px" }}>{playerSupply.resources}</span>
          </div>
        </div>
        <div>
          Soldiers
          <div style={{ display: "flex", alignItems: "center" }}>
            <Meeple
              style={{ color: "#2d241f", marginRight: "4px" }}
              width="24px"
              height="24px"
            />
            <span style={{ fontSize: "18px", marginRight: "4px" }}>x</span>
            <span style={{ fontSize: "24px" }}>{playerSupply.soldiers}</span>
          </div>
        </div>
        <div>
          Builders
          <div style={{ display: "flex", alignItems: "center" }}>
            <Meeple
              style={{ color: "#3a91bf", marginRight: "4px" }}
              width="24px"
              height="24px"
            />
            <span style={{ fontSize: "18px", marginRight: "4px" }}>x</span>
            <span style={{ fontSize: "24px" }}>{playerSupply.builders}</span>
          </div>
        </div>
        <div>
          Servants
          <div style={{ display: "flex", alignItems: "center" }}>
            <Meeple
              style={{ color: "#6d4e89", marginRight: "4px" }}
              width="24px"
              height="24px"
            />
            <span style={{ fontSize: "18px", marginRight: "4px" }}>x</span>
            <span style={{ fontSize: "24px" }}>{playerSupply.servants}</span>
          </div>
        </div>
        <div>
          Civilians
          <div style={{ display: "flex", alignItems: "center" }}>
            <Meeple
              style={{ color: "#bba817", marginRight: "4px" }}
              width="24px"
              height="24px"
            />
            <span style={{ fontSize: "18px", marginRight: "4px" }}>x</span>
            <span style={{ fontSize: "24px" }}>{playerSupply.civilians}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
