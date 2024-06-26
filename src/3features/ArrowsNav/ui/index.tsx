import React from 'react'
import classes from './styles.module.css'
import { ReactComponent as Forward } from '../../../5shared/assets/forward.svg'
import { ReactComponent as Backward } from '../../../5shared/assets/backward.svg'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { postNavSlice } from '../../../store/reducers/PostNavSlice'
export const ArrowsNav = () => {
  const { currentPage, totalPages } = useAppSelector(
    (state) => state.postNavReducer
  )
  const dispatch = useAppDispatch()
  const { nextPage, previousPage } = postNavSlice.actions

  return (
    <div className={classes.arrowBlock}>
      <Backward
        className={
          currentPage == 1 ? classes['arrowDisabled'] : classes['arrowEnabled']
        }
        onClick={() => dispatch(previousPage())}
      />
      <Forward
        className={
          currentPage == totalPages
            ? classes['arrowDisabled']
            : classes['arrowEnabled']
        }
        onClick={() => dispatch(nextPage())}
      />
    </div>
  )
}
