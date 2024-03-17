import React from 'react'
import classes from './styles.module.css'
import { Feature } from '../../../5shared/ui/Feature'
export const FeaturesList = () => {
  return (
    <div className={classes.featuresBlock}>
      <div className={classes.featuresList}>
        <Feature featureValue={'10K+'}>
          {' '}
          Satisfied Costumers All Great Over The World
        </Feature>
        <div
          style={{ borderRight: '1px solid #C5C5C5', margin: '0px 60px' }}
        ></div>
        <Feature featureValue={'4M'}>
          {' '}
          Healthy Dishes SoldIncluding Milk Shakes Smooth
        </Feature>
        <div
          style={{ borderRight: '1px solid #C5C5C5', margin: '0px 60px' }}
        ></div>
        <Feature featureValue={'99.99%'}>
          {' '}
          Reliable Customer SupportWe Provide Great Experiences
        </Feature>
      </div>
    </div>
  )
}
