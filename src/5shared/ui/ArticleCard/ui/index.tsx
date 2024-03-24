import React, { FC } from 'react'
import classes from './styles.module.css'
import star from '../../../assets/Star.png'
import LinesEllipsis from 'react-lines-ellipsis'
interface ArticleCardProps {
  title: string
  hashTag: string
  rating: number
  text: string
}

export const ArticleCard: FC<ArticleCardProps> = ({
  title,
  hashTag,
  rating,
  text,
}) => {
  return (
    <div className={classes.articleCard}>
      <div className={classes.title}>{title}</div>
      <div className={classes.hashAndTags}>
        <div className={classes.tags}>{hashTag}</div>
        <div className={classes.rating}>
          {rating} <img src={star} alt='' />
        </div>
      </div>
      <div className={classes.text}>
        <LinesEllipsis text={text} maxLine={3} />
      </div>
    </div>
  )
}
