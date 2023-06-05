import Sidebar from "../components/sidebar";

export default function In(){
    return (
        <main className="bg-zinc-900 text-slate-200">
            <Sidebar/>
            <section className="flex flex-col h-screen">
                <section className="flex flex-col h-[20%]">
                <strong 
                className="flex w-screen justify-center items-center bg-clip-text font-extrabold text-4xl text-transparent bg-gradient-to-tr from-violet-500 to-pink-500"
                >
                    Bem vindo ao AgendaJD
                </strong>
                </section>
                <section className="flex flex-col h-[40%]">
                    <strong className="flex w-screen justify-center items-center">Últimas mensagens</strong>
                    <table className="flex w-screen pl-[200px]">
                        <thead className="flex w-screen">
                            <th className="w-[20%] border-2 border-solid">Foto</th>
                            <th className="w-[20%] border-2 border-solid">Contato</th>
                            <th className="w-[60%] border-2 border-solid">mensagem</th>
                        </thead>
                    </table>
                </section>
                <section className="flex flex-col h-[40%]">
                    <strong className="flex w-screen justify-center items-center">Últimas ligações</strong>
                    <table className="flex w-screen pl-[200px]">
                        <thead className="flex w-screen">
                            <th className="w-[20%] border-2 border-solid">Foto</th>
                            <th className="w-[20%] border-2 border-solid">Contato</th>
                            <th className="w-[60%] border-2 border-solid">mensagem</th>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </section>
            </section>
        </main>
    )
}