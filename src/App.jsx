import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect ran')
  }, [])

  return (
    <main className='App'>
      <div>
        <div className='picker'>
          <div className='picker__swatch' />
          <select name='' id=''>
            <option value=''>Monochrome</option>
          </select>
          <button className='picker__button'>Get color scheme</button>
        </div>
      </div>
      <div className='color-display'>
        <div>
          <div />
          <span className='color-display__value'>#f55a5a</span>
        </div>
        <div>
          <div />
          <span className='color-display__value'>#2B283A</span>
        </div>
        <div>
          <div />
          <span className='color-display__value'>#FBF3AB</span>
        </div>
        <div>
          <div />
          <span className='color-display__value'>#AAD1B6</span>
        </div>
        <div>
          <div />
          <span className='color-display__value'>#A626D3</span>
        </div>
      </div>
    </main>
  )
}

export default App
