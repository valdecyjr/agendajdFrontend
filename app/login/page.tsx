'use client'
import Link from "next/link"
import FormComponents from "../components/formComponents"
import { FormEvent, useRef, useState } from "react"
import axios from "axios";
import { useRouter } from 'next/navigation';
import { api } from "../api";

export default function Login() {

  const usernameInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const [username, setUsername] = useState(null);

  function handleSubmit(e: FormEvent){
    e.defaultPrevented

    api.post("/login/loginvalidation", {
      username: usernameInputRef.current?.value,
      password: passwordInputRef.current?.value
    }).then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data))
      setUsername(response.data.username);
  })
  }
  if(username){
    router.push(`/${username}`)
  }
  return (
    <FormComponents submitFunction={handleSubmit}>
      <div className='flex flex-col gap-2'>
        <label >Username ou E-mail:</label>
        <input ref={usernameInputRef} className='bg-zinc-900 text-zinc-300' placeholder='Digite seu Email'/>
        <label>Senha:</label>
        <input ref={passwordInputRef} type="password" className='bg-zinc-900 text-zinc-300' placeholder='Digite sua Senha'/>
      </div>
      <div className="md:flex md:text-xs md:gap-3 md:justify-start md:items-start">
        <a href="/login/cadastro" className="md:flex md:hover:bg-zinc-900 md:rounded md:w-28 md:h-6 md:justify-center md:items-center"><i>cadastro</i></a>
        <a href="#" className="md:flex md:hover:bg-zinc-900 md:rounded md:w-28 md:h-6 md:justify-center md:items-center"><i>Recuperar senha</i></a>
      </div>
      <div className="m-5">
        <button className="hover:bg-zinc-900 rounded w-28">Login</button>
      </div>
    </FormComponents>
  )
}
