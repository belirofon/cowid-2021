import React from 'react'
import './Button.css'

export interface IButtonProps {
  children?: React.ReactNode
}

export const Button: React.FC<IButtonProps> = () => {
  return (
    <button className={'Button'}>
      <a className={'__link'} href={""}>
        EN
      </a>
    </button>
  )
}
