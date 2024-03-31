import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IComment } from '../../3features/AddComment/model/IComment'

interface CommentListState {
  comments: IComment[]
}

const initialState: CommentListState = {
  comments: [],
}

export const commentSlice = createSlice({
  name: 'commentList',
  initialState: initialState,
  reducers: {
    setComments(state, action: PayloadAction<IComment[]>) {
      state.comments = action.payload

      console.log('comments in store :', state.comments)
    },
    addComment(state, action: PayloadAction<IComment>) {
      state.comments = [...state.comments, action.payload]
      console.log('comments in store (addComment):', state.comments)
    },

    // nextPage(state, action: PayloadAction) {
    //   if (state.currentPage < state.totalPages) {
    //     state.currentPage += 1
    //   }
    // },
    // previousPage(state, action: PayloadAction) {
    //   if (state.currentPage > 1) {
    //     state.currentPage -= 1
    //   }
    // },
    // setTotalPageNumber(state, action: PayloadAction<number>) {
    //   state.totalPages = Math.ceil(action.payload / state.limit)
    // },
  },
})

export default commentSlice.reducer
