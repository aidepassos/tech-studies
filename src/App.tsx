import { Link } from 'react-router-dom'
import './App.css'
import type { JSX } from 'react';

// TODO: 
// - aditionar interface de licao
interface ILesson {
  id: string;
  title: string;
  content: string | JSX.Element; // O conteúdo pode ser string ou um elemento JSX
}
// - criar lista de licoes

// Dados de exemplo para as lições
const lessons: ILesson[] = []

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="flex flex-col sm:flex-row w-full max-w-6xl bg-white bg-opacity-90 rounded-lg shadow-2xl overflow-hidden">
        <Link to="/tech-studies/one">
          Go to Lesson 1
        </Link>
        <br />
        <Link to="/tech-studies/one">
          Go to Lesson 2
        </Link>
        <br />
        <Link to="/tech-studies/two">
          Go to Lesson 3
        </Link>
      </div>
    </div>
  )
}

export default App
