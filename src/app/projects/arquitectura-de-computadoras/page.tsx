import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const IndexPage = () => {
    //TODO: ADD METATAGS
    return (

        <section className='center-text'>
            <Image src='https://carballar.com/wp-content/uploads/2021/10/microprocesador-historia-1000x500-1.jpg' width={1000} height={1000} className='max-width' alt='microprocesador' />
            <h1 className='f-size-70 mt-10'>Partes del microprocesador</h1>
            <p className='f-size-24'>Bienvenido a nuestro viaje interactivo a través de las entrañas de la tecnología moderna. <br /> <br />En este recorrido virtual, exploraremos cada rincón de un microprocesador, desglosando sus componentes y funciones clave. ¿Lo mejor? No solo te llevaremos a través de una experiencia digital informativa, ¡sino que también te conectaremos con la realidad física! Acompáñanos mientras nos comunicamos con un Arduino y una maqueta en tiempo real: iluminaremos físicamente cada parte del microprocesador que estemos explicando en nuestra página web. <br /><br />¡Prepárate para una experiencia educativa y visualmente impactante!</p>
            <div className='mt-50 mb-50'>
                <Link className='f-size-22 bg-blue white-text p-20 radius-30' href='/projects/arquitectura-de-computadoras/buses-de-comunicacion'>Empezar ahora</Link>
            </div>
        </section>

    )
}

export default IndexPage;