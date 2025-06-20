import { keyphrases } from '@/data/keyphrases/keyphrases';
import { generateSlug } from '@/utils';
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

    return (
        <div>SlugPage</div>
    )
}

export default SlugPage