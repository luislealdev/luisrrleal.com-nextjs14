import { useRouter } from 'next/router';
import Link from 'next/link';
import { unlockedContent } from '@/data/love-game/unlocked';

export default function Unlocked({ params }: { params: { id: string } }) {
    const content = unlockedContent[params.id]; // Get the content based on the id
    const nextId = parseInt(params.id) + 1; // Calculate the next question set id

    if (!content) return <p>Contenido no encontrado</p>; // Error handling if no content is found

    return (
        <div>
            <h1>¡Felicidades!</h1>
            <p>Has desbloqueado un recuerdo especial.</p>
            {content.map((media, index) => {
                if (media.endsWith('.mp4')) {
                    return (
                        <video key={index} controls>
                            <source src={media} type="video/mp4" />
                        </video>
                    );
                } else {
                    return <img key={index} src={media} alt={`Recuerdo ${index + 1}`} />;
                }
            })}

            {/* Conditionally render the next button */}
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
