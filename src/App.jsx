import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Photo } from './components/Photo'
import { Photo4 } from './components/Photo4'
import { Photo5 } from './components/Photo5'
import { Photo6 } from './components/Photo6'
import Navigation from './components/Navigation';

function App() {


  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id="title" className='text-center my-3 pb-5' >Proyecto Galería</h1>
        </div>
        <Routes>
          <Route path='/photo1' element={<Photo id={1} texto="Imagen" className='image-size' />} />
          <Route path='/photo2' element={<Photo id={2} texto="Imagen" className='image-size' />} />
          <Route path='/photo3' element={<Photo id={3} texto="Imagen" className='image-size' />} />
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