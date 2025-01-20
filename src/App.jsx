import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StatsProvider } from './components/StateContext.jsx'
import { Gameboard } from './components/Gameboard.jsx'
import { Cards } from './components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StatsProvider>
      <Gameboard />
      <Cards />
    </StatsProvider>
  )
}

export default App
