import { TTrackEl } from "../../../../Types/Api/getTrack";

export default function TrackEl(props: TTrackEl) {
  const { _id, originalName, platform, link } = props;
  return (
    <div id={_id}>
      <ul>
        <li> {originalName} </li>
        <li> {platform} </li>
        <li> {link} </li>
      </ul>
    </div>
  );
}
