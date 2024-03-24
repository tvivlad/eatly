import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postNavReducer from './reducers/PostNavSlice'
import { postAPI } from '../services/PostService'
import { commentAPI } from '../services/CommentService'
import { userAPI } from '../services/UserService'
import { articleAPI } from '../services/ArticleService'

const rootReducer = combineReducers({
  [commentAPI.reducerPath]: commentAPI.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
  postNavReducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [articleAPI.reducerPath]: articleAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        postAPI.middleware,
        commentAPI.middleware,
        userAPI.middleware,
        articleAPI.middleware
      ),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
