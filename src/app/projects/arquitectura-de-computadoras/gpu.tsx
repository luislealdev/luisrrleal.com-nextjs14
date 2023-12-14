import { Layout } from '@/components/Layouts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GPUPage = () => {
    return (
        <Layout title='GPU' description='La GPU es una unidad especializada en el procesamiento de gráficos y visualización.'>
            <div className="grid-c-2">
                <Image width={1000} height={1000} className='max-width p-20' src='https://www.digitaltrends.com/wp-content/uploads/2021/12/graphics-card-gpu-feature-image-shutterstock-3.jpg?p=1' alt='gpu' />
                <div>
                    <h1>Unidad de Procesamiento Gráfico (GPU)</h1>
                    <p className='f-size-24'>La GPU es una unidad especializada en el procesamiento de gráficos y visualización. Se encarga de realizar cálculos relacionados con la representación de imágenes, videos y gráficos en dispositivos como computadoras, teléfonos móviles y consolas de juegos. Las GPU modernas también son utilizadas para tareas de inteligencia artificial, aprendizaje automático y minería de criptomonedas debido a su capacidad para realizar cálculos altamente paralelos.</p>
                </div>
            </div>
            <div className='mt-50 center-text'>
                <Link className='f-size-30 bg-blue white-text p-20 radius-30' href='/projects/arquitectura-de-computadoras/alu'>Continuar</Link>
            </div>
        </Layout>
    )
}

export default GPUPage