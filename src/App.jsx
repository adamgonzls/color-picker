import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)
  const [colorSelection, setColorSelection] = useState({
    seedColor: '#f55A5A',
    colorMode: 'Monochrome'
  })

  console.log(colorSelection)

  // useEffect(() => {
  //   console.log('useEffect ran')
  //   fetch(`https://www.thecolorapi.com/id?hex=${colorScheme.seedColor}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])

  function handleChange (e) {
    const { name, value } = e.target
    setColorSelection(prevColorSelection => {
      return {
        ...prevColorSelection,
        [name]: value
      }
    })
  }

  function handleCopyText (e) {
    const { innerText } = e.target
    console.log(innerText)
    navigator.clipboard.writeText(innerText)
  }

  return (
    <main className='App'>
      <div className='picker'>
        <input
          type='color'
          name='seedColor'
          onChange={handleChange}
          value={colorSelection.seedColor}
        />
        <select
          type='select'
          name='colorMode'
          className='picker__mode'
          onChange={handleChange}
          value={colorSelection.colorMode}
        >
          <option value='monochrome'>Monochrome</option>
          <option value='monochrome-dark'>Monochrome-Dark</option>
          <option value='monochrome-light'>Monochrome-Light</option>
          <option value='analogic'>Analogic</option>
          <option value='complement'>Complement</option>
          <option value='analogic-complement'>Analogic-Complement</option>
          <option value='triad'>Triad</option>
          <option value='quad'>Quad</option>
        </select>
        <button className='picker__submit'>Get color scheme</button>
      </div>
      <div className='color-display'>
        <div className='color-display__column' style={{ backgroundColor: '#f55A5A' }}>
          <span
            className='color-display__value'
            onClick={handleCopyText}
          >#f55A5A
          </span>
        </div>
        <div className='color-display__column' style={{ backgroundColor: '#2B283A' }}>
          <span className='color-display__value'>#2B283A</span>
        </div>
        <div className='color-display__column' style={{ backgroundColor: '#FBF3AB' }}>
          <span className='color-display__value'>#FBF3AB</span>
        </div>
        <div className='color-display__column' style={{ backgroundColor: '#AAD1B6' }}>
          <span className='color-display__value'>#AAD1B6</span>
        </div>
        <div className='color-display__column' style={{ backgroundColor: '#A626D3' }}>
          <span className='color-display__value'>#A626D3</span>
        </div>
      </div>
    </main>
  )
}

export default App
