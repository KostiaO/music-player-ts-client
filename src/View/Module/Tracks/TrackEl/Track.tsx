import { TTrackEl } from "../../../../Types/Api/getTrack";

export default function TrackEl(props: TTrackEl) {
  const { _id, originalName, platform, link } = props;
  return (
    <div id={_id} className="track-el">
      <ul>
        <li> {originalName} </li>
        {/* <li> {platform} </li> */}
        <li>
          <a href={link}> {link} </a>
        </li>
      </ul>
    </div>
  );
}
