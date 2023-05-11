import { useQuery } from "react-query";
import { player } from "../../Queries/Tracks/player";

export const usePlayer = (
  postData: { id: string },
  type: "start" | "skip" | "stop"
) => {
  const { data, error, isLoading, isRefetching, refetch } = useQuery({
    queryKey: "player",
    queryFn: () => player(postData, type),
    retry: false,
    enabled: false,
  });

  return {
    playerData: data,
    playerError: error,
    playerLoading: isLoading || isRefetching,
    playerFetch: refetch,
  };
};
