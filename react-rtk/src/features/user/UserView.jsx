import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
 const {loading, users, error} = useSelector(state => state.user)
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(fetchUsers());
 }, [])

 if(loading) return <div>Loading...</div>

 if(error) return <div>{error}</div>

  return (
    <div>
     <h2>List of users</h2>  
        {
          users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }    
    </div>
  )
}