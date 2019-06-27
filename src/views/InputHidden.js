import React, { useState, useRef, useEffect } from 'react'

const InputHidden = () => {
  const [value, setValue] = useState('')
  const [readOnly, setReadOnly] = useState(false)
  const inputRef = useRef(null)

  const setFocus = () => {
    setReadOnly(true)
    setTimeout(() => {
      inputRef.current.focus()
      setTimeout(() => {
        setReadOnly(false)
      }, 50)
    }, 100)
  }

  useEffect(() => {
    setFocus()
  }, [])

  return (
    <div>
      <input
        readOnly={readOnly}
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
        onChange={({ target: { value: text } }) => setValue(text)}
        onBlur={setFocus}
      />
      <p>
        <b>Setted value:</b> "{value}"
      </p>
      {readOnly ? <p>setting focus...</p> : null}
    </div>
  )
}

export default InputHidden
