import Image from "next/image";
import logo from '../../public/Logo_Salmen.svg'

const altTextImage = "Imagem da logomarca da Escola Estadual Salmen Bukzem"

export default function LogoComponent() {
    return (
        <div className="h-auto w-2/6 bg-white">
            <Image src={logo} alt={altTextImage}></Image>
        </div>
    )
}