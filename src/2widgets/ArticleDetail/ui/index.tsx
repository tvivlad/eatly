import React, { FC } from 'react'
import classes from './styles.module.css'
import { UserInfo } from '../../../3features/UserInfo/ui'
import star from '../../../5shared/assets/Star.png'
import { articleAPI } from '../api/ArticleService'
import { Button, buttonType } from '../../../5shared/ui/Button'
import arrowForButton from '../../../2widgets/ArticleDetail/ui/Arrow.png'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../../5shared/ui/Loader'

interface ArticleDeatailProps {
  articleId: string
}

export const ArticleDetail: FC<ArticleDeatailProps> = ({ articleId }) => {
  const { data, isLoading, error } =
    articleAPI.useFetchArticleByIdQuery(articleId)

  const navigate = useNavigate()
  if (error) {
    navigate('/error')
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className={classes.articleDetail}>
      <div className={classes.articleTitle}>{data?.title}</div>
      <div className={classes.articleHeader}>
        <UserInfo userId={data?.userId || 1} />
        <div className={classes.ratingTags}>
          <div className={classes.rating}>
            {data?.reactions} <img src={star} alt='' />
          </div>
          <div className={classes.articleTags}>
            {'#' + data?.tags.join(', #')}
          </div>
        </div>
      </div>

      <div className={classes.text}>{data?.body}</div>
      <Button
        btHeight={'60px'}
        btWidth={'186px'}
        btType={buttonType.outlined}
        onClick={() => navigate('/blog')}
      >
        <div className={classes.arrowBtnText}>
          <img src={arrowForButton} alt='' className='' /> All Articles
        </div>
      </Button>
    </div>
  )
}
