import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostNavState {
  currentPage: number
  totalPages: number
  limit: number
}

const initialState: PostNavState = {
  currentPage: 1,
  totalPages: 1,
  limit: 12,
}

export const postNavSlice = createSlice({
  name: 'nav',
  initialState: initialState,
  reducers: {
    nextPage(state, action: PayloadAction) {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1
      }
    },
    previousPage(state, action: PayloadAction) {
      if (state.currentPage > 1) {
        state.currentPage -= 1
      }
    },
    setTotalPageNumber(state, action: PayloadAction<number>) {
      state.totalPages = Math.ceil(action.payload / state.limit)
    },
  },
})

export default postNavSlice.reducer
