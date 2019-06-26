import React, { useState, useRef, useEffect } from 'react'

const InputHidden = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const setFocus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    setFocus()
  })

  return (
    <div>
      <div
        contentEditable
        ref={inputRef}
        style={{
          width: 0,
          height: 0,
          opacity: 0,
          position: 'absolute',
          overflow: 'hidden',
          border: '1px solid transparent'
        }}
        value={value}
        onInput={({ target: { innerText } }) => setValue(innerText)}
        onBlur={setFocus}
      />
      <p>
        <b>Value setted:</b> "{value}"
      </p>
    </div>
  )
}

export default InputHidden
