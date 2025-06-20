import slugify from 'slugify';
export * from './generatePaginationNumbers';

// lib/utils.js

export function generateSlug(text: string) {
    return slugify(text, {
        lower: true, // Convertir a minúsculas
        strict: true, // Eliminar caracteres especiales
        locale: "es", // Respetar reglas del español
        remove: /[*+~.()'"!:@]/g, // Eliminar caracteres adicionales
    });
}