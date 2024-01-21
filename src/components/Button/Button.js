import React from 'react'
import { TextButton, ButtonStyle } from './Button.styled'

const Button = ({ text, onClick, width }) => {
  return (
      <ButtonStyle
          type="button"
          onClick={onClick}
          $width={width}
      >
      <TextButton>{text}</TextButton>
    </ButtonStyle>
  )
}

export default Button
