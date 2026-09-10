import React from 'react';
import { Casilla } from '@/types/game';

interface Props {
  casillas: Casilla[];
  modoSeleccion: 'espera' | 'eleccion' | 'aleatorio';
  onSeleccionarCasilla: (casilla: Casilla) => void;
}

export const Tablero: React.FC<Props> = ({ casillas, modoSeleccion, onSeleccionarCasilla }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full my-auto">
      {casillas.map((casilla, idx) => (
        <button
          key={casilla.id}
          disabled={casilla.usada || modoSeleccion !== 'eleccion'}
          onClick={() => onSeleccionarCasilla(casilla)}
          className={`h-36 rounded-2xl border-2 flex flex-col items-center justify-center font-black text-3xl transition-all ${
            casilla.usada
              ? 'bg-slate-800/30 border-slate-800 text-slate-600 cursor-not-allowed'
              : modoSeleccion === 'eleccion'
              ? 'bg-gradient-to-br from-indigo-600 to-blue-700 border-indigo-400 text-amber-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 cursor-pointer'
              : 'bg-slate-800 border-slate-700 text-amber-400/50 cursor-not-allowed'
          }`}
        >
          <span>{casilla.usada ? '✓' : `${casilla.puntos}`}</span>
          {!casilla.usada && <span className="text-xs font-normal text-slate-300 mt-1">Casilla {idx + 1}</span>}
        </button>
      ))}
    </section>
  );
};