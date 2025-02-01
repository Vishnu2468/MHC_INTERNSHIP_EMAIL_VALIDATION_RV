import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Email_validation from './email_validation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Email_validation/>
    </>
  )
}

export default App
