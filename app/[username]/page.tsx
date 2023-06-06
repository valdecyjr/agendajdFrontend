"use client"

import { useState } from "react";
import Navbar from "../components/navbar";
import PerfilHome from "../components/perfilHome";


export default function UserHome() {

    const [imagePerfilUrl, setImage] = useState("/imagens/perfil.jpg")

    return (
        <main className="bg-gray-300 w-screen h-screen">
            <Navbar imageUrl={imagePerfilUrl}/>
            <PerfilHome/>
        </main>
    )
}