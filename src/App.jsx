import { useState } from 'react'

import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("black")


  const handleColor = (newColor) => {
    setColor(newColor)
  }
  return (
  

    <div style={{backgroundColor: color}}>

    

  <Button onChangeColor={handleColor}/>

</div>
    
  )
}

export default App
