import Link from 'next/link';
import { unlockedContent } from '@/data/love-game/unlocked';
import Image from 'next/image';

export default function Unlocked({ params }: { params: { id: string } }) {
    const content = unlockedContent[params.id]; // Obtener el contenido según el id
    const nextId = parseInt(params.id) + 1; // Calcular el siguiente id

    if (!content) return <p>Contenido no encontrado</p>; // Manejo de error si no hay contenido

    return (
        <div className='container'>
            <h1>¡Felicidades!</h1>
            <p className='mb-50'>Has desbloqueado un recuerdo especial.</p>
            <div className='grid-c-4 gap-30 column-in-mobile'>
                {/* Mostrar imágenes dinámicamente */}
                {content.images.map((image, index) => (
                    <Image className='max-width' width={400} height={1000} key={index} src={image} alt={`Recuerdo ${index + 1}`} />
                ))}

                {/* Mostrar videos dinámicamente */}
                {content.videos.map((video, index) => (
                    <video key={index} controls>
                        <source src={video} type="video/mp4" />
                    </video>    
                ))}
            </div>

            {/* Renderizar botón de siguiente pregunta si hay más */}
            {unlockedContent[nextId] ? (
                <Link href={`/love-game/juego/${nextId}`}>
                    <button>Siguiente juego</button>
                </Link>
            ) : (
                <p>¡Has completado todos los juegos!</p>
            )}
        </div>
    );
}