export default function SchemeDisplay ({ schemeColors }) {
  console.log(schemeColors)

  function handleCopyText (e) {
    const { innerText } = e.target
    console.log(innerText)
    navigator.clipboard.writeText(innerText)
  }

  return (
    <div className='color-display'>
      {schemeColors.map((color, i) => {
        return (
          <div key={i} className='color-display__column' style={{ backgroundColor: `${color.hex.value}` }}>
            <ul className='color-display__values'>
              <li onClick={handleCopyText}>{color.hex.value}</li>
              <li>{color.name.value}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}
