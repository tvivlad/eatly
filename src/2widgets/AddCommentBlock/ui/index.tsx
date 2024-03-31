import React, { FC } from 'react'
import { Title } from '../../../5shared/ui/Title'
import { AddComment } from '../../../3features/AddComment/ui'
import classes from './styles.module.css'

interface AddCommentBlockProps {
  postId: string
}

export const AddCommentBlock: FC<AddCommentBlockProps> = ({ postId }) => {
  return (
    <div className={classes.addCommentBlock}>
      <Title size={'40px'} weight={600} lineHeight={'55px'} letterSpace={'0px'}>
        <div className={classes.titleAlign}>
          Add <span className='violetForHeader'>comment</span>
        </div>
      </Title>
      <AddComment postId={postId} />
    </div>
  )
}
