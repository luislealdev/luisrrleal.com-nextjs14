import { Layout } from '@/components/Layouts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BusesDeComunicacionPage = () => {
    return (
        <Layout title='Buses de Comunicación' description='Los buses de comunicación son canales que permiten la transferencia de información entre diferentes componentes dentro de un sistema informático o electrónico.'>
            <div className='grid-c-2 justify-text'>
                <Image width={1000} height={1000} className='max-width p-20' src='https://www.emagister.com/blog/wp-content/uploads/2021/12/pexels-pixabay-50711.jpg' alt='buses de comunicación' />
                <div>
                    <h1>
                        Buses de Comunicación
                    </h1>
                    <p className='f-size-24'>
                        Los buses de comunicación son canales que permiten la transferencia de información entre diferentes componentes dentro de un sistema informático o electrónico. Estos buses actúan como medios de transmisión de datos, señales o instrucciones entre la CPU (Unidad Central de Procesamiento), la memoria, los dispositivos de entrada y salida, y otros componentes del sistema.
                    </p>
                </div>
            </div>
            <div className='justify-text'>
                <br />
                <h2 className='bold'>Tipos de Buses de Comunicación</h2>
                <hr />
                <br />
                <h3 className='f-size-30'>Bus interno del procesador</h3>
                <p className='f-size-24'>Es un conjunto de líneas que conectan la CPU con la memoria y otros componentes dentro del procesador, permitiendo el flujo de datos entre ellos.</p>
                <br />
                <h3 className='f-size-30'>Bus de sistema</h3>
                <p className='f-size-24'>Conecta la CPU con otros componentes de la placa base, como la memoria RAM, tarjetas de expansión, unidades de almacenamiento, etc. Facilita la comunicación entre la CPU y otros dispositivos.</p>
                <br />
                <h3 className='f-size-30'>Bus de datos</h3>
                <p className='f-size-24'>Transfiere los datos entre la CPU y los dispositivos de almacenamiento o periféricos. La cantidad de bits que puede transferir determina su ancho de banda.</p>
                <br />
                <h3 className='f-size-30'>Bus de direcciones</h3>
                <p className='f-size-24'>Permite que la CPU acceda a ubicaciones específicas de la memoria o dispositivos. Proporciona las direcciones donde se encuentran los datos que se necesitan leer o escribir.</p>
                <br />
                <h3 className='f-size-30'>Bus de control</h3>
                <p className='f-size-24'>Controla la actividad en el bus, dirigiendo y coordinando las señales de datos y direcciones entre los diferentes componentes del sistema.</p>
                <br />
                <br /><br />
                <p className='f-size-24'>Estos buses de comunicación son esenciales para el funcionamiento adecuado de los sistemas informáticos, ya que permiten la transferencia eficiente de información entre los distintos elementos del hardware, lo que posibilita el procesamiento de datos y la ejecución de instrucciones.</p>
            </div>

            <div className='mt-50 center-text'>
                <Link className='f-size-30 bg-blue white-text p-20 radius-30' href='/projects/arquitectura-de-computadoras/nucleos'>Continuar</Link>
            </div>
        </Layout>
    )
}

export default BusesDeComunicacionPage;