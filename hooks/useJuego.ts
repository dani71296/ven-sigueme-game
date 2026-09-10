import { useState } from 'react';
import { CASILLAS_INICIALES } from '@/data/preguntas';
import { Casilla, Equipo } from '@/types/game';

export function useJuego() {
  const [faseJuego, setFaseJuego] = useState<'config' | 'jugando' | 'resultado'>('config');
  const [equipo1, setEquipo1] = useState<Equipo>({ nombre: 'Equipo A', puntaje: 0 });
  const [equipo2, setEquipo2] = useState<Equipo>({ nombre: 'Equipo B', puntaje: 0 });
  const [turnoEquipo, setTurnoEquipo] = useState<1 | 2>(1);

  const [casillas, setCasillas] = useState<Casilla[]>(CASILLAS_INICIALES);
  const [casillaSeleccionada, setCasillaSeleccionada] = useState<Casilla | null>(null);
  const [modoSeleccion, setModoSeleccion] = useState<'espera' | 'eleccion' | 'aleatorio'>('espera');
  const [estaSorteando, setEstaSorteando] = useState(false);

  const iniciarJuego = (e: React.FormEvent) => {
    e.preventDefault();
    setFaseJuego('jugando');
  };

  const seleccionarCasillaManual = (casilla: Casilla) => {
    if (casilla.usada || estaSorteando) return;
    setCasillaSeleccionada(casilla);
  };

  const seleccionarAleatorio = () => {
    const disponibles = casillas.filter((c) => !c.usada);
    if (disponibles.length === 0) return;

    setEstaSorteando(true);
    let contador = 0;
    const maxVueltas = 15;

    const intervalo = setInterval(() => {
      const idxAzar = Math.floor(Math.random() * disponibles.length);
      setCasillaSeleccionada(disponibles[idxAzar]);
      contador++;

      if (contador >= maxVueltas) {
        clearInterval(intervalo);
        setEstaSorteando(false);
      }
    }, 120);
  };

  const resolverPregunta = (esCorrecta: boolean, mantenerCasilla: boolean = false) => {
    if (!casillaSeleccionada) return;

    const puntos = casillaSeleccionada.puntos;

    if (turnoEquipo === 1) {
      setEquipo1((prev) => ({
        ...prev,
        puntaje: esCorrecta ? prev.puntaje + puntos : Math.max(0, prev.puntaje - puntos),
      }));
    } else {
      setEquipo2((prev) => ({
        ...prev,
        puntaje: esCorrecta ? prev.puntaje + puntos : Math.max(0, prev.puntaje - puntos),
      }));
    }

    let nuevasCasillas = casillas;
    if (!mantenerCasilla) {
      nuevasCasillas = casillas.map((c) =>
        c.id === casillaSeleccionada.id ? { ...c, usada: true } : c
      );
      setCasillas(nuevasCasillas);
    }

    setCasillaSeleccionada(null);
    setModoSeleccion('espera');

    const quedanCasillas = nuevasCasillas.some((c) => !c.usada);
    if (!quedanCasillas) {
      setFaseJuego('resultado');
    } else {
      setTurnoEquipo(turnoEquipo === 1 ? 2 : 1);
    }
  };

  return {
    faseJuego,
    equipo1,
    setEquipo1,
    equipo2,
    setEquipo2,
    turnoEquipo,
    casillas,
    casillaSeleccionada,
    modoSeleccion,
    setModoSeleccion,
    estaSorteando,
    iniciarJuego,
    seleccionarCasillaManual,
    seleccionarAleatorio,
    resolverPregunta,
  };
}