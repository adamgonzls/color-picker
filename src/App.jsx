import { useEffect, useState } from 'react'
import './App.css'
import SchemeDisplay from './components/SchemeDisplay'

function App () {
  const [colorSelection, setColorSelection] = useState({
    seedColor: '#f55A5A',
    colorMode: 'monochrome'
  })

  const [scheme, setScheme] = useState([])

  useEffect(() => {
    console.log('useEffect ran')
    const colorString = (colorSelection.seedColor).replace(/[^\w ]/, '')
    const modeString = (colorSelection.colorMode).replace(/[^\w ]/, '')
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorString}&mode=${modeString}`)
      .then(res => res.json())
      .then(data => setScheme(data.colors))
      .catch((error) => console.log(error))
  }, [colorSelection])

  function handleChange (e) {
    const { name, value } = e.target
    setColorSelection(prevColorSelection => {
      return {
        ...prevColorSelection,
        [name]: value
      }
    })
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
      <SchemeDisplay schemeColors={scheme} />
    </main>
  )
}

export default App
