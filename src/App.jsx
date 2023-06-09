import { useContext } from 'react'
import { CountContext } from './context/countContext'
import './App.css'

function App() {
  const { count, incrementCount } = useContext(CountContext);

  return (
    <>
      <div className="card">
        <button onClick={incrementCount}>count is {count}</button>
      </div>
    </>
  )
}

export default App
