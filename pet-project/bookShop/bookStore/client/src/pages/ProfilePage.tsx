import React from 'react'
import { GetOneUser } from '../api/users/getOneUser'
import { IUser } from '../model/model'

export const ProfilePage = () => {
    const [user, setUser] = React.useState<IUser>({userId: '', password: '', username: ''})
    // let book: IUser;
  
    const id = window.location.pathname.slice(window.location.pathname.indexOf('profile/') + 8, window.location.pathname.length)
  
    React.useEffect(() => {
        setUser(GetOneUser(id))
    }, [])
  return (
    <div>ProfilePage</div>
  )
}
