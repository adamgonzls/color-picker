import { useEffect, useState } from 'react'
import './index.css'
import SchemeDisplay from './components/SchemeDisplay'

function App () {
  const [colorSelection, setColorSelection] = useState({
    seedColor: '#f55A5A',
    colorMode: 'analogic',
    colorQuantity: 5
  })

  const [scheme, setScheme] = useState([])

  const [lightMode, setLightMode] = useState(
    localStorage.getItem('lightMode') !== null
      ? JSON.parse(localStorage.getItem('lightMode'))
      : true
  )

  useEffect(() => {
    const colorString = (colorSelection.seedColor).replace(/[^\w ]/, '')
    const modeString = (colorSelection.colorMode).replace(/['"]/, '')
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorString}&mode=${modeString}&count=${colorSelection.colorQuantity}`)
      .then(res => res.json())
      .then(data => setScheme(data.colors))
      .catch((error) => console.log(error))
  }, [colorSelection])

  useEffect(() => {
    localStorage.setItem('lightMode', JSON.stringify(lightMode))
  }, [lightMode])

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
            className='picker__input picker__input-color'
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
        <div className='switch__container'>
          <span
            className={`switch__text ${!lightMode ? 'switch__text--none' : ''}`}
            style={{
              visibility: lightMode
                ? 'initial'
                : 'hidden'
            }}
          >Light Mode
          </span>
          <div className='switch__wrapper'>
            <label
              className='switch__label'
              htmlFor='switchInput'
            >
              <input
                type='checkbox'
                id='switchInput'
                checked={lightMode}
                onChange={handleToggleTheme}
                className='switch__input'
              />
              <div
                className='switch__slider'
                style={
                  lightMode
                    ? { backgroundColor: colorSelection.seedColor }
                    : {}
                }
              />
            </label>
          </div>
          <span className='switch__text' style={{ visibility: lightMode ? 'hidden' : 'initial' }}>Dark Mode</span>
        </div>
      </header>
      <SchemeDisplay schemeColors={scheme} />
    </div>
  )
}

export default App
