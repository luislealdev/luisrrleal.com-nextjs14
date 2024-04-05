import Link from "next/link"
import { ContactForm } from "./ui"
import Image from "next/image"

const ContactPage = () => {
    return (
        <section className="grid-c-2 gap-25">
            <Image src='/img/ui/contact.avif' width={1000} height={1000} className='max-width' alt='Contacto' />
            <div>
                <h1 className="f-size-50">Contacto</h1>
                <div className="flex gap-15 align-center f-size-24">
                    <p>Me encantaría escucharte, puedes encontrarme en</p>
                    <Link href='https://github.com/luislealdev' target="_blank" >
                        <i className="fa-brands fa-github f-size-30 black-text"></i>
                    </Link>
                    <Link href='https://www.linkedin.com/in/luisrrleal/' target="_blank" >
                        <i className="fa-brands fa-linkedin f-size-30 black-text"></i>
                    </Link>
                </div>
                <p className="mt-10">o mándame un mensaje aquí abajo y te responderé lo más rápido posible</p>
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactPage