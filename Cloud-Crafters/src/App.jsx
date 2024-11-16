import { useState } from 'react'
import './App.css'
import PropertyList from './PropertyList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PropertyList/>
    </>
  )
}

export default App
