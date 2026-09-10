import React from 'react';

interface Props {
  modoSeleccion: 'espera' | 'eleccion' | 'aleatorio';
  setModoSeleccion: (modo: 'espera' | 'eleccion' | 'aleatorio') => void;
  onSeleccionarAleatorio: () => void;
  estaSorteando: boolean;
}

export const ControlesJuego: React.FC<Props> = ({
  modoSeleccion,
  setModoSeleccion,
  onSeleccionarAleatorio,
  estaSorteando,
}) => {
  return (
    <section className="flex justify-center gap-6 mb-8">
      <button
        onClick={() => setModoSeleccion('eleccion')}
        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
          modoSeleccion === 'eleccion'
            ? 'bg-blue-600 text-white ring-4 ring-blue-300'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
        }`}
      >
        🎯 Modo Elección
      </button>
      <button
        onClick={() => {
          setModoSeleccion('aleatorio');
          onSeleccionarAleatorio();
        }}
        disabled={estaSorteando}
        className="px-6 py-3 rounded-xl font-bold text-lg bg-purple-600 hover:bg-purple-500 text-white shadow-lg transition-all disabled:opacity-50"
      >
        {estaSorteando ? '🎲 Sorteando...' : '🎲 Modo Aleatorio'}
      </button>
    </section>
  );
};