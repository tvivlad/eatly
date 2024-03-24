import React from 'react'
import classes from './styles.module.css'
import { ArticleCard } from '../../../5shared/ui/ArticleCard/ui'
import { postAPI } from '../../../services/PostService'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { postNavSlice } from '../../../store/reducers/PostNavSlice'
export const ArticleList = () => {
  const { limit, currentPage } = useAppSelector((state) => state.postNavReducer)
  const { data, isLoading, error } = postAPI.useFetchPostsQuery(
    limit * (currentPage - 1)
  )

  const dispatch = useAppDispatch()
  const { setTotalPageNumber } = postNavSlice.actions
  if (data) {
    dispatch(setTotalPageNumber(data.total))
  }
  console.log('data :', data)

  if (isLoading) {
    return <div className={classes.loader}></div>
  }
  return (
    <div className={classes.articleList}>
      {data &&
        data.posts.map((post) => (
          <ArticleCard
            key={post.id}
            title={post.title}
            hashTag={post.tags.join(' #')}
            rating={post.reactions}
            text={post.body}
          />
        ))}
    </div>
  )
}
