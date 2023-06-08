'use client'
import Link from "next/link"
import FormComponents from "../components/formComponents"
import { FormEvent, useRef, useState } from "react"
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function Login() {

  const usernameInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const [username, setUsername] = useState(null);

  function handleSubmit(e: FormEvent){
    e.defaultPrevented

    axios.post("http://localhost:8080/login/loginvalidation", {
      username: usernameInputRef.current?.value,
      password: passwordInputRef.current?.value
    }).then((response) => {
      setUsername(response.data.username);
      console.log(response.data);
  })
  }
  if(username){
    router.push(`/${username}`)
  }
  return (
    <FormComponents submitFunction={handleSubmit}>
      <div className='flex flex-col gap-2'>
        <label >Username ou Email:</label>
        <input ref={usernameInputRef} className='bg-zinc-900 text-zinc-300' placeholder='Digite seu Email'/>
        <label>Senha:</label>
        <input ref={passwordInputRef} type="password" className='bg-zinc-900 text-zinc-300' placeholder='Digite sua Senha'/>
      </div>
      <div className="flex text-xs gap-3">
        <Link href="login/cadastro">
          <i className="hover:bg-zinc-900 rounded">Cadastre-se</i>
        </Link>
        <a href="#" className="hover:bg-zinc-900 rounded"><i>Recuperar senha</i></a>
      </div>
      <div>
        <button className="hover:bg-zinc-900 rounded w-28">Login</button>
        <Link href="/">
          <button className="hover:bg-zinc-900 rounded w-28">Voltar</button>
        </Link>  
      </div>
    </FormComponents>
  )
}
