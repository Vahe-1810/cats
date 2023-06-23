import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ICatImage, ICategories } from "../../types/types";

interface ICats {
  categories: ICategories[];
  catImages: ICatImage[];
}

const initialState: ICats = {
  categories: [],
  catImages: [],
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCategories(state, { payload }) {
      state.categories = payload;
    },
    setCats(state, { payload }) {
      if (payload.shouldUpdate) {
        state.catImages = payload.result;
      } else {
        state.catImages = [...state.catImages, ...payload.result];
      }
    },
  },
});

export const { setCategories, setCats } = catsSlice.actions;
export const catsState = (state: RootState) => state.cats;
export default catsSlice.reducer;
