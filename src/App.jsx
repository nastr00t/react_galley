import './App.css'
import Navigation from './components/Navigation'
import { Photo1 } from './components/Photo1'
import { Photo2 } from './components/Photo2'
import { Photo3 } from './components/Photo3'
import { Photo4 } from './components/Photo4'
import { Photo5 } from './components/Photo5'
import { Photo6 } from './components/Photo6' 


function App() {


  return (
    <>

      <div className='container'>
        <h1 id="title" className='text-center my-3'>Galería</h1>
      </div>
      <Photo1 />
      <Photo2 />
      <Photo3 />
      <Photo4 />
      <Photo5 />
      <Photo6 />
    </>
  )
}

export default App