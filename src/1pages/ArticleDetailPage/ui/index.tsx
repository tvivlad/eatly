import React, { FC } from 'react'
import { Header } from '../../../2widgets/Header/ui'
import { Footer } from '../../../2widgets/Footer/ui'
import classes from './styles.module.css'
import { ArticleCommentList } from '../../../2widgets/ArticleCommentList/ui'
import { ArticleDetail } from '../../../2widgets/ArticleDetail/ui'
import { useNavigate, useParams } from 'react-router-dom'
import { AddCommentBlock } from '../../../2widgets/AddCommentBlock/ui'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { commentSlice } from '../../../store/reducers/CommentListSlice'
import { articleCommentAPI } from '../../../3features/AddComment/api/ArticleCommentService'

// В данном компоненте устанавливаем в стор список комментариев с сервера
// Добавление комментария, а значит и изменение стора происходит на следующем слое, так же как и отображение измененного стора
export const ArticleDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data, isLoading, error } =
    articleCommentAPI.useFetchArticleCommentsQuery(id || '') // id - обработать страница не найдена
  const dispatch = useAppDispatch()
  const { setComments } = commentSlice.actions

  if (data) {
    dispatch(setComments(data?.comments))
  }

  if (error) {
    navigate('/error')
  }

  return (
    <div className={classes.articleDetailPage}>
      <Header />
      <ArticleDetail articleId={id || ''} />
      <ArticleCommentList isLoading={isLoading} />
      <AddCommentBlock postId={id || ''} />
      <Footer />
    </div>
  )
}
