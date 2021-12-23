import React, { FC, ReactNode, useState } from 'react'
import "./Sidebar.css"
import { Menu } from './Menu';

export interface ISidebarProps {
    children?: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    active?: boolean;
    
}

export const Sidebar : FC<ISidebarProps> = (className, active) => {
  const [menuActive, setMenuActive] =  useState(false);

  return (
        <div className="nav-container" onClick={() => {
          setMenuActive(!menuActive)
          }}>
          <nav>
            <div className="burger-btn">
              <span/>
            </div>
          </nav>
          <Menu active={menuActive} setIsActive={setMenuActive}  title={"Больше информации об игре"} />
        </div>
    )

}

