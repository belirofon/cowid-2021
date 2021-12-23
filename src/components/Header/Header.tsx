import React from 'react'
import { Button } from '../Button/Button'
import { ReactAudio } from '../Audio/AudioPlayer'
import './Header.css'
import Sidebar from 'components/Sidebar'

export interface IHeaderProps {
  children?: boolean,
  className?: string
}

export const Header: React.FC<IHeaderProps> = ({ children, className }) => {
  return (
    <header className={'Header'}>
      <Sidebar />
      <ReactAudio />
      <Button />
    </header>
  )
}
