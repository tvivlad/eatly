import React from 'react'
import classes from './styles.module.css'
import { ReviewList } from '../../../3features/ReviewList/ui'
import { Title } from '../../../5shared/ui/Title'
export const Review = () => {
  return (
    <div className={classes.review}>
      <Title size={'45px'} weight={600} lineHeight={'26px'} letterSpace={'0px'}>
        <span style={{ color: '#6C5FBC' }}>Customer</span> Say
      </Title>
      <ReviewList />
    </div>
  )
}
