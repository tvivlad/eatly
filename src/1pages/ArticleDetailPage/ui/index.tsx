import React from 'react'
import { Header } from '../../../2widgets/Header/ui'
import { Footer } from '../../../2widgets/Footer/ui'
import classes from './styles.module.css'
import { ArticleCommentList } from '../../../2widgets/ArticleCommentList/ui'
import { ArticleDetail } from '../../../2widgets/ArticleDetail/ui'
export const ArticleDetailPage = () => {
  return (
    <div className={classes.articleDetailPage}>
      ArticleDetailPage
      <Header />
      <ArticleDetail articleId={1} />
      <ArticleCommentList />
      <Footer />
    </div>
  )
}
