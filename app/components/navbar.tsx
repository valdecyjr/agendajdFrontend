import Image from "next/image";
import Link from "next/link";

export default function Navbar({imageUrl, username}:{imageUrl: any, username: any}){

    const url = "/" + username
    return (
        <nav className="flex justift-between items-center w-screen md:h-[8vh] bg-white">
            <strong 
            className="md:flex md:justify-center md:items-center md:w-[20%] md:p-5 md:bg-clip-text md:font-extrabold md:text-2xl md:text-transparent md:bg-gradient-to-tr md:from-violet-500 md:to-pink-500"
            >
                AgendaJD
            </strong>
            <ul className="w-[60%] h-full flex justify-between items-center">
                <Link href="/" className="w-[33%] h-[80%] hover:bg-gray-300 flex justify-center items-center">
                    <li>mensagens</li>
                </Link>
                <Link href="/" className="w-[33%] h-[80%] hover:bg-gray-300 flex justify-center items-center">
                    <li>contatos</li>
                </Link>
                <Link href="/" className="w-[33%] h-[80%] hover:bg-gray-300 flex justify-center items-center">
                    <li>eventos</li>
                </Link>
            </ul>
            <Link href={url} className="w-[20%]">
                <div className="w-[100%] p-5 h-full flex justify-end items-center gap-5">
                    <strong>{username}</strong>
                    <Image
                            className="rounded-full"
                            src={imageUrl}
                            alt="sua foto de perfil"
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '40%', height: '60%' }}
                            priority={true}
                        />
                </div>
            </Link>
        </nav>
    )
}