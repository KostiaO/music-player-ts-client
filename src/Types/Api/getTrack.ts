export interface TGetTracksData {
  id: string;
  start?: number;
  end?: number;
}

export interface TGetTracksReturn {
  library?: [
    {
      _id: string;
      originalName: string;
      platform: string;
      link: string;
    }
  ];
  queue?: [
    {
      _id: string;
      originalName: string;
      platform: string;
      link: string;
    }
  ];
}

export interface TTrackEl {
  _id: string;
  originalName: string;
  platform: string;
  link: string;
}
