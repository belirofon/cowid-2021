import React from 'react';
import styles from './Header.css';
import {Sidebar} from "./sidebar";


export function Header () {
    return (
        <header className="header">
            <!-- side bar panel  -->
            <Sidebar/>
        </header>
    )
}
