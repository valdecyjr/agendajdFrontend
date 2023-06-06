import PerfilContent from "./PerfilContent";
import AnuncioContent from "./anuncioContent";


export default function PerfilHome(){
    return (
        <section className="md:flex md:flex=col md:w-screen md:h-auto">
            <AnuncioContent/>
            <PerfilContent/>
            <AnuncioContent/>
        </section>
    )
}