import { useQuery } from "@tanstack/react-query";
import usePublic from "./usePublic";

const useCartsData = () => {
  const publicAxios = usePublic();

  const { data: cartsData = [], isLoading, refetch} = useQuery({
    queryKey: ["cartsData"],
    queryFn: async () => {
      const res = await publicAxios.get("/cart");
      return res.data;
    },
  });

  return [cartsData, isLoading, refetch];
};

export default useCartsData;
