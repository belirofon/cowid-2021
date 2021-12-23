import {useState, FC,  ReactNode } from 'react'
import './Menu.css';


interface IMenuProps {
  title?: string,
  items?: ReactNode[],
  active?: boolean,
  setIsActive: (active: boolean) => void;
}

export const Menu: FC<IMenuProps> = ({title, items, active, setIsActive}) => {
  const [menuActive, setMenuActive] =  useState(false);
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => {
      setIsActive(false);
      setMenuActive(!menuActive)
    }}>
      <div className="blur"/>
      <div className="menu__content" onClick={e => e.stopPropagation()}>
        <div className="menu__header">{title}</div>
        <div className="menu-title">
          <p className={"title-description"}>Данная игра была придумана как домашний проект для саморазвития,  в будущих версиях планируется:</p>
        </div>
        <ul>
            <li>
              <p>Доработка сценария на Typescrypt</p>
              <p>Перенос игры на мобильные устройста</p>
            </li>
        </ul>
      </div>
    </div>
  )
}
