import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPostList } from '../models/IPost'

export const postAPI = createApi({
  reducerPath: 'PostAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    fetchPosts: build.query<IPostList, number>({
      query: (postLimit: number = 12) => ({
        url: '/posts',
        params: {
          limit: 12,
          skip: postLimit,
        },
      }),
    }),
  }),
})
