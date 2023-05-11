export type TPlatform = "youtube";

export type TTrackEl = {
  originalName: string;
  link: string;
  platform: TPlatform;
};

export type TPutData = {
  id: string;
  add: TTrackEl;
};

export type TPutReturn = {
  msg?: string;
};
