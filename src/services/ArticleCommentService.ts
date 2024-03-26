import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICommentList } from '../models/IComment'

export const articleCommentAPI = createApi({
  reducerPath: 'ArticleCommentAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    fetchArticleComments: build.query<ICommentList, string>({
      query: (postId: string) => ({
        url: `/comments/post/${postId}`,
      }),
    }),
  }),
})
