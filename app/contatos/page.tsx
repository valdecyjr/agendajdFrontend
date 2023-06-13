import PerfilContent from "../components/PerfilContent";
import Navbar from "../components/navbar";
import ShowContents from "../components/showContents";

export default function Contatos(){
    return (
        <main className="bg-gray-300 w-screen h-screen">
            <Navbar/>
            <PerfilContent>
                <ShowContents funcionality="Contatos"/>
            </PerfilContent>
        </main>
    )
}