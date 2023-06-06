import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function Navbar(imageUrl: any){

    console.log(imageUrl)

    return (
        <nav className="flex justift-between items-center w-screen md:h-[8vh] bg-white">
            <strong 
            className="md:flex md:justify-center md:items-center md:w-[20%] md:p-5 md:bg-clip-text md:font-extrabold md:text-2xl md:text-transparent md:bg-gradient-to-tr md:from-violet-500 md:to-pink-500"
            >
                AgendaJD
            </strong>
            <ul className="w-[60%] h-full flex justify-between items-center">
                <Link href="/" className="w-[33%] h-[80%] hover:bg-gray-300 flex justify-center items-center">
                    <li>mensagens</li>
                </Link>
                <Link href="/" className="w-[33%] h-[80%] hover:bg-gray-300 flex justify-center items-center">
                    <li>contatos</li>
                </Link>
                <Link href="/" className="w-[33%] h-[80%] hover:bg-gray-300 flex justify-center items-center">
                    <li>search</li>
                </Link>
            </ul>
            <div className="w-[20%] p-5 h-full flex justify-end items-center gap-5">
                <strong>name</strong>
                <Link href="/" className="flex w-auto h-auto justify-center items-center">
                    <Image
                            className="rounded-full"
                            src={imageUrl.imageUrl}
                            alt="sua foto de perfil"
                            width= {80}
                            height={80}
                            priority={true}
                        />
                </Link>
            </div>
        </nav>
    )
}