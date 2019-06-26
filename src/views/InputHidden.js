import React, { useState, useRef } from 'react'
import get from 'lodash/get'

const InputHidden = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const returnFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        ref={inputRef}
        autoFocus
        style={{
          width: 0,
          height: 0,
          opacity: 0
        }}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        onBlur={returnFocus}
      />
      <p>
        <b>Value setted:</b> "{value}"
      </p>
    </div>
  )
}

export default InputHidden
