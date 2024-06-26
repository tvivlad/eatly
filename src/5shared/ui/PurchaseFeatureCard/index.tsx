import React, { FC } from 'react'
import classes from './styles.module.css'

interface PurchaseFeatureCardType {
  featureName: string
  featureIcon: string
  featureStatus: string
  featureEffect: number
  featurePercentage: number
  featureColor: string
}

export const PurchaseFeatureCard: FC<PurchaseFeatureCardType> = ({
  featureName,
  featureIcon,
  featureStatus,
  featureEffect,
  featurePercentage,
  featureColor,
}) => {
  return (
    <div className={classes.purchaseFeatureCard}>
      <div className={classes.feature}>
        <div className={classes.featureLeftSide}>
          <img src={featureIcon} alt='' />
          <div className={classes.featureNameAndStatus}>
            <div className={classes.featureName}>{featureName}</div>
            <div className={classes.featureStatus}>{featureStatus}</div>
          </div>
        </div>
        <div className={classes.featureEffect}>${featureEffect}</div>
      </div>
      <div
        style={{ backgroundColor: featureColor + '44' }}
        className={classes.progressBarBack}
      >
        <div
          style={{
            backgroundColor: featureColor,
            width: featurePercentage + '%',
          }}
          className={classes.progressBarFront}
        ></div>
      </div>
    </div>
  )
}
