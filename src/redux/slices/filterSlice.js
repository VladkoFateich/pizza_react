import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter", // название слайса
  currentPage: 1,
  initialState, // начальное состояние
  reducers: {
    setCategoryId(state, action) {
      // перовый метод который сохраняет id категорий
state.categoryId = action.payload;
    },
    setSort(state, action) {
  state.sort = action.payload;
      },
      setCurrentPage(state, action) {
        state.currentPage = action.payload;
            },
  },
});

export const {setCategoryId, setSort, setCurrentPage} = filterSlice.actions  //actions хранит обьект с методами
export default filterSlice.reducer
