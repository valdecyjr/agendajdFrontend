export default function PerfilContent(){
    return (
        <div className="md:flex md:justify-center md:w-screen md:h-[92vh]">
            <div className=" bg-white md:flex md:flex-col md:mt-5 md:w-[80%] md:h-auto md:rounded-md">
                <div className="md:flex md:flex-col md:items-center md:w-full md:h-[50%]">
                    <h1 className="md:h-[20%] md:m-5 md:text-3xl">Eventos Proximos</h1>
                    <div className="md:h-[80%] md:border-4 md:w-full md:rounded-xl md:border-gray-500">
                        <table className="md:flex">
                            <tr className="md:flex md:w-[100%] md:m-5">
                                <th className="md:flex md:border-4 md:border-b-0 md:w-[25%] md:justify-center">Evento</th>
                                <th className="md:flex md:border-4 md:border-b-0 md:border-l-0 md:w-[25%] md:justify-center">Local</th>
                                <th className="md:flex md:border-4 md:border-b-0 md:border-l-0 md:w-[25%] md:justify-center">Data</th>
                                <th className="md:flex md:border-4 md:border-b-0 md:border-l-0 md:w-[25%] md:justify-center">Hora</th>
                            </tr>
                            {}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}