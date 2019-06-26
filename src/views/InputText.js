import React, { useState } from 'react'

const InputText = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <input
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        autoFocus
      />
      <p>
        <b>Value setted:</b> "{value}"
      </p>
    </div>
  )
}

export default InputText
