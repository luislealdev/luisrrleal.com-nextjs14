import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MemoriaCachePage = () => {
  //TODO: ADD METATAGS
  return (
    <>
      {/* <Layout title='Memoria Caché' description='La memoria caché es una memoria de acceso rápido que se encuentra dentro del procesador.'> */}
      <div className="grid-c-2 gap-25">
        <Image width={1000} height={1000} className='max-width p-10' src='https://hardzone.es/app/uploads-hardzone.es/2020/01/CPU-cache-1.jpg' alt='memoria cache' />
        <div>
          <h1>Memoria Caché</h1>
          <p className='f-size-24'>La memoria caché es una memoria de acceso rápido que se encuentra dentro del procesador. Existen varios niveles de caché (L1, L2, L3) con diferentes tamaños y velocidades. La caché almacena datos e instrucciones utilizados con frecuencia por la CPU, lo que ayuda a reducir los tiempos de acceso a la memoria principal (RAM). Esto acelera la velocidad de ejecución de las operaciones, ya que la CPU puede acceder rápidamente a la información almacenada en la caché.</p>
        </div>
      </div>
      <div className='mt-50 center-text'>
        <Link className='f-size-22 bg-blue white-text p-20 radius-30' href='/projects/arquitectura-de-computadoras/gpu'>Continuar</Link>
      </div>
      {/* </Layout> */}
    </>
  )
}

export default MemoriaCachePage