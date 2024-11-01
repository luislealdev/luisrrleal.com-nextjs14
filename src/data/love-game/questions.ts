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
      options: ['Lindance', 'Veracruz', 'Nacional', 'Pre-nacional'],
      correctAnswer: 'Veracruz',
      askedBy: 'Ricardo y Yuri',
    }
  ],
  '15': [
    {
      question: '¿Siempre juntas, siempre...?',
      options: ['Tlacuaches', 'Linces', 'Delfines', 'Amigas'],
      correctAnswer: 'Linces',
      askedBy: 'Sandy',
    }
  ],
  '16': [
    {
      question: '¿De qué nos disfrazamos juntas en Halloween de 2022?',
      options: ['Piratas sexy', 'Princesas', 'Max Goof', 'Policía y ladrona'],
      correctAnswer: 'Max Goof',
      askedBy: 'Sandy',
    }
  ],
  '17': [
    {
      question: '¿Que hacemos cuando decimos pose tierna?',
      options: ['Cara de bebé', 'Ojos de gatito', 'Sonrisa con ojos cerrados', 'Dedo en el cachete'],
      correctAnswer: 'Dedo en el cachete',
      askedBy: 'Sandy',
    }
  ],
  '18': [
    {
      question: '¿Que nos hizo daño en el viaje a gto del 2022?',
      options: ['La torta de carnitas', 'La pizza', 'El agua con lechuga', 'Los helados'],
      correctAnswer: 'La pizza',
      askedBy: 'Sandy',
    }
  ],
  '19': [
    {
      question: '¿Que intentamos hacer múltiples veces para una foto y no nos salió? (Cumpleaños 21)',
      options: ['Una pirámide', 'Hacer caballito', 'Cargarte de lado', 'Pose sexy'],
      correctAnswer: 'Cargarte de lado',
      askedBy: 'Sandy',
    }
  ],
  '20': [
    {
      question: '¿Cuál fue el primer lugar al que te invité a salir?',
      options: ['Al parque', 'Comer pizza', 'Comer sushi', 'Partido de futbol'],
      correctAnswer: 'Comer sushi',
      askedBy: 'Luisito (tu bb)',
    }
  ],
  '21': [
    {
      question: '¿Con quién estábamos cuando nos dimos uno de nuestros besos más tiernos?',
      options: ['Nao', 'Solos', 'Pablo', 'Simba'],
      correctAnswer: 'Nao',
      askedBy: 'Luisito (tu bb)',
    }
  ],
  '22': [
    {
      question: '¿Cuándo te di por primera vez flores?',
      options: ['Tu cumpleaños', 'Después de un examen', 'Día de las flores amarillas', 'Guanajuato'],
      correctAnswer: 'Día de las flores amarillas',
      askedBy: 'Luisito (tu bb)',
    }
  ],
  '23': [
    {
      question: '¿Qué te regalé en tu cumpleaños 2023?',
      options: ['Un peluche', 'Un cuadro', 'Un collar', 'Un libro'],
      correctAnswer: 'Un collar',
      askedBy: 'Luisito (tu bb)',
    }
  ],
  '24': [
    {
      question: '¿Cómo nos hacemos llamar?',
      options: ['La family', 'Sanguinarios del M1', 'Los genocidas', 'Club mañoso'],
      correctAnswer: 'La family',
      askedBy: 'Todos',
    }
  ]
};