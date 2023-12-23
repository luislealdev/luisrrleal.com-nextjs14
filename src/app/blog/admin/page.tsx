import Link from 'next/link'
import React from 'react'

const AdminDashboard = () => {
    return (
        <section className='flex'>
            <div>
                <h1>¡Hola Luis!</h1>
                <p>¿Qué quieres hacer hoy?</p>
            </div>
            <Link href='/blog/admin/write/new' className='ph-20 bg-blue align-center flex white-text radius-30'>Escribir artículo</Link>
        </section>
    )
}

export default AdminDashboard;