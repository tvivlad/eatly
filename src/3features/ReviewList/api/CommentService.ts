import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICommentList } from '../../AddComment/model/IComment'

export const commentAPI = createApi({
  reducerPath: 'CommentAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    fetchComments: build.query<ICommentList, number>({
      query: (Limit: number = 3) => ({
        url: '/comments',
        params: {
          limit: Limit,
        },
      }),
    }),
  }),
})
