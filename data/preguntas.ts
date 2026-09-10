import { Casilla } from '@/types/game';

export const CASILLAS_INICIALES: Casilla[] = [
  // ==================== 100 PUNTOS (4 CASILLAS) ====================
  {
    id: '1',
    puntos: 100,
    usada: false,
    pregunta: {
      id: 'p1',
      puntos: 100,
      tipo: 'multiple',
      pregunta: 'Según Proverbios 15:1, ¿qué efecto tiene la "blanda respuesta"?',
      opciones: [
        'Aumenta la confusión',
        'Quita la ira',
        'Genera discusiones',
        'Causa tristeza'
      ],
      respuestaCorrecta: 1
    }
  },
  {
    id: '2',
    puntos: 100,
    usada: false,
    pregunta: {
      id: 'p2',
      puntos: 100,
      tipo: 'experiencia',
      pregunta: 'Proverbios 3:5 nos aconseja confiar en Jehová con todo el corazón. Comparte una breve experiencia personal en la que tuviste que confiar en el Señor en lugar de tu propio entendimiento.'
    }
  },
  {
    id: '3',
    puntos: 100,
    usada: false,
    pregunta: {
      id: 'p3',
      puntos: 100,
      tipo: 'multiple',
      pregunta: '¿Cuál es el primer paso o el "principio de la sabiduría" según Proverbios 1:7?',
      opciones: [
        'El temor de Jehová',
        'La riqueza terrenal',
        'El estudio académico',
        'La fama entre los hombres'
      ],
      respuestaCorrecta: 0
    }
  },
  {
    id: '4',
    puntos: 100,
    usada: false,
    pregunta: {
      id: 'p4',
      puntos: 100,
      tipo: 'experiencia',
      pregunta: 'Proverbios 1:8 nos habla de escuchar los consejos de los padres. Explica cómo un consejo de tus padres o líderes de la Iglesia te ayudó a tomar una buena decisión.'
    }
  },

  // ==================== 200 PUNTOS (4 CASILLAS) ====================
  {
    id: '5',
    puntos: 200,
    usada: false,
    pregunta: {
      id: 'p5',
      puntos: 200,
      tipo: 'multiple',
      pregunta: '¿Cuál es la conclusión principal que da el Predicador en Eclesiastés 12:13 sobre el fin de todo asunto?',
      opciones: [
        'Acumular bienes materiales',
        'Teme a Dios y guarda sus mandamientos',
        'Buscar la gloria del mundo',
        'Evitar las pruebas a toda costa'
      ],
      respuestaCorrecta: 1
    }
  },
  {
    id: '6',
    puntos: 200,
    usada: false,
    pregunta: {
      id: 'p6',
      puntos: 200,
      tipo: 'experiencia',
      pregunta: 'Explica qué significa para ti la frase de Proverbios 3:6: "Él enderezará tus veredas", y cómo se aplica al camino de la vida.'
    }
  },
  {
    id: '7',
    puntos: 200,
    usada: false,
    pregunta: {
      id: 'p7',
      puntos: 200,
      tipo: 'multiple',
      pregunta: 'En Proverbios 16:24, ¿con qué se comparan las "panales de miel" o palabras suaves?',
      opciones: [
        'Con la amargura del alma',
        'Con suavidad al alma y medicina para los huesos',
        'Con un engaño sutil',
        'Con cosas sin valor'
      ],
      respuestaCorrecta: 1
    }
  },
  {
    id: '8',
    puntos: 200,
    usada: false,
    pregunta: {
      id: 'p8',
      puntos: 200,
      tipo: 'experiencia',
      pregunta: 'Menciona una manera práctica de "examinar la senda de tus pies" (Proverbios 4:26) para asegurarte de que vas por el camino correcto este año.'
    }
  },

  // ==================== 300 PUNTOS (4 CASILLAS) ====================
  {
    id: '9',
    puntos: 300,
    usada: false,
    pregunta: {
      id: 'p9',
      puntos: 300,
      tipo: 'multiple',
      pregunta: 'Según Proverbios 2:6, ¿de dónde proviene la verdadera sabiduría?',
      opciones: [
        'De la prudencia humana',
        'De la boca de Jehová',
        'De las filosofías del mundo',
        'De la vanidad terrenal'
      ],
      respuestaCorrecta: 1
    }
  },
  {
    id: '10',
    puntos: 300,
    usada: false,
    pregunta: {
      id: 'p10',
      puntos: 300,
      tipo: 'experiencia',
      pregunta: 'El manual sugiere aplicar los consejos de comunicación de Proverbios 15 a las redes sociales. Da un ejemplo de cómo podemos ser pacificadores al interactuar por mensajes o redes.'
    }
  },
  {
    id: '11',
    puntos: 300,
    usada: false,
    pregunta: {
      id: 'p11',
      puntos: 300,
      tipo: 'multiple',
      pregunta: '¿Qué nos aconseja Proverbios 3:7 sobre la autosuficiencia?',
      opciones: [
        'Sé sabio según tu propio criterio',
        'No seas sabio en tu propia opinión; teme a Jehová',
        'Ignora la opinión de los demás',
        'Confía plenamente en tu entendimiento'
      ],
      respuestaCorrecta: 1
    }
  },
  {
    id: '12',
    puntos: 300,
    usada: false,
    pregunta: {
      id: 'p12',
      puntos: 300,
      tipo: 'experiencia',
      pregunta: 'En Proverbios 16:32 se enseña que "mejor es el que tarda en airarse que el fuerte". Comparte una experiencia o reflexión sobre el valor del autocontrol en momentos de tensión.'
    }
  },

  // ==================== 500 PUNTOS (4 CASILLAS) ====================
  {
    id: '13',
    puntos: 500,
    usada: false,
    pregunta: {
      id: 'p13',
      puntos: 500,
      tipo: 'multiple',
      pregunta: 'En el libro de Eclesiastés, ¿a qué término se le atribuye el significado de "temporal" o "sin importancia eterna"?',
      opciones: [
        'Sabiduría',
        'Vanidad',
        'Prudencia',
        'Verdad'
      ],
      respuestaCorrecta: 1
    }
  },
  {
    id: '14',
    puntos: 500,
    usada: false,
    pregunta: {
      id: 'p14',
      puntos: 500,
      tipo: 'experiencia',
      pregunta: 'Proverbios 31 describe los atributos de una "mujer virtuosa". Menciona dos de estas cualidades y explica cómo influyen positivamente en la familia y la Iglesia.'
    }
  },
  {
    id: '15',
    puntos: 500,
    usada: false,
    pregunta: {
      id: 'p15',
      puntos: 500,
      tipo: 'multiple',
      pregunta: 'Según el élder David A. Bednar mencionado en el manual, ¿en qué se diferencia "el temor del Señor" de los temores mundanos?',
      opciones: [
        'Es miedo paralizante',
        'Es reverencia, amor y confianza profunda hacia Dios',
        'Es una fobia a los mandamientos',
        'Es una duda constante'
      ],
      respuestaCorrecta: 1
    }
  },
  {
    id: '16',
    puntos: 500,
    usada: false,
    pregunta: {
      id: 'p16',
      puntos: 500,
      tipo: 'experiencia',
      pregunta: 'Eclesiastés nos enseña que muchas cosas materiales son temporales ("vanidad"). Explica qué actividades o decisiones de esta semana nos ayudan a centrarnos en lo que tiene valor eterno.'
    }
  }
];