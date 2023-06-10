//import { useContext } from 'react'
//import { CountContext } from './context/countContext'
import NavBar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Home from './components/Home';
import './App.css'
import Footer from './components/footer';


function App() {
  //const { count, incrementCount } = useContext(CountContext);

  return (
    <>
      <NavBar/>
      <Home/>
      <Jumbotron/>
      <Footer/>

      {/*
        <div className="card">
          <button onClick={incrementCount}>count is {count}</button>
        </div>*/
      }
    </>
  )
}

export default App
