import React, { FC } from 'react'
import classes from './styles.module.css'
import { UserInfo } from '../../../3features/UserInfo/ui'
import star from '../../../5shared/assets/Star.png'
import { articleAPI } from '../../../services/ArticleService'

interface ArticleDeatailProps {
  articleId: number
}

export const ArticleDetail: FC<ArticleDeatailProps> = ({ articleId }) => {
  const { data } = articleAPI.useFetchArticleByIdQuery(articleId)
  return (
    <div className={classes.articleDetail}>
      <div className={classes.articleTitle}>{data?.title}</div>
      <div className={classes.articleHeader}>
        <UserInfo userId={data?.userId || 1} />
        <div className={classes.rating}>
          {data?.reactions} <img src={star} alt='' />
        </div>
      </div>
    </div>
  )
}
