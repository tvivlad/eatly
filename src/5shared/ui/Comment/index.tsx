import React, { FC } from 'react'
import classes from './style.module.css'
import pathPic from '../../assets/Path.png'

interface CommentProps {
  nik: string
  text: string
}

export const Comment: FC<CommentProps> = ({ nik, text }) => {
  return (
    <div className={classes.comment}>
      <div className={classes.group}>
        <div className={classes.nik}>{nik}</div>
        <img src={pathPic} alt='' />
      </div>
      <div className={classes.commentText}>{text}</div>
    </div>
  )
}
