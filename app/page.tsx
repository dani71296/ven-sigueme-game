'use client';

import React from 'react';
import { Marcador } from '@/components/Marcador';
import { Tablero } from '@/components/Tablero';
import { ModalPregunta } from '@/components/ModalPregunta';
import { ControlesJuego } from '@/components/ControlesJuego';
import { useJuego } from '@/hooks/useJuego';

export default function JuegoConcurso() {
  const {
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
  } = useJuego();

  // PANTALLA 1: CONFIGURACIÓN
  if (faseJuego === 'config') {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <form onSubmit={iniciarJuego} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-lg w-full shadow-2xl">
          <h1 className="text-3xl font-black text-center text-amber-400 mb-6 uppercase tracking-wider">
            📖 Ven, Sígueme - Trivia
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-1">Nombre Equipo 1</label>
              <input
                type="text"
                value={equipo1.nombre}
                onChange={(e) => setEquipo1({ ...equipo1, nombre: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white font-bold focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-1">Nombre Equipo 2</label>
              <input
                type="text"
                value={equipo2.nombre}
                onChange={(e) => setEquipo2({ ...equipo2, nombre: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white font-bold focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xl rounded-xl transition-all shadow-lg shadow-amber-500/20"
          >
            ¡Comenzar Concurso!
          </button>
        </form>
      </main>
    );
  }

  // PANTALLA 3: GANADOR
  if (faseJuego === 'resultado') {
    const esEmpate = equipo1.puntaje === equipo2.puntaje;
    const ganador = equipo1.puntaje > equipo2.puntaje ? equipo1 : equipo2;

    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 text-center">
        <div className="bg-slate-900 border-2 border-amber-400 rounded-3xl p-10 max-w-xl w-full shadow-2xl">
          <span className="text-6xl mb-4 block">🏆</span>
          <h1 className="text-4xl font-black text-amber-400 uppercase mb-2">¡Fin del Juego!</h1>

          {esEmpate ? (
            <p className="text-2xl font-bold text-slate-300 my-6">¡Ha sido un empate técnico!</p>
          ) : (
            <div className="my-6">
              <p className="text-lg text-slate-400">El equipo ganador es:</p>
              <p className="text-5xl font-black text-emerald-400 mt-2 uppercase">{ganador.nombre}</p>
              <p className="text-2xl font-bold text-amber-300 mt-2">{ganador.puntaje} Puntos</p>
            </div>
          )}

          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-8 py-3 bg-slate-800 hover:bg-slate-700 font-bold rounded-xl text-lg transition-all"
          >
            Reiniciar Juego
          </button>
        </div>
      </main>
    );
  }

  // PANTALLA 2: JUEGO PRINCIPAL
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col justify-between p-8 font-sans">
      <Marcador equipo1={equipo1} equipo2={equipo2} turnoEquipo={turnoEquipo} />

      {!casillaSeleccionada && (
        <ControlesJuego
          modoSeleccion={modoSeleccion}
          setModoSeleccion={setModoSeleccion}
          onSeleccionarAleatorio={seleccionarAleatorio}
          estaSorteando={estaSorteando}
        />
      )}

      <Tablero
        casillas={casillas}
        modoSeleccion={modoSeleccion}
        onSeleccionarCasilla={seleccionarCasillaManual}
      />

      {casillaSeleccionada && !estaSorteando && (
        <ModalPregunta casilla={casillaSeleccionada} onResolver={resolverPregunta} />
      )}
    </main>
  );
}