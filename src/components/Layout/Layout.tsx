import React from 'react'
import './Layout.css'

export interface ILayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <div className={'Layout'}>{children}</div>
}
