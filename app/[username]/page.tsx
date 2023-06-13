"use client"

import { useState } from "react";
import Navbar from "../components/navbar";
import PerfilContent from "../components/PerfilContent";

export default function UserHome() {

    const [showFunctionality, setFunctionality] = useState("")

    function selectFunctionality(e: any){

        function checkFunctionality(text: string){
            if (showFunctionality === text) setFunctionality("")
            else setFunctionality(text)
        }

        let buttonPressed = e.target.innerText
        console.log(buttonPressed)

        if (buttonPressed === "Criação de Eventos"){
            checkFunctionality("Os usuários podem criar eventos e adicionar detalhes, como título, data, hora de início e término, localização e descrição. A opção de adicionar lembretes também pode ser incluída para ajudar os usuários a se lembrarem dos eventos importantes.")
        }
        else if (buttonPressed === "Categorias e Etiquetas"){
            checkFunctionality("O AgendJD permite que os usuários atribuam categorias ou etiquetas aos eventos, facilitando a organização e a filtragem dos compromissos por tipo. Por exemplo, os usuários podem ter categorias como \"Trabalho\", \"Pessoal\", \"Saúde\" e assim por diante, para separar e identificar diferentes tipos de eventos.")
        }
        else if(buttonPressed === "Compartilhamento e Colaboração"){
            checkFunctionality("Os usuários podem compartilhar eventos com outras pessoas, como colegas de trabalho, amigos ou familiares. Os eventos compartilhados podem ser visualizados por outras pessoas, dependendo das permissões definidas pelo proprietário do evento.")
        }
        else if(buttonPressed === "Lembretes e Notificações"){
            checkFunctionality("O AgendJD pode enviar lembretes e notificações por e-mail, mensagem de texto ou notificações no próprio site. Os usuários podem configurar lembretes personalizados para serem notificados antes dos eventos, garantindo que não percam compromissos importantes.")
        }

    }

    return (
        <main className="bg-gray-300 w-screen h-screen">
            <Navbar/> 
            <PerfilContent>
                <section className="md:flex md:w-[80%] md:h-full md:bg-white">
                    <div className="md:flex md:flex-col md-h-[50%] md:w-full md:items-center md:gap-10 md:p-5 ">
                        <div className="md:flex md:flex-col md:h-[50%] md:w-full md:items-center md:gap-5">
                            <strong className="md:text-2xl md:h-auto"> Bem vindo ao Agenda JD</strong>
                            <p className="md:w-[60%] md:h-[50%] md:flex md:items-center">
                                O AgendaJD é um site projetado para ajudar os usuários a organizarem suas atividades,
                                compromissos e eventos em uma agenda digital. O objetivo principal é fornecer uma plataforma
                                intuitiva e fácil de usar para que os usuários possam gerenciar suas agendas de forma eficiente.
                            </p>
                        </div>
                        <div className="md:flex md:flex-col md:h-auto md:w-full md:items-center md:gap-5">
                            <strong className="md:text-xl">Principais Funcionalidades</strong>
                            <div  className="md:flex md:w-full md:justify-center md:items-center md:gap-5">
                                <button 
                                className="md:flex md:items-center md:justify-center md:hover:bg-gray-300 md:rounded-md md:h-12 md:p-5"
                                onClick={selectFunctionality}
                                >
                                    Criação de Eventos
                                </button>
                                <button 
                                className="md:flex md:items-center md:justify-center md:hover:bg-gray-300 md:rounded-md md:h-12 md:p-5"
                                onClick={selectFunctionality}
                                >
                                    Categorias e Etiquetas
                                </button>
                                <button 
                                className="md:flex md:items-center md:justify-center md:hover:bg-gray-300 md:rounded-md md:h-12 md:p-5" 
                                onClick={selectFunctionality}
                                >
                                    Compartilhamento e Colaboração
                                </button>
                                <button 
                                className="md:flex md:items-center md:justify-center md:hover:bg-gray-300 md:rounded-md md:h-12 md:p-5"
                                onClick={selectFunctionality}
                                >
                                    Lembretes e Notificações
                                </button>
                            </div>
                        </div>
                        <p className="md:w-[60%] md:h-auto md:flex md:items-center">
                            {showFunctionality}
                        </p>
                    </div>
                </section>
            </PerfilContent>
        </main>
    )
}