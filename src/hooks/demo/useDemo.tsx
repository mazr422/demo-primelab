import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const useIsOverClickedNumber = () => {
  const { isOver } = useSelector((state: RootState) => state.demo);
  return isOver;
};
