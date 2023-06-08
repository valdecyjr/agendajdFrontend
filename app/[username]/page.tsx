'use client';
 
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import PerfilContent from "../components/PerfilContent";
import axios from 'axios';

export default function UserHome() {

    const pathname = usePathname().replace("/", "")
    const [data, setData] = useState()
    const [imagePerfilUrl, setImage] = useState("/imagens/perfil.jpg")

    return (
        <main className="bg-gray-300 w-screen h-screen">
            <Navbar imageUrl={imagePerfilUrl} username="valdecy"/> 
            
            <PerfilContent/>
        </main>
    )
}