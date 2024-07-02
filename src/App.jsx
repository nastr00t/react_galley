import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Photo1 } from './components/Photo1'
import { Photo2 } from './components/Photo2'
import { Photo3 } from './components/Photo3'
import { Photo4 } from './components/Photo4'
import { Photo5 } from './components/Photo5'
import { Photo6 } from './components/Photo6' 

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/photo1' element={<Photo1 />} />
          <Route path='/photo2' element={<Photo2 />}  />
          <Route path='/photo3' element={<Photo3 />} />
          <Route path='/photo4' element={<Photo4 />} />
          <Route path='/photo5' element={<Photo5 />} />
          <Route path='/photo6' element={<Photo6 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App