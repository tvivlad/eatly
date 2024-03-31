import React, { FC } from 'react'
import classes from './styles.module.css'
import { Comment } from '../../../5shared/ui/Comment'

import { Loader } from '../../../5shared/ui/Loader'
import { useAppSelector } from '../../../hooks/redux'

interface ArticleCommentListProps {
  isLoading: boolean
}

export const ArticleCommentList: FC<ArticleCommentListProps> = ({
  isLoading,
}) => {
  const { comments } = useAppSelector((state) => state.commentListReducer)

  console.log('Article comment List updated!')
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className={classes.commentList}>
      <div className={classes.comments}> Comments</div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          nik={comment.user.username}
          text={comment.body}
        />
      ))}
    </div>
  )
}
