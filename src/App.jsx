import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Photo1 } from './components/Photo1'
import { Photo2 } from './components/Photo2'
import { Photo3 } from './components/Photo3'
import { Photo4 } from './components/Photo4'
import { Photo5 } from './components/Photo5'
import { Photo6 } from './components/Photo6' 
import Navigation from './components/Navigation';

function App() {


  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id="title" className='text-center my-3' >Proyecto Galeria</h1>
        </div>
        <Routes>
          <Route path='/photo1' element={<Photo1 className='image-size' />} />
          <Route path='/photo2' element={<Photo2 className='image-size'/>}  />
          <Route path='/photo3' element={<Photo3 className='image-size'/>} />
          <Route path='/photo4' element={<Photo4 className='image-size'/>} />
          <Route path='/photo5' element={<Photo5 className='image-size'/>} />
          <Route path='/photo6' element={<Photo6 className='image-size'/>} />
        </Routes>
        <Navigation />
      </BrowserRouter>

    </>
  )
}

export default App