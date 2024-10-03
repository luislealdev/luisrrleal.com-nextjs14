import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>¡Bienvenida al Juego de Recuerdos!</h1>
            <Link href="/love-game/juego/1">
                <button>Comenzar juego</button>
            </Link>
        </div>
    );
}
