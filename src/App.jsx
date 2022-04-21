import { useEffect, useState } from 'react'
import './index.css'
import SchemeDisplay from './components/SchemeDisplay'
import SchemeSelector from './components/SchemeSelector'

function App () {
  const [scheme, setScheme] = useState([])

  const [lightMode, setLightMode] = useState(
    localStorage.getItem('lightMode') !== null
      ? JSON.parse(localStorage.getItem('lightMode'))
      : true
  )

  useEffect(() => {
    localStorage.setItem('lightMode', JSON.stringify(lightMode))
  }, [lightMode])

  const [colorSelection, setColorSelection] = useState(
    JSON.parse(localStorage.getItem('schemeSelections')) ||
    {
      seedColor: '#f55A5A',
      colorMode: 'analogic',
      colorQuantity: 5
    }
  )

  useEffect(() => {
    localStorage.setItem('schemeSelections', JSON.stringify(colorSelection))
  }, [colorSelection])

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

  function handleLightModeToggle () {
    setLightMode(prevMode => !prevMode)
  }

  return (
    <div className='App' data-theme={lightMode ? '' : 'dark'}>
      <SchemeSelector
        lightMode={lightMode}
        handleLightModeToggle={handleLightModeToggle}
        colorSelection={colorSelection}
        handleChange={handleChange}
      />
      <SchemeDisplay schemeColors={scheme} />
    </div>
  )
}

export default App
