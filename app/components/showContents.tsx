export default function ShowContents({funcionality,}:{funcionality: string}){
    return (
        <section className="md:flex md:flex-col md:w-[80%] md:h-full md:bg-white md:gap-5">
            <strong className="md:flex md:w-full md:justify-center md:text-2xl md:mt-5">
                {funcionality}
            </strong>
            <div className="md:flex md:w-full md:h-auto md:justify-around">
                <button 
                className="md:flex md:items-center md:justify-center md:hover:bg-gray-300 md:rounded-md md:h-12 md:p-5"
                >
                    Listar {funcionality}
                </button>
                <button 
                className="md:flex md:items-center md:justify-center md:hover:bg-gray-300 md:rounded-md md:h-12 md:p-5"
                >
                    Criar {funcionality}
                </button>
                <button 
                className="md:flex md:items-center md:justify-center md:hover:bg-gray-300 md:rounded-md md:h-12 md:p-5"
                >
                    Deletar {funcionality}
                </button>
            </div>
        </section>
    )
}