import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../model/IUser'

export const userAPI = createApi({
  reducerPath: 'UserAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    fetchUserById: build.query<IUser, number>({
      query: (userId: number) => ({
        url: `/users/${userId}`,
      }),
    }),
  }),
})
