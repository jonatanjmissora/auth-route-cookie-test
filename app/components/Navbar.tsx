"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getUser, logout } from '../services/user.services'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter()
const [isUser, setIsUser] = useState(false)
useEffect(() => {
    (async() => {
        console.log("useeffect")
        const {error, user} = await getUser()
        console.log("NAVBAR", {error, user})
        if(user) setIsUser(true)
        
    })()
}, [])

const handleClick = async() => {
    await logout()
    router.push("/")
}

  return (
    <div className='flex justify-between text-white'>

    <Link href="/dashboard">DASHBOARD</Link>
    {isUser && <button onClick={handleClick} >Log out</button>}
    </div>
  )
}
