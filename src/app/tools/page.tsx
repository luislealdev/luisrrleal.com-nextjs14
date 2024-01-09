import { ToolCard } from '@/components/cards'
import React from 'react'

const ToolsPage = () => {
    return (
        <div>
            <h1>Herramientas</h1>
            <section className='grid-c-4 gap-25 mt-50'>
                <ToolCard url='/tools/qr-generator/qr-code-generator' img='https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC' title='Qr Generator' description='Genera códigos QR fácil y rápido, ¿lo mejor? ¡Totalmente GRATIS!' />
            </section>
        </div>
    )
}

export default ToolsPage