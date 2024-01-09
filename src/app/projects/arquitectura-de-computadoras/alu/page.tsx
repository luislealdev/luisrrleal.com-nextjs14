
import Image from "next/image"
import Link from "next/link"

const ALUPage = () => {
    return (
        //TODO: ADD METATAGS
        <>
            {/* <Layout title='ALU' description='La ALU es una parte fundamental del microprocesador que realiza operaciones aritméticas y lógicas. '> */}
            <div className="grid-c-2 gap-25">
                <Image width={1000} height={1000} className='max-width p-10' src='https://ars.els-cdn.com/content/image/3-s2.0-B9780323313025000053-f05-03-9780323313025.jpg' alt='alu' />
                <div>
                    <h1>ALU (Unidad Aritmético Lógica)</h1>
                    <p className='f-size-24'>La ALU es una parte fundamental del microprocesador que realiza operaciones aritméticas y lógicas. Realiza sumas, restas, multiplicaciones, divisiones y operaciones lógicas como AND, OR y NOT. La ALU es responsable de realizar cálculos y manipulaciones de datos según las instrucciones del programa en ejecución.</p>
                </div>
            </div>
            <div className='mt-50 center-text'>
                <Link className='f-size-22 bg-blue white-text p-20 radius-30' href='/projects/arquitectura-de-computadoras/gpu'>Continuar</Link>
            </div>
            {/* </Layout> */}
        </>
    )
}

export default ALUPage