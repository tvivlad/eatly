import React, { FC } from 'react'
import classes from './styles.module.css'
import star from '../../../5shared/assets/Star.png'
import LinesEllipsis from 'react-lines-ellipsis'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '../../../3features/UserInfo/ui'
interface ArticleCardProps {
  id: number
  title: string
  hashTag: string
  rating: number
  text: string
  userId: number
}

export const ArticleCard: FC<ArticleCardProps> = ({
  id,
  title,
  hashTag,
  rating,
  text,
  userId,
}) => {
  const navigate = useNavigate()

  return (
    <div
      className={classes.articleCard}
      onClick={() => {
        navigate(`/blog/${id}`)
      }}
    >
      <div className={classes.title}>{title}</div>
      <div className={classes.hashAndTags}>
        <div className={classes.tags}>
          <UserInfo userId={userId} />
        </div>
        <div className={classes.rating}>
          {rating} <img src={star} alt='' />
        </div>
      </div>
      <div className={classes.tags}>{hashTag}</div>
      <div className={classes.text}>
        <LinesEllipsis text={text} maxLine={3} />
      </div>
    </div>
  )
}
