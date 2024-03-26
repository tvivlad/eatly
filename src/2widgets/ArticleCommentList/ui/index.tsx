import React, { FC } from 'react'
import classes from './styles.module.css'
import { Comment } from '../../../5shared/ui/Comment'
import { articleCommentAPI } from '../../../services/ArticleCommentService'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../../5shared/ui/Loader'

interface ArticleCommentListProps {
  articleId: string
}

export const ArticleCommentList: FC<ArticleCommentListProps> = ({
  articleId,
}) => {
  const { data, isLoading, error } =
    articleCommentAPI.useFetchArticleCommentsQuery(articleId)

  const navigate = useNavigate()
  if (error) {
    navigate('/error')
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className={classes.commentList}>
      <div className={classes.comments}> Comments</div>
      {data?.comments.map((comment) => (
        <Comment nik={comment.user.username} text={comment.body} />
      ))}
    </div>
  )
}
