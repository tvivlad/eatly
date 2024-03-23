import React from 'react'
import classes from './styles.module.css'
import { Title } from '../../../5shared/ui/Title'
import { OrderCard } from '../../../5shared/ui/OrderCard'
import image from './Image1.png'
import image2 from './Image2.png'
import image3 from './Image3.png'
export const PurchaseText = () => {
  const orderList = [
    {
      id: 1,
      orderName: 'Chicken Hell',
      orderStatus: 'On the Way',
      orderDeliverTime: '3:09 PM',
      orderPicture: image,
    },
    {
      id: 2,
      orderName: 'Swe Dish',
      orderStatus: 'Delivered',
      orderDeliverTime: 'Yesterday',
      orderPicture: image3,
    },
    {
      id: 3,
      orderName: 'Fish Hell Veg',
      orderStatus: 'Cancelled',
      orderDeliverTime: 'Yesterday',
      orderPicture: image2,
    },
  ]
  return (
    <div className={classes.purchaseText}>
      <div className={classes.purchaseTextTitle}>
        <Title
          size={'50px'}
          weight={700}
          lineHeight={'58px'}
          letterSpace={'0px'}
        >
          Control <span style={{ color: '#6C5FBC' }}>Purchases</span> Via
          Dashboard
        </Title>
      </div>
      <div className={classes.orderList}>
        {orderList.map((order) => (
          <OrderCard
            key={order.id}
            orderName={order.orderName}
            orderStatus={order.orderStatus}
            orderDeliverTime={order.orderDeliverTime}
            orderPicture={order.orderPicture}
          />
        ))}{' '}
      </div>
    </div>
  )
}
