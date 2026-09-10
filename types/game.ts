export type TipoPregunta = 'multiple' | 'experiencia';

export interface Pregunta {
  id: string;
  puntos: number;
  tipo: TipoPregunta;
  pregunta: string;
  opciones?: string[];
  respuestaCorrecta?: number;
}

export interface Casilla {
  id: string;
  puntos: number;
  usada: boolean;
  pregunta: Pregunta;
}

export interface Equipo {
  nombre: string;
  puntaje: number;
}