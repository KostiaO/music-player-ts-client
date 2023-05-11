import { useState } from "react";
import { FormGroup } from "./FormGroup";
import { usePutTracks } from "../../../Api/Auth/usePutTrack";
import { TPutData } from "../../../Types/Api/putTrack";

import "./AddTrack.scss";

export const TrackFrom: React.FC<{ id: string }> = (props: { id: string }) => {
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let postData: TPutData = {
    id: props.id,
    add: {
      originalName: name,
      link: url,
      platform: "youtube",
    },
  };
  const { putData, putError, putFetch } = usePutTracks(postData, "queue");

  function submit() {
    putFetch();
    if (putError) {
      console.log(putData);
    }
  }

  return (
    <>
      <div className="add-track" style={{ display: isOpen ? "flex" : "none" }}>
        <FormGroup submitFn={submit} className="add-track-form">
          <div
            className="close-btn"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </div>
          <input
            type="text"
            placeholder="name"
            onChange={({ target: { value } }) => {
              setName(value);
            }}
          />
          <input
            type="text"
            placeholder="url"
            onChange={({ target: { value } }) => {
              setUrl(value);
            }}
          />

          <button type="submit">Add</button>
        </FormGroup>
      </div>
      <div
        className="add-track-btn"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        +
      </div>
    </>
  );
};
