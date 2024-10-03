'use client';
import { useState } from 'react';
import Link from 'next/link';
import { questionSets } from '@/data/love-game/questions';

export default function Game({params}: { params: { id : string }}) {


    const questions = questionSets[params.id]; // Get the questions based on the id
    const nextId = parseInt(params.id) + 1; // Calculate the next question set id

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    if (!questions) return <p>Preguntas no encontradas</p>; // Error handling if no questions are found

    const handleAnswer = (option: string) => {
        if (option === questions[currentQuestion].correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div>
            <h1>{questions[currentQuestion].question}</h1>
            {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}

            {isCorrect && (
                <div>
                    <p>¡Correcto! Has desbloqueado una sorpresa.</p>
                    <Link href={`/love-game/recompensa/${params.id}`}>
                        <button>Ver sorpresa</button>
                    </Link>
                </div>
            )}
        </div>
    );
}
