import Image from "next/image"
import Link from "next/link"

const Nucleos = () => {
    //TODO: ADD METATAGS
    return (
        <>
            {/* <Layout title="Núcleos" description="Un núcleo es una unidad de procesamiento dentro del microprocesador capaz de ejecutar instrucciones de forma independiente. "> */}
            <div className="grid-c-2 gap-25">
                <Image width={1000} height={1000} className='max-width p-10' src='https://www.muycomputer.com/wp-content/uploads/2019/01/Sandy-Bridge.jpg' alt='núcleos' />
                <div>
                    <h1>Núcleos</h1>
                    <p className="f-size-24">Un núcleo es una unidad de procesamiento dentro del microprocesador capaz de ejecutar instrucciones de forma independiente. Los procesadores modernos pueden tener múltiples núcleos (dual-core, quad-core, etc.). Cada núcleo tiene su propia unidad de ejecución y puede trabajar en tareas separadas al mismo tiempo. <br /> Esto permite una mayor capacidad de multitarea y el procesamiento paralelo, mejorando el rendimiento general del procesador.</p>
                </div>
            </div>

            <div className='mt-50 center-text'>
                <Link className='f-size-22 bg-blue white-text p-20 radius-30' href='/projects/arquitectura-de-computadoras/memoria-cache'>Continuar</Link>
            </div>
            {/* </Layout> */}
        </>
    )
}

export default Nucleos