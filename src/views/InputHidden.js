import React, { PureComponent, createRef } from 'react'

class InputHidden extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      readOnly: true,
      value: ''
    }

    this.inputRef = createRef()
  }

  componentDidMount() {
    this.setFocus()
  }

  setFocus = () => {
    this.setState(
      prevState => ({
        ...prevState,
        readOnly: true
      }),
      () => {
        // timeout prevent that focus() open the mobile keyboard
        setTimeout(() => {
          if (this.inputRef.current) {
            this.inputRef.current.focus()
            this.setState(prevState => ({
              ...prevState,
              readOnly: false
            }))
          }
        }, 50)
      }
    )
  }

  render() {
    const { readOnly, value } = this.state

    return (
      <div>
        <input
          readOnly={readOnly}
          ref={this.inputRef}
          style={{
            width: 0,
            height: 0,
            opacity: 0,
            position: 'absolute',
            overflow: 'hidden',
            border: '1px solid transparent'
          }}
          value={value}
          onChange={({ target: { value: text } }) =>
            this.setState({ value: text })
          }
          onBlur={this.setFocus}
        />
        <p>
          <b>Setted value:</b> "{value}"
        </p>
        {readOnly ? <p>setting focus...</p> : null}
      </div>
    )
  }
}

export default InputHidden
