import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postNavReducer from './reducers/PostNavSlice'
import commentListReducer from './reducers/CommentListSlice'
import { postAPI } from '../2widgets/ArticleList/api/PostService'
import { commentAPI } from '../3features/ReviewList/api/CommentService'
import { userAPI } from '../3features/UserInfo/api/UserService'
import { articleAPI } from '../2widgets/ArticleDetail/api/ArticleService'
import { articleCommentAPI } from '../3features/AddComment/api/ArticleCommentService'

const rootReducer = combineReducers({
  [commentAPI.reducerPath]: commentAPI.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
  postNavReducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [articleAPI.reducerPath]: articleAPI.reducer,
  [articleCommentAPI.reducerPath]: articleCommentAPI.reducer,
  commentListReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        postAPI.middleware,
        commentAPI.middleware,
        userAPI.middleware,
        articleAPI.middleware,
        articleCommentAPI.middleware
      ),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
