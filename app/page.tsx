"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const [user, setUser] = useState("")
  const router = useRouter()

  useEffect(() =>{
    if (user === "")
      setUser(JSON.parse(localStorage.getItem("user")))
    console.log(user)
    if (user === null)
      router.push("/login")
    else 
      router.push(`/${user.username}`)
  })
 
}
