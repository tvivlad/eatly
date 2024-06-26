import React, { FC } from 'react'
import classes from './style.module.css'
import star from '../../assets/Star.png'
interface DishCardProps {
  category: string
  name: string
  dishCookingTime: string
  rating: number
  picture: string
}

export const DishCard: FC<DishCardProps> = ({
  category,
  name,
  dishCookingTime,
  rating,
  picture,
}) => {
  return (
    <div className={classes.dishCard}>
      <img src={picture} className={classes.dishPict} alt='' />
      <div className={classes.category}>{category}</div>
      <div className={classes.name}>{name}</div>
      <div className={classes.time}>
        {dishCookingTime} • <img src={star} className={classes.star} alt='' />{' '}
        {rating}
      </div>
    </div>
  )
}
