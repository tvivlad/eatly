import React, { FC, useState } from 'react'
import classes from './styles.module.css'
import { Button, buttonType } from '../../../5shared/ui/Button'
import { articleCommentAPI } from '../api/ArticleCommentService'
import { INewComment } from '../model/INewComment'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { commentSlice } from '../../../store/reducers/CommentListSlice'
import { Loader } from '../../../5shared/ui/Loader'

interface AddCommentProps {
  postId: string
}

export const AddComment: FC<AddCommentProps> = ({ postId }) => {
  const [comment, setComment] = useState('')
  const [createComment, { data, isLoading, error }] =
    articleCommentAPI.useCreateCommentMutation()

  const dispatch = useAppDispatch()
  const { addComment } = commentSlice.actions

  const createNewComment = async () => {
    const newComment = {
      body: comment,
      postId: postId,
      userId: '5',
    }
    try {
      const response = await createComment(newComment as INewComment).unwrap()
      dispatch(addComment(response))
    } catch (e) {
      alert('Ошибка: ' + e)
    }
  }

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    alert('Ошибка' + error)
  }
  return (
    <div>
      <textarea
        className={classes.area}
        placeholder={'ENTER YOUR COMMENT'}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      ></textarea>
      <Button
        btHeight={'60px'}
        btWidth={'367px'}
        btType={buttonType.filled}
        onClick={createNewComment}
      >
        send
      </Button>
    </div>
  )
}
