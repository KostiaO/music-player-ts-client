import { useTracks } from "../../../Api/Auth/useGetTracks";
import { TGetTracksReturn, TTrackEl } from "../../../Types/Api/getTrack";
import TrackEl from "./TrackEl/Track";
import { useEffect, useState } from "react";
import "./TracksGroup.scss";
import { socket } from "../../../socket";

interface Props {
  id: string;
}

export default function TracksGroup(props: Props) {
  const { tracksData, tracksError, tracksFetch } = useTracks(props, "queue");

  const refresh = () => {
    tracksFetch();
  };
  useEffect(() => {
    socket.on(props.id, () => {
      setTimeout(() => {
        refresh();
      }, 500);
    });
    refresh();
    console.log(tracksData);
  }, []);

  return (
    <div className="tracks-group">
      {tracksData &&
        tracksData.queue &&
        tracksData.queue.map((track: TTrackEl) => <TrackEl {...track} />)}
      {tracksData &&
        tracksData.library &&
        tracksData.library.map((track: TTrackEl) => <TrackEl {...track} />)}
      {/* <button onClick={refresh}>Refresh</button> */}
    </div>
  );
}
