import { useQuery } from "react-query";
import { TGetTracksData } from "../../Types/Api/getTrack";
import { getTracks } from "../../Queries/getTracks/getTracks";

export const useTracks = (
  postData: TGetTracksData,
  type: "library" | "queue"
) => {
  const { data, error, isLoading, isRefetching, refetch } = useQuery({
    queryKey: "getTracks",
    queryFn: () => getTracks(postData, type),
    retry: false,
    enabled: false,
  });

  return {
    tracksData: data,
    tracksError: error,
    tracksLoading: isLoading || isRefetching,
    tracksFetch: refetch,
  };
};
