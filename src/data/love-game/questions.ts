type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export const questionSets: Record<string, Question[]> = {
  '1': [
    {
      question: '¿Dónde fue nuestra primera cita?',
      options: ['Parque', 'Cine', 'Cafetería'],
      correctAnswer: 'Cine',
    },
    {
      question: '¿Qué color de camisa usaba ese día?',
      options: ['Roja', 'Azul', 'Blanca'],
      correctAnswer: 'Azul',
    },
  ],
  '2': [
    {
      question: '¿Cuál es su película favorita?',
      options: ['Inception', 'Titanic', 'Avatar'],
      correctAnswer: 'Inception',
    },
    {
      question: '¿Qué país quiere visitar?',
      options: ['Japón', 'Francia', 'Brasil'],
      correctAnswer: 'Japón',
    },
  ],
  '3': [
    {
      question: '¿Qué sabor de helado le gusta más?',
      options: ['Vainilla', 'Chocolate', 'Fresa'],
      correctAnswer: 'Chocolate',
    },
    {
      question: '¿Cuál es su canción favorita?',
      options: ['Shape of You', 'Blinding Lights', 'Imagine'],
      correctAnswer: 'Imagine',
    },
  ],
  // Add more sets as needed
};
