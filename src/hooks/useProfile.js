import { useContext } from "react";
import { ProfileContext } from "../context";

const useProfile = () => {
  return useContext(ProfileContext); // use profile context as Context API
};

export default useProfile;
