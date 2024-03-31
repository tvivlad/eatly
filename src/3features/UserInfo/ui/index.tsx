import React, { FC } from 'react'
import classes from './styles.module.css'
import { userAPI } from '../api/UserService'
import { Loader } from '../../../5shared/ui/Loader'
interface userIdProps {
  userId: number
}

export const UserInfo: FC<userIdProps> = ({ userId }) => {
  const { data, isLoading } = userAPI.useFetchUserByIdQuery(userId)
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className={classes.userInfo}>
      <img src={data?.image} className={classes.userImage} />
      <div>
        <div className={classes.writtenBy}>Written By</div>
        <div className={classes.firstLastName}>
          {data?.firstName} {data?.lastName}
        </div>
      </div>
    </div>
  )
}
