import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IComment, ICommentList } from '../model/IComment'
import { INewComment } from '../model/INewComment'

export const articleCommentAPI = createApi({
  reducerPath: 'ArticleCommentAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    fetchArticleComments: build.query<ICommentList, string>({
      query: (postId: string) => ({
        url: `/comments/post/${postId}`,
      }),
    }),
    createComment: build.mutation<IComment, INewComment>({
      query: (comment) => ({
        url: '/comments/add',
        method: 'POST',
        body: comment,
      }),
    }),
  }),
})
