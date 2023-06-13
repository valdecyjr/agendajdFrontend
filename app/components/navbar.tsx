"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar(){

    const router = useRouter()

    function logout(){
        localStorage.clear()
        router.push("/")
    }

    const [user, setUser] = useState("")
    const [settings, setSettingsStats] = useState(false)

    useEffect (() => {
        if (user === "")
            setUser(JSON.parse(localStorage.getItem("user")))
    })


    function verifystats(){
        if (settings === false) setSettingsStats(true)
        else setSettingsStats(false)
    }

    return (
        <nav className="flex justift-between items-center w-screen md:h-[8vh] bg-white">
            <Link 
            href={`/${user.username}`}
            className="md:flex md:justify-center md:items-center md:w-[20%] md:p-5 md:bg-clip-text md:font-extrabold md:text-2xl md:text-transparent md:bg-gradient-to-tr md:from-violet-500 md:to-pink-500">
                <strong >AgendaJD</strong>
            </Link>
            <ul className="w-[60%] h-full flex justify-between items-center">
                <Link href="/lembretes" className="w-[33%] h-[80%] md:hover:bg-gray-300 flex justify-center items-center">
                    <li>lembretes</li>
                </Link>
                <Link href="/contatos" className="w-[33%] h-[80%] hover:bg-gray-300 flex justify-center items-center">
                    <li>contatos</li>
                </Link>
                <Link href="/eventos" className="w-[33%] h-[80%] hover:bg-gray-300 flex justify-center items-center">
                    <li>eventos</li>
                </Link>
            </ul>
            <button onClick= {verifystats} className="w-[20%]">
                <div className="w-[100%] p-5 h-full flex justify-end items-center gap-5">
                    <strong>{user.username}</strong>
                    <Image
                            className="rounded-full"
                            src="/imagens/perfil.jpg"
                            alt="sua foto de perfil"
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '30%', height: '50%' }}
                            priority={true}
                        />
                </div>
            </button>
            {
                settings &&
                <div className="md:absolute md:flex md:flex-col md:gap-5 md:bg-white md:p-5 md:right-0 md:top-[8vh] md:w-44 md:h-40">
                    <button className="flex w-full justify-center h-auto hover:bg-gray-300">Perfil</button>
                    <button className="flex w-full justify-center h-auto hover:bg-gray-300">Privacidade</button>
                    <button className="flex w-full justify-center h-auto hover:bg-gray-300" onClick={logout}>Sair</button>
                </div>
            }
        </nav>
    )
}