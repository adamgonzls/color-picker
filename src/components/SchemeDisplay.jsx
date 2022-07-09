export default function SchemeDisplay({ schemeColors }) {
  function handleCopyText(e) {
    const { innerText } = e.target
    navigator.clipboard.writeText(innerText)
  }

  return (
    <div className='color-display'>
      {schemeColors.map((color, i) => {
        return (
          <div
            key={i}
            className='color-display__column'
            style={{ backgroundColor: `${color.hex.value}` }}
          >
            <ul className='color-display__values'>
              <li tabindex='0' onClick={handleCopyText}>
                {color.hex.value}
              </li>
              <li tabindex='0' onClick={handleCopyText}>
                {color.name.value}
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}
