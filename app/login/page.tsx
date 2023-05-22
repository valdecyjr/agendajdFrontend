'use-client'
import Link from "next/link"

export default function Login() {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-zinc-950">
      <form 
      className="flex flex-col items-center w-96 h-96 bg-zinc-800 text-white gap-10"
      >
        <strong 
        className="p-5 bg-clip-text font-extrabold text-4xl text-transparent bg-gradient-to-tr from-violet-500 to-pink-500"
        >
          AgendaJD
        </strong>
        <div className='flex flex-col gap-2'>
          <label>Email:</label>
          <input className='bg-zinc-900 text-zinc-300' placeholder='Digite seu Email'/>
          <label>Senha:</label>
          <input className='bg-zinc-900 text-zinc-300' placeholder='Digite sua Senha'/>
        </div>
        <div className="flex text-xs gap-3">
          <a href="#" className="hover:bg-zinc-900 rounded"><i>Cadastre-se</i></a>
          <a href="#" className="hover:bg-zinc-900 rounded"><i>Recuperar senha</i></a>
        </div>
        <div>
        <Link href="/">
          <button className="hover:bg-zinc-900 rounded w-28">Voltar</button>
        </Link>  
          <button className="hover:bg-zinc-900 rounded w-28">Login</button>
        </div>
      </form>  
    </main>    
  )
}
