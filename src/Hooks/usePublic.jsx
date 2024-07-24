import axios from "axios";

const usePublic = () => {
  const publicAxios = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
  });

  return publicAxios;
};

export default usePublic;
