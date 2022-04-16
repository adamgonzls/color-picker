import { useEffect, useState } from 'react'
import './App.css'
import SchemeDisplay from './components/SchemeDisplay'

function App () {
  const [colorSelection, setColorSelection] = useState({
    seedColor: '#f55A5A',
    colorMode: 'monochrome',
    colorQuantity: 5
  })

  const [scheme, setScheme] = useState([])

  const [lightMode, setLightMode] = useState(true)

  useEffect(() => {
    const colorString = (colorSelection.seedColor).replace(/[^\w ]/, '')
    const modeString = (colorSelection.colorMode).replace(/['"]/, '')
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorString}&mode=${modeString}&count=${colorSelection.colorQuantity}`)
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

  function handleToggleTheme () {
    setLightMode(prevMode => !prevMode)
  }

  return (
    <div className='App' data-theme={lightMode ? '' : 'dark'}>
      <header className='header'>
        <div className='picker'>
          <input
            className='picker__input'
            type='color'
            name='seedColor'
            onChange={handleChange}
            value={colorSelection.seedColor}
          />
          <select
            className='picker__input picker__mode'
            type='select'
            name='colorMode'
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
          <label
            htmlFor='colorQuantity'
            className='picker__quantity-label'
          >Number of colors:
            <input
              id='colorQuantity'
              className='picker__input picker__quantity'
              type='number'
              name='colorQuantity'
              onChange={handleChange}
              min='1'
              max='5'
              placeholder='5'
              value={colorSelection.colorQuantity}
            />
          </label>

        </div>
        <div className='switch__wrapper'>
          <label
            className='switch__label'
            htmlFor='switchInput'
          >
            <input
              id='switchInput'
              type='checkbox'
              className='switch__input'
              onClick={handleToggleTheme}
              value={lightMode}
            />
            <div className='switch__slider' />
          </label>
          <em className='switch__text'>{lightMode ? 'Light Mode' : 'Dark Mode'}</em>
        </div>
      </header>
      <SchemeDisplay schemeColors={scheme} />
    </div>
  )
}

export default App
