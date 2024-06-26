import React from 'react'
import { OrderCard } from '../../../5shared/ui/OrderCard'
import image from '../../../5shared/assets/Image1.png'
import illustration2 from '../Illustration 02.png'
import illustration1 from '../Illustration 01.png'
import food from '../Food.png'
import graph from '../Graph.png'
import arrow from '../Arrow 01.png'

import classes from './styles.module.css'
export const Hero = () => {
  return (
    <div className={classes.hero}>
      <img className={classes.illustration2} src={illustration2} alt='' />
      <img className={classes.graph} src={graph} alt='' />
      <img className={classes.arrow} src={arrow} alt='' />
      <img className={classes.illustration1} src={illustration1} alt='' />
      <div className={classes.cardContainer}>
        <OrderCard
          orderName={'Chicken Hell'}
          orderStatus={'On the Way'}
          orderDeliverTime={'3:09 PM'}
          orderPicture={image}
        />
      </div>
      <img className={classes.food} src={food} alt='' />
    </div>
  )
}
