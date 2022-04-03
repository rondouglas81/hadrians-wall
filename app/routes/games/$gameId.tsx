import { useCatch } from "remix";
import { Cohorts } from "~/components/game/tracks/cohorts.component";
import { MiningTrack } from "~/components/game/tracks/mining.component";
import { WallGuardTrack } from "~/components/game/tracks/wall-guard.component";
import { CippiTrack } from "~/components/game/tracks/cippi.component";
import { WallTrack } from "~/components/game/tracks/wall.component";
import { GameContext } from "~/context/game.context";
import { useGameData } from "~/hooks/game.hook";

import trackStyles from "~/styles/track.styles.css";
import inputStyles from "~/styles/inputs.styles.css";

export function links() {
  return [
    { rel: "stylesheet", href: trackStyles },
    { rel: "stylesheet", href: inputStyles },
  ];
}

export default function GamePage() {
  const gameData = useGameData();
  return (
    <GameContext.Provider value={gameData}>
      <div>
        <Cohorts />
        <MiningTrack />
        <WallGuardTrack />
        <CippiTrack />
        <WallTrack />
      </div>
    </GameContext.Provider>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Game not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
