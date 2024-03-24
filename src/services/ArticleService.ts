import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle } from '../models/IArticle'

export const articleAPI = createApi({
  reducerPath: 'ArticleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    fetchArticleById: build.query<IArticle, number>({
      query: (articleId: number) => ({
        url: `/posts/${articleId}`,
      }),
    }),
  }),
})
