import { useState } from 'react'
import './App.css'

import WeatherApp from './Weatherapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Weather App</h1>
        <WeatherApp/>
      </div>
    </>
  )
}

export default App
