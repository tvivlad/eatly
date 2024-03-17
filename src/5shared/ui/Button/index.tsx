import React, { FC } from 'react'
import classes from './style.module.css'
export enum buttonType {
  filled = 'filled',
  outlined = 'outlined',
}

interface ButtonProps {
  btWidth: string
  btHeight: string
  btType: buttonType
  children: React.ReactNode
}

export const Button: FC<ButtonProps> = ({
  btWidth,
  btHeight,
  btType,
  children,
}) => {
  return (
    <button
      style={{ width: btWidth, height: btHeight }}
      className={
        btType == buttonType.filled
          ? classes['filledBtn']
          : classes['outlinedBtn']
      }
    >
      {children}
    </button>
  )
}
