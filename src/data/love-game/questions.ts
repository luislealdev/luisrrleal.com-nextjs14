type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  askedBy: string; // Amigo que hace la pregunta
};

export const questionSets: Record<string, Question[]> = {
  '1': [
    {
      question: '¿Cuál fue nuestra primer presentación juntos?',
      options: ['Xochi', 'Tec', 'Presidencia', 'Auditorio'],
      correctAnswer: 'Presidencia',
      askedBy: 'Pab',
    },
  ],
  '2': [
    {
      question: '¿Donde tenemos una de nuestras fotos favoritas?',
      options: ['Apizaco', 'Veracruz', 'Morelia', 'Celaya'],
      correctAnswer: 'Apizaco',
      askedBy: 'Pab',
    },
  ],
  '3': [
    {
      question: 'A donde ibamos cuando tomamos una foto muy astetikkk? ',
      options: ['Veracruz', 'Morelia', 'Apizaco', 'Acámbaro'],
      correctAnswer: 'Acámbaro',
      askedBy: 'Pab',
    },
  ],



};