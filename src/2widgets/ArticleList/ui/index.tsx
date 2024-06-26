import React from 'react'
import classes from './styles.module.css'
import { postAPI } from '../api/PostService'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { postNavSlice } from '../../../store/reducers/PostNavSlice'
import { Loader } from '../../../5shared/ui/Loader'
import { ArticleCard } from '../../../4entities/ArticleCard/ui'
import { useNavigate } from 'react-router-dom'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
export const ArticleList = () => {
  const navigate = useNavigate()
  const { limit, currentPage } = useAppSelector((state) => state.postNavReducer)
  const { data, isLoading, isFetching, error } = postAPI.useFetchPostsQuery(
    limit * (currentPage - 1)
  )

  const dispatch = useAppDispatch()
  const { setTotalPageNumber } = postNavSlice.actions
  if (data) {
    dispatch(setTotalPageNumber(data.total))
  }

  if (isFetching) {
    return <Loader />
  }

  if (error) {
    if ((error as FetchBaseQueryError).data == 'error not found!') {
      navigate('/error')
    }
  }

  return (
    <div className={classes.articleList}>
      {error && (
        <div className={classes.errorMessage}>
          {' '}
          Посты не удалось загрузить...
        </div>
      )}
      {data &&
        data.posts.map((post) => (
          <ArticleCard
            key={post.id}
            id={post.id}
            title={post.title}
            hashTag={post.tags.join(' #')}
            rating={post.reactions}
            text={post.body}
            userId={post.userId}
          />
        ))}
    </div>
  )
}
