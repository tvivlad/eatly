import React, { FC } from 'react'
import classes from './styles.module.css'
import star from '../../../assets/Star.png'
import LinesEllipsis from 'react-lines-ellipsis'
import { useNavigate } from 'react-router-dom'
interface ArticleCardProps {
  id: number
  title: string
  hashTag: string
  rating: number
  text: string
}

export const ArticleCard: FC<ArticleCardProps> = ({
  id,
  title,
  hashTag,
  rating,
  text,
}) => {
  const navigate = useNavigate()

  return (
    <div
      className={classes.articleCard}
      onClick={() => {
        navigate(`/blog/${id}`)

        alert('Id карточки :' + id)
      }}
    >
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
