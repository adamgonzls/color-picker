export default function SchemeDisplay({ schemeColors }) {
  console.log(schemeColors)
  function handleCopyText(e) {
    const { innerText } = e.target
    navigator.clipboard.writeText(innerText)
  }

  return (
    <div className="color-display">
      {schemeColors.map((color, i) => {
        return (
          <div
            key={i}
            className="color-display__column"
            style={{ backgroundColor: `${color.hex.value}` }}
          >
            <ul className="color-display__values">
              <li tabIndex="0" onClick={handleCopyText}>
                {color.name.value}
              </li>
              <li tabIndex="0" onClick={handleCopyText}>
                {color.hex.value}
              </li>
              <li tabIndex="0" onClick={handleCopyText}>
                {color.rgb.value}
              </li>
              <li tabIndex="0" onClick={handleCopyText}>
                {color.hsl.value}
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}
