import Link from "next/link"

export default function Nav(){
    return(
    <div>
        <ul className="flex w-full h-[4rem] bg-slate-500 text-white text-lg justify-around items-center ">
            
            <Link href={'/'}>
            <li className="border  w-[10rem] text-center hover:bg-orange-100 cursor-pointer hover:text-black"> home</li>
            </Link>

            <Link href={'/Myfiles'}>
            <li className="border  w-[10rem] text-center hover:bg-orange-100 cursor-pointer hover:text-black">Mis archivos</li>
            </Link>

            <Link href={'/Sendfiles'}>
            <li className="border  w-[10rem] text-center hover:bg-orange-100 cursor-pointer hover:text-black">Enviar archivos</li>
            </Link>

            <Link href={'/Linkeddevices'}>
            <li className="border  w-[10rem] text-center hover:bg-orange-100 cursor-pointer hover:text-black">Dispositivos vinculados</li>
            </Link>
            <li className="border  w-[10rem] text-center hover:bg-orange-100 cursor-pointer hover:text-black">Iniciar sesion</li>
        </ul>
    </div>
    )
}