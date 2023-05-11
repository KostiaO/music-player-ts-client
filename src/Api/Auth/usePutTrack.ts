import { useQuery } from "react-query";
import { TPutData } from "../../Types/Api/putTrack";
import { putTrack } from "../../Queries/Tracks/putTrack";

export const usePutTracks = (postData: TPutData, type: "library" | "queue") => {
  const { data, error, isLoading, isRefetching, refetch } = useQuery({
    queryKey: "getTracks",
    queryFn: () => putTrack(postData, type),
    retry: false,
    enabled: false,
  });

  return {
    putData: data,
    putError: error,
    putLoading: isLoading || isRefetching,
    putFetch: refetch,
  };
};
