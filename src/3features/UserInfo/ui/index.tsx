import React, { FC } from 'react'
import classes from './styles.module.css'
import { userAPI } from '../../../services/UserService'
interface userIdProps {
  userId: number
}

export const UserInfo: FC<userIdProps> = ({ userId }) => {
  const { data } = userAPI.useFetchUserByIdQuery(userId)
  console.log('user data :', data)
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
