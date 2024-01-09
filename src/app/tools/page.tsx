import { ToolCard } from '@/components/ui'
import React from 'react'

const ToolsPage = () => {
    return (
        <div>
            <h1>Herramientas</h1>
            <section className='grid-c-4 gap-25 mt-50'>
                <ToolCard url='' img='' title='Qr Generator' description='Genera códigos QR fácil y rápido, ¿lo mejor? ¡Totalmente GRATIS!' />
            </section>
        </div>
    )
}

export default ToolsPage