import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-blue-600">
          Hello World!
        </h1>
      </div>
      <Link to="/tech-studies/one" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"      >
        Go to Lesson 1
      </Link>
    </>
  )
}

export default App
