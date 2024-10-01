'use client'; // Para habilitar los hooks de React en componentes cliente

import { useState, ChangeEvent } from 'react';

export default function RemoveBgPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [base64Image, setBase64Image] = useState<string | null>(null);
    const [processedImage, setProcessedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // Función para convertir la imagen a base64
    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result as string;
                resolve(result.split(',')[1]); // Elimina el prefijo de base64
            };
            reader.onerror = (error) => reject(error);
        });
    };

    // Manejar el cambio de archivo
    const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64Image = await convertToBase64(file);
            setSelectedImage(URL.createObjectURL(file)); // Muestra la imagen cargada
            setBase64Image(base64Image); // Guarda la imagen en base64 para procesar
        }
    };

    // Función para llamar a la API y eliminar el fondo de la imagen
    const removeBackground = async () => {
        if (!base64Image) return;

        setLoading(true);
        try {
            const response = await fetch('/api/remove-bg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: base64Image }),
            });

            if (!response.ok) {
                throw new Error('Error al procesar la imagen');
            }

            const result = await response.json();
            setProcessedImage(`data:image/png;base64,${result.image}`);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Eliminador de Fondo de Imágenes</h1>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ marginBottom: '1rem' }}
            />

            {selectedImage && (
                <div>
                    <h2>Imagen Original</h2>
                    <img src={selectedImage} alt="Original" style={{ maxWidth: '300px' }} />
                </div>
            )}

            {/* Botón que se muestra cuando hay una imagen seleccionada */}
            {selectedImage && (
                <button
                    onClick={removeBackground}
                    disabled={loading}
                    style={{
                        padding: '0.5rem 1rem',
                        margin: '1rem',
                        backgroundColor: '#0070f3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loading ? 'Procesando...' : 'Eliminar Fondo'}
                </button>
            )}

            {loading && <p>Procesando imagen...</p>}

            {processedImage && (
                <div>
                    <h2>Imagen Sin Fondo</h2>
                    <img src={processedImage} alt="Procesada" style={{ maxWidth: '300px' }} />
                </div>
            )}
        </div>
    );
}
