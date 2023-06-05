import Image from "next/image";
import Link from "next/link";

export default function Sidebar(){
    return (
        <nav className="fixed flex flex-col w-[200px] h-[100vh] bg-slate-900  gap-8">
            <Image
            className="h-[180px] rounded-full"
            src="/imagens/Perfil.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
            />
            <div className="flex flex-col justify-center pl-3 gap-2">
                <strong>Nome</strong>
                <p>Email</p>
            </div>
            <li className="flex flex-col justify-center pl-3 gap-5 list-none md:h-[30%]">
                <Link href="in">
                    <strong>Home</strong>
                </Link>
                <Link href="in/perfil">
                    <strong>Perfil</strong>
                </Link>
                <Link href={"in/contatos"}>
                    <strong>Contatos</strong>
                </Link>
                <Link href="in/mensagens">
                    <strong>Mensagens</strong>
                </Link>
            </li>
        </nav>
    )
}