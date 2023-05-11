import { usePlayer } from "../../../Api/Auth/usePlayer";

import "./Player.scss";

export const Player = (props: { id: string }) => {
  const player = {
    play: usePlayer(props, "start"),
    stop: usePlayer(props, "stop"),
    skip: usePlayer(props, "skip"),
  };

  return (
    <div className="player">
      <ul>
        <li
          onClick={() => {
            player.stop.playerFetch();
          }}
        >
          ||
        </li>
        <li
          onClick={() => {
            player.play.playerFetch();
          }}
        >
          {"|>"}
        </li>
        <li
          onClick={() => {
            player.skip.playerFetch();
          }}
        >
          {">"}
        </li>
      </ul>
    </div>
  );
};
