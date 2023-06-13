"use client"

import PerfilContent from "../components/PerfilContent"
import Navbar from "../components/navbar"
import ShowContents from "../components/showContents"

export default function Eventos(){
    return(
        <main className="bg-gray-300 w-screen h-screen">
            <Navbar/>
            <PerfilContent>
                <ShowContents funcionality="eventos"/>
            </PerfilContent>
        </main>
    )
}