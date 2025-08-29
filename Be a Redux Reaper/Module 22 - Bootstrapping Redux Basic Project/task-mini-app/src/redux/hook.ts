import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppSelector: typeof useSelector =
  useSelector.withTypes<RootState>();
export const useAppDispatch = () => useDispatch<AppDispatch>();
