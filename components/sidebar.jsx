import React from 'react';
import styles from '../src/style/sidebar.css';

export function Sidebar () {
    <input type="checkbox" id="side-checkbox"/>
    <div className="side-panel">
        <label className="side-button-2" htmlFor="side-checkbox">+</label>
        <div className="side-title">информация о игре:</div>
        <ul>
            <p>Данная игра была придумана как домашний проект для саморазвития в будущих версиях
                планируется:<br></p>
            <li>Создание сценария нападения коров на независимом скрипте</li>
            <li>Создание английской версии(перевод и допил русской)</li>
            <li>Перенос игры на React</li>
            <li>Создание на основе игры SPA приложения</li>
            <li>Возможно, перенос игры на мобильные устройства</li>
        </ul>
    </div>
    <!-- buttons for panel -->
    <div className="side-button-1-wr">
        <label className="side-button-1" htmlFor="side-checkbox">
            <div className="side-b side-open">Больше информации</div>
        </label>
    </div>
    <!-- audio player - standart -->
    <audio className="audio" controls autoPlay id="audio" src="./audio/music.mp3">
    </audio>
    <!-- button's lang  -->
    <div className="button-wrapper">
        <button className="change-lang"><a href="/indexEN.html">en</a>
        </button>
    </div>
}