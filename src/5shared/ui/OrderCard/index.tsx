import React, { FC } from 'react'
import classes from './styles.module.css'

interface OrderCardProps {
  orderName: string
  orderStatus: string
  orderDeliverTime: string
  orderPicture: string
  isActive: boolean
}

export const OrderCard: FC<OrderCardProps> = ({
  orderName,
  orderStatus,
  orderDeliverTime,
  orderPicture,
  isActive,
}) => {
  return (
    <div className={classes.orderCard}>
      <img src={orderPicture} className={classes.orderPicture} alt='' />
      <div className={classes.orderCardInfo}>
        <div className={classes.orderName}>{orderName}</div>
        <div className={classes.orderStatus}>{orderStatus}</div>
      </div>
      <div className={classes.orderDeliverTime}>{orderDeliverTime}</div>
    </div>
  )
}
