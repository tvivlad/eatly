import React from 'react'
import classes from './style.module.css'
import { Comment } from '../../../5shared/ui/Comment'
import { commentAPI } from '../api/CommentService'
import { Loader } from '../../../5shared/ui/Loader'
export const ReviewList = () => {
  const { data, isLoading, error } = commentAPI.useFetchCommentsQuery(3)
  console.log('data comments:', data)
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className={classes.reviewList}>
      {error && (
        <div className={classes.commentMessage}>
          Не удалось загрузить комментарии...
        </div>
      )}
      {data?.comments.map((comment) => (
        <Comment nik={comment.user.username} text={comment.body} />
      ))}
    </div>
  )
}
