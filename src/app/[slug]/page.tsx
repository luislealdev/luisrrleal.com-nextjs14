import { keyphrases } from '@/data/keyphrases/keyphrases';
import { generateSlug } from '@/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Buscar la keyphrase que coincida con el slug
    const keyphrase = keyphrases.find(
        (phrase) => generateSlug(phrase) === slug
    ) as string | undefined;

    if (!keyphrase) {
        return {
            title: "Página no encontrada",
        };
    }

    return {
        title: keyphrase + " - Luis Leal",
        description: `Estás buscando "${keyphrase}"? ¡Desarrolla cualquier tipo de software ahora!.`,
        openGraph: {
            title: keyphrase,
            description: `Estás buscando "${keyphrase}"? ¡Desarrolla cualquier tipo de software ahora!.`,
        },
    };
}

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;

    const keyphrase = keyphrases.find(
        (phrase) => generateSlug(phrase) === slug
    );

    if (!keyphrase) {
        notFound(); // Mostrar página 404 si no se encuentra la keyphrase
    }

    // Tu información personal
    const info = "Luis Leal | FullStack Developer | luisrrleal.com | luisrrleal@gmail.com";
    // Número de WhatsApp en formato internacional
    const whatsappNumber = "524121719136";
    // Mensaje prellenado
    const whatsappMessage = encodeURIComponent(
        "Vi tu sitio web, me gustaría que me encontraran así de fácil."
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <main className="p-40 flex justify-content align-center" style={{ minHeight: '68vh' }}>
            <section>
                <div className="center-text flex column align-center">
                    {/* 1. Keyphrase como h1 */}
                    <h1 className="f-size-70">{keyphrase}</h1>
                    {/* 2. Tu información */}
                    <p className="bold f-size-20 gray-color mt-10">{info}</p>
                    {/* 3. Texto de invitación */}
                    <p className="f-size-22 mt-40 mb-20" style={{ marginTop: 40 }}>
                        ¿Quieres que te encuentren como tú encontraste esta página?
                    </p>
                    {/* 4. Botón de WhatsApp */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ph-20 p-10 white-text"
                        style={{
                            background: "#25D366",
                            borderRadius: 30,
                            fontSize: 18,
                            fontWeight: "bold",
                            textDecoration: "none",
                            marginBottom: 24,
                            display: "inline-block",
                            marginTop: 20,
                        }}
                    >
                        Contáctame por WhatsApp
                    </a>
                    <div className="flex gap-15 mt-50">
                        {/* <Link href='/contacto' className="ph-20 p-10 white-text bg-blue radius-30 f-size-18">Contacto</Link> */}
                        <Link href='/blog' className="ph-20 p-10 white-text bg-orange radius-30 f-size-18">Ver Blog</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SlugPage