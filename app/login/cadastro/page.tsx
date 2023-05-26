'use client'

import FormComponents from "@/app/components/formComponents"
import Link from "next/link"
import { FormEvent, useRef } from "react"
import axios from "axios"

export default function Cadastro(){

    const usernameRef = useRef<HTMLInputElement>(null)
    const nomeCompletoRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)


    function handleSubmit(e: FormEvent){
        e.preventDefault()
        let valueNull = ""
        if (usernameRef.current?.value === "") valueNull = valueNull + "Login, " 
        if (nomeCompletoRef.current?.value === "") valueNull = valueNull +  "Nome Completo, "
        if (emailRef.current?.value === "") valueNull = valueNull +  "email, "
        if (passwordRef.current?.value === "") valueNull = valueNull + "senha"
        if (valueNull !== "") window.alert(`Precisa preecher esses campos: ${valueNull}`)
        else{
            axios.post("http://localhost:8080/login",{
                "username": `${usernameRef.current?.value}`,
                "fullname": `${nomeCompletoRef.current?.value}`,
                "email": `${emailRef.current?.value}`,
                "password": `%${passwordRef.current?.value}`
            })
        }
    }

    return (
        <FormComponents submitFunction={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label>Login:</label>
                    <input type="text" ref={usernameRef} className='bg-zinc-900 text-zinc-300' placeholder='Digite seu Usuario'/>
                    <label>Nome Completo:</label>
                    <input type="text" ref={nomeCompletoRef} className='bg-zinc-900 text-zinc-300' placeholder='Digite seu Nome Completo'/>
                    <label>Email:</label>
                    <input type="email" ref={emailRef} className='bg-zinc-900 text-zinc-300' placeholder='Digite seu Email'/>
                    <label>Senha:</label>
                    <input type="password" ref={passwordRef} className='bg-zinc-900 text-zinc-300' placeholder='Digite sua Senha'/>
                </div>
                <div>
                    <Link href="/login">
                        <button className="hover:bg-zinc-900 rounded w-28">Voltar</button>
                    </Link>  
                    <input type="submit" value="Cadastrar" className="hover:bg-zinc-900 rounded w-28"/>
                </div>
        </FormComponents>
    )
}