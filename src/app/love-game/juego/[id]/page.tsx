'use client';
import { useState } from 'react';
import Link from 'next/link';
import { questionSets } from '@/data/love-game/questions';

export default function Game({ params }: { params: { id: string } }) {
    const questions = questionSets[params.id]; // Obtener preguntas según el id
    const nextId = parseInt(params.id) + 1; // Calcular el siguiente id de preguntas

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    if (!questions) return <p>Preguntas no encontradas</p>; // Manejo de error si no hay preguntas

    const handleAnswer = (option: string) => {
        if (option === questions[currentQuestion].correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className='container'>
            <h2>Pregunta de {questions[currentQuestion].askedBy}</h2> {/* Nombre del amigo */}
            <h1>{questions[currentQuestion].question}</h1>
            <div className='grid-c-2 grid-c-2-mobile gap-15'>
            {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
            </div>

            {isCorrect && (
                <div className='mt-100'>
                    <p>¡Correcto! Has desbloqueado una sorpresa.</p>
                    <Link href={`/love-game/recompensa/${params.id}`}>
                        <button>Ver sorpresa</button>
                    </Link>
                </div>
            )}
        </div>
    );
}