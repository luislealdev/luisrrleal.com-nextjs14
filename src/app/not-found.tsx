import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="center-text">
            <Image src='https://i.pinimg.com/originals/ba/ee/dc/baeedc60b2a2bdaa4dced5369d9695b0.gif' alt="perrito triste" className="auto-width" width={1000} height={200} />
            <h1>404 - Not Found</h1>
            <h2>¡Ups! Parece que la página que estás buscando no existe</h2>

            <p>Sin embargo, mira un perrito</p>
            <div className="mt-50 f-size-18">
                <Link href='/' className="bg-blue ph-20 p-5 white-text radius-30">Ir al inicio</Link>
            </div>
        </div>
    )
}

export default NotFoundPage;