import React, { useState } from 'react';
import { Casilla } from '@/types/game';

interface Props {
  casilla: Casilla;
  onResolver: (esCorrecta: boolean, mantenerCasilla?: boolean) => void;
}

export const ModalPregunta: React.FC<Props> = ({ casilla, onResolver }) => {
  const { pregunta, puntos } = casilla;
  const [feedback, setFeedback] = useState<'correcto' | 'incorrecto' | null>(null);

  const manejarSeleccionOpcion = (indexOpcion: number) => {
    if (pregunta.respuestaCorrecta === undefined) return;

    if (indexOpcion === pregunta.respuestaCorrecta) {
      setFeedback('correcto');
      setTimeout(() => {
        onResolver(true, false); // Es correcta, se elimina la casilla del tablero
      }, 1500);
    } else {
      setFeedback('incorrecto');
    }
  };

  const reintentarOContinuar = () => {
    setFeedback(null);
    onResolver(false, true); // Es incorrecta, NO se elimina la casilla del tablero
  };

  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-6 z-50">
      <div className="bg-slate-900 border-2 border-amber-400/50 rounded-3xl p-8 max-w-2xl w-full text-center shadow-2xl relative">
        <span className="bg-amber-400 text-slate-950 text-sm font-black uppercase px-4 py-1.5 rounded-full">
          Valor: {puntos} Puntos
        </span>

        <h3 className="text-3xl font-extrabold mt-6 mb-6 leading-relaxed">
          {pregunta.pregunta}
        </h3>

        {/* FEEDBACK SI LA RESPUESTA FUE INCORRECTA */}
        {feedback === 'incorrecto' && (
          <div className="my-6 p-6 bg-rose-950/80 border-2 border-rose-500 rounded-2xl animate-shake">
            <span className="text-4xl block mb-2">❌</span>
            <h4 className="text-2xl font-black text-rose-300">¡Respuesta Incorrecta!</h4>
            <p className="text-slate-300 mt-2">Se descuentan {puntos} puntos y la casilla sigue disponible en el tablero.</p>
            <button
              onClick={reintentarOContinuar}
              className="mt-6 px-6 py-3 bg-rose-600 hover:bg-rose-500 font-bold rounded-xl text-white transition-all shadow-lg"
            >
              Pasar Turno al Siguiente Equipo
            </button>
          </div>
        )}

        {/* FEEDBACK SI LA RESPUESTA FUE CORRECTA */}
        {feedback === 'correcto' && (
          <div className="my-6 p-6 bg-emerald-950/80 border-2 border-emerald-500 rounded-2xl animate-bounce">
            <span className="text-4xl block mb-2">🎉</span>
            <h4 className="text-2xl font-black text-emerald-300">¡Respuesta Correcta!</h4>
            <p className="text-slate-300 mt-2">+{puntos} Puntos ganados. Eliminando casilla del tablero...</p>
          </div>
        )}

        {/* OPCIONES MÚLTIPLES (CLICKEABLES) */}
        {pregunta.tipo === 'multiple' && pregunta.opciones && !feedback && (
          <div className="grid grid-cols-1 gap-3 my-6 text-left">
            {pregunta.opciones.map((opcion, i) => (
              <button
                key={i}
                onClick={() => manejarSeleccionOpcion(i)}
                className="p-4 bg-slate-800 hover:bg-indigo-600 border border-slate-700 hover:border-indigo-400 rounded-xl text-lg font-medium text-left transition-all cursor-pointer flex items-center group"
              >
                <strong className="text-amber-400 group-hover:text-white mr-3 text-xl">
                  {String.fromCharCode(65 + i)}:
                </strong> 
                <span>{opcion}</span>
              </button>
            ))}
          </div>
        )}

        {/* MODO ABIERTO / EXPERIENCIA (MANTIENE LOS BOTONES DEL PRESENTADOR) */}
        {pregunta.tipo === 'experiencia' && (
          <>
            <div className="my-6 p-4 bg-purple-900/30 border border-purple-500/30 rounded-xl text-purple-200 italic">
              💬 Respuesta abierta: El participante debe explicar la frase o compartir una breve reflexión o experiencia.
            </div>

            <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={() => onResolver(true, false)}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-xl text-xl transition-all shadow-lg shadow-emerald-600/30"
              >
                ✅ Correcta (+{puntos})
              </button>
              <button
                onClick={() => onResolver(false, false)}
                className="px-8 py-4 bg-rose-600 hover:bg-rose-500 font-bold rounded-xl text-xl transition-all shadow-lg shadow-rose-600/30"
              >
                ❌ Incorrecta (-{puntos})
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};