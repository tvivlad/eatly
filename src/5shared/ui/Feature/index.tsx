import React, { FC } from 'react'
import classes from './styles.module.css'
interface FeatureProps {
  featureValue: string
  children: React.ReactNode
}

export const Feature: FC<FeatureProps> = ({ featureValue, children }) => {
  return (
    <div className={classes.feature}>
      <div className={classes.featureValue}>{featureValue}</div>
      <div className={classes.featureText}>{children}</div>
    </div>
  )
}
