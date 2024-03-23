import React, { FC } from 'react'
import classes from './styles.module.css'

export enum statusType {
  OnTheWay = 'On the Way',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled',
}
interface OrderCardProps {
  orderName: string
  orderStatus: string
  orderDeliverTime: string
  orderPicture: string
}

export const OrderCard: FC<OrderCardProps> = ({
  orderName,
  orderStatus,
  orderDeliverTime,
  orderPicture,
}) => {
  return (
    <div
      className={
        orderStatus == statusType.OnTheWay
          ? classes['orderCardOnTheWay']
          : classes['orderCard']
      }
    >
      <img src={orderPicture} className={classes.orderPicture} alt='' />
      <div className={classes.orderCardInfo}>
        <div className={classes.orderName}>{orderName}</div>
        <div
          className={
            orderStatus == statusType.Cancelled
              ? classes['orderCancelledStatus']
              : classes['orderStatus']
          }
        >
          {orderStatus}
        </div>
      </div>
      <div className={classes.orderDeliverTime}>{orderDeliverTime}</div>
    </div>
  )
}
