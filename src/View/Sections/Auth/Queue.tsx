import { useParams } from "react-router-dom";
import TracksGroup from "../../Module/Tracks/TracksGroup";

export const Queue: React.FC = () => {
  let { guildId } = useParams();

  return <TracksGroup id={guildId as string} />;
};

export default Queue;
