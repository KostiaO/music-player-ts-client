import { useParams } from "react-router-dom";
import TracksGroup from "../../Module/Tracks/TracksGroup";
import { TrackFrom } from "../../Module/Form/AddTrack";
import { Player } from "../../Module/Player/Player";

import "./Queue.scss";

export const Queue: React.FC = () => {
  let { guildId } = useParams();

  return (
    <div className="queue">
      <TracksGroup id={guildId as string} />
      <TrackFrom id={guildId as string} />
      <Player id={guildId as string} />
    </div>
  );
};

export default Queue;
