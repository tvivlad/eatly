import React from 'react'
import classes from './styles.module.css'
import { Title } from '../../../5shared/ui/Title'
import { DishCard } from '../../../5shared/ui/DishCard'
import dishImage from './Mask Group1.png'

export const DishesTopList = () => {
  return (
    <div id='top' className={classes.dishesTopList}>
      <Title size={'45px'} weight={600} lineHeight={'26px'} letterSpace={'0px'}>
        Our Top <span style={{ color: '#6C5FBC' }}>Lunch</span>
      </Title>
      <div className={classes.dishesList}>
        <DishCard
          category={'Pizza'}
          name={'The Chicken King'}
          dishCookingTime={'24min'}
          rating={4.8}
          picture={dishImage}
        />
        <DishCard
          category={'Pizza'}
          name={'The Chicken King'}
          dishCookingTime={'24min'}
          rating={4.8}
          picture={dishImage}
        />
        <DishCard
          category={'Pizza'}
          name={'The Chicken King'}
          dishCookingTime={'24min'}
          rating={4.8}
          picture={dishImage}
        />
      </div>
    </div>
  )
}
