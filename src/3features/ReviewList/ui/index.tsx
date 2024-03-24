import React from 'react'
import classes from './style.module.css'
import { Comment } from '../../../5shared/ui/Comment'
import { commentAPI } from '../../../services/CommentService'
export const ReviewList = () => {
  const { data, isLoading, error } = commentAPI.useFetchCommentsQuery(3)
  console.log('data comments:', data)
  if (isLoading) {
    return <div className={classes.loader}></div>
  }
  return (
    <div className={classes.reviewList}>
      {data?.comments.map((comment) => (
        <Comment nik={comment.user.username} text={comment.body} />
      ))}
    </div>
  )
}
