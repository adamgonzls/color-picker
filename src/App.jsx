import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect ran')
  }, [])

  return (
    <div className='App'>
      <div>
        <div className='picker'>
          <div className='picker__swatch' />
          <select name='' id=''>
            <option value=''>Monochrome</option>
          </select>
          <button className='picker__button'>Get color scheme</button>
        </div>
      </div>
    </div>
  )
}

export default App
