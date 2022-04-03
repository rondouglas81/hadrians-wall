import { Link } from "remix";

export default function GameIndexPage() {
  return (
    <p>
      No game selected. Select a game on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new game.
      </Link>
    </p>
  );
}
