import { useState } from "react";

function Lesson2() {
    let numeroDigitado = prompt("digite um número");
        const [message, setMessage] = useState<string>('');
        if numeroDigitado > 0 {
            setMessage('O número é positivo!');
        } else if (numeroDigitado < 0) {
            setMessage('O número é negativo!');
        } else {
            setMessage('O número é zero!');
        }


    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4 sm:p-8 font-sans">
            <div className="flex flex-col sm:flex-row w-full max-w-6xl bg-white bg-opacity-90 rounded-lg shadow-2xl overflow-hidden">
                <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg shadow-inner">
                    <p className="text-xl font-semibold text-gray-800 mb-4">Escreva por extenso o dia da semana:</p>
                    <input
                        type="text"
                        className="w-full max-w-md p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                        placeholder="Ex: segunda-feira, terça-feira, etc."
                    />
                    <button
                        onClick={verificar}
                        className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Verificar
                    </button>
                    {message && (
                        <p className="mt-6 text-lg font-medium text-green-700 bg-green-100 p-3 rounded-md animate-fade-in">
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Lesson2;