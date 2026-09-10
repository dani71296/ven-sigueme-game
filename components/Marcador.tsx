import React from 'react';
import { Equipo } from '@/types/game';

interface Props {
  equipo1: Equipo;
  equipo2: Equipo;
  turnoEquipo: 1 | 2;
}

export const Marcador: React.FC<Props> = ({ equipo1, equipo2, turnoEquipo }) => {
  return (
    <header className="grid grid-cols-2 gap-8 mb-8">
      <div
        className={`p-6 rounded-2xl border-4 text-center transition-all ${
          turnoEquipo === 1
            ? 'border-yellow-400 bg-blue-900/80 shadow-lg shadow-yellow-500/20 scale-105'
            : 'border-slate-700 bg-slate-800/50 opacity-70'
        }`}
      >
        <h2 className="text-2xl font-bold tracking-wide uppercase text-blue-300">{equipo1.nombre}</h2>
        <p className="text-6xl font-black mt-2 text-yellow-400">{equipo1.puntaje} PTS</p>
        {turnoEquipo === 1 && (
          <span className="inline-block mt-2 bg-yellow-400 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase">
            Turno Activo
          </span>
        )}
      </div>

      <div
        className={`p-6 rounded-2xl border-4 text-center transition-all ${
          turnoEquipo === 2
            ? 'border-yellow-400 bg-red-900/80 shadow-lg shadow-yellow-500/20 scale-105'
            : 'border-slate-700 bg-slate-800/50 opacity-70'
        }`}
      >
        <h2 className="text-2xl font-bold tracking-wide uppercase text-red-300">{equipo2.nombre}</h2>
        <p className="text-6xl font-black mt-2 text-yellow-400">{equipo2.puntaje} PTS</p>
        {turnoEquipo === 2 && (
          <span className="inline-block mt-2 bg-yellow-400 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase">
            Turno Activo
          </span>
        )}
      </div>
    </header>
  );
};