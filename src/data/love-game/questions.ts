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
  '4': [
    {
      question: 'Que día es mi cumple?',
      options: ['Octubre 7', 'Octubre 6', 'Octubre 5', 'Octubre 8'],
      correctAnswer: 'Octubre 7',
      askedBy: 'Pab',
    },
  ],
  '5': [
    {
      question: 'Dónde nos robamos unos lentes para una fotito? ',
      options: ['Cuidado con el perro', 'Waltmart', 'Costco', 'C&A'],
      correctAnswer: 'Waltmart',
      askedBy: 'Pab',
    },
  ],
  '6': [
    {
      question: '¿Qué canción cantamos y grabamos mientras nos estábamos arreglando en Veracruz?',
      options: ['Real gangsta love', 'A dónde vamos', 'Cómo te atreves', 'Ninguna de las anteriores'],
      correctAnswer: 'Cómo te atreves',
      askedBy: 'Nao',
    }
  ],
  '7': [
    {
      question: 'De qué marca de galletas subimos una story a ig?',
      options: ['Príncipe', 'Oreo', 'Cómo te atreves', 'Marias', 'Polvorones'],
      correctAnswer: 'Oreo',
      askedBy: 'Nao',
    }
  ],
  '8': [
    {
      question: '¿Cuál fue el apodo que nos empezamos a decirts?',
      options: ['beba', 'amika', 'miamor', 'Ninguna de las anteriores'],
      correctAnswer: 'miamor',
      askedBy: 'Nao',
    }
  ],
  '9': [
    {
      question: '¿De qué color eran las cuatris a las q nos subimos Luis, Pablo, tu y yo?',
      options: ['Negra y roja', 'Amarilla y roja', 'Roja y verde', 'Negra y amarilla'],
      correctAnswer: 'Amarilla y roja',
      askedBy: 'Nao',
    }
  ],
  '10': [
    {
      question: 'Cuál era la mascota del IT Cd Hidalgo?',
      options: ['Tiburones', 'Gorilas', 'Lobos', 'Jaguares'],
      correctAnswer: 'Jaguares',
      askedBy: 'Nao',
    }
  ],
  '11': [
    {
      question: '¿Qué color fue mi equipo en el curso de verano?',
      options: ['Rojo', 'Naranja', 'Azul', 'Amarillo'],
      correctAnswer: 'Amarillo',
      askedBy: 'Yuri',
    }
  ],
  '12': [
    {
      question: '¿A dónde fuimos a comer el día de mi cumpleaños?',
      options: ['A mi casa', 'A comer', 'A Querétaro', 'No nos pudimos ver'],
      correctAnswer: 'A Querétaro',
      askedBy: 'Yuri',
    }
  ],
  '13': [
    {
      question: '¿Qué hicimos la primera vez que vinimos a mi casa?',
      options: ['Nos quedamos en jugar a mi casa', 'Comimos y luego nos subimos a los juegos', 'Ensayamos una coreografía', 'Comimos churros en mi casa'],
      correctAnswer: 'Comimos y luego nos subimos a los juegos',
      askedBy: 'Ricardo',
    }
  ],
  '14': [
    {
      question: '¿Dónde empezó nuestra amistad?',
      options: ['Lindance','Veracruz','Nacional','Pre-nacional'],
      correctAnswer: 'Veracruz',
      askedBy: 'Ricardo y Yuri',
    }
  ]

};