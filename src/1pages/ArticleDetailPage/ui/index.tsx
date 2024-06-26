import React, { FC } from 'react'
import { Header } from '../../../2widgets/Header/ui'
import { Footer } from '../../../2widgets/Footer/ui'
import classes from './styles.module.css'
import { ArticleCommentList } from '../../../2widgets/ArticleCommentList/ui'
import { ArticleDetail } from '../../../2widgets/ArticleDetail/ui'
import { useParams } from 'react-router-dom'

export const ArticleDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className={classes.articleDetailPage}>
      ArticleDetailPage
      <Header />
      <ArticleDetail articleId={id ? id : '1'} />
      <ArticleCommentList articleId={id ? id : '1'} />
      <Footer />
    </div>
  )
}
