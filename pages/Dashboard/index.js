import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
const index = () => {
    const {user}=useUser();
  return (
    console.log(user)
  )
}

export default index