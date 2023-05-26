'use client'



export default function FormComponents({ children, submitFunction}: {children: React.ReactNode, submitFunction: any}) {

    

    return (
        <main className="flex items-center justify-center w-screen h-screen bg-zinc-950">
        <form 
        onSubmit={submitFunction}
        method="post"
        className="flex flex-col items-center w-96 h-auto bg-zinc-800 text-white gap-10"
        >
            <strong 
            className="p-5 bg-clip-text font-extrabold text-4xl text-transparent bg-gradient-to-tr from-violet-500 to-pink-500"
            >
            AgendaJD
            </strong>
            {children}
        </form>
        </main>
    )
}