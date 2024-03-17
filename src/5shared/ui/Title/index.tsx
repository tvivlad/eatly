import React, { FC } from 'react'
import classes from './styles.module.css'

interface TitleProps {
  size: string
  weight: number
  letterSpace?: string
  lineHeight?: string
  children: React.ReactNode
}

export const Title: FC<TitleProps> = ({
  size,
  weight,
  letterSpace,
  lineHeight,
  children,
}) => {
  return (
    <div
      style={{
        fontSize: size,
        fontWeight: weight,
        letterSpacing: letterSpace,
        lineHeight: lineHeight,
      }}
      className={classes.titleFont}
    >
      {children}
    </div>
  )
}
