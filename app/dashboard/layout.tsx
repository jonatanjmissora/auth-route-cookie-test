"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getUser } from "../services/user.services"

export default function DasboardLayout({children}) {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)
  useEffect(() => {
    (async () => {
        const {user, error} = await getUser()
        if(error) {
            router.push("/")
            return
        }
        setIsAuthorized(true)
    })()
  } ,[router])
  
  if(!isAuthorized) return <h1>Loading...</h1>

    return (
    <div className="bg-gray-500 text-black w-screen h-screen flex justify-center items-center">
        {children}
    </div>
  )
}