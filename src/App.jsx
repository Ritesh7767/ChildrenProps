import { useState } from 'react'
import './App.css'
import Gallery from './Gallery'
import Input from './Input'

function App() {

  let [images, setImages] = useState(0)

  return (
    <>
      <Input images={images} setImages={setImages} />
      <Gallery children={images}/>
    </>
  )
}

export default App
