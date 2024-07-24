import { useQuery } from "@tanstack/react-query";
import usePublic from "./usePublic";

const useProducts = () => {
  const publicAxios = usePublic();

  const { data: allProducts = [], isLoading, refetch } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await publicAxios.get("/products");
      
      return res.data;
    },
  });
  return [allProducts, isLoading, refetch];
};

export default useProducts;
