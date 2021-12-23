import { FC } from 'react';
import './Content.css';

const sliderItems = {
  itemOne: `В 2019 году, по миру начало расспространяться смертельно опасное заболевание, получившие название - "КоронаВирус". В 2020 количество зараженных привысело 75 млн человек. Заражение вирусом пошло на спад, но никто не подозревал, что это только начало...`,
  itemTwo: `В 2021 болезнь получила неизвестную мутацию, которая в считанные дни заразила миллионны коров по всему миру, вирус получил название "COWid-21". За несколько недель появилась новая форма вируса, которая привела к появлению новой формы жизни на земле, или не жизни - зомби.`,
  itemThree: `Первые переносчики - коровы, начали изменяться только через несколько недель, к тому      моменту, литры зараженного молока и киллограмы говядины, были в сотнях мест по всему миру.            Человечество было обреченно,  заразу не удалось выявить вовремя, и зомби эпидемия охватила мир.`,
  itemFour: `Сейчас 2030 год, небольшие поселения еще сопротивляются атакам зомби, но так             продолжаться дальше не может. Твоя задача помочь людям перебраться в более спокойное место. Дерзай,         Охотник.`,
}
export const Content: FC = () => {
  return (
    <div  className="slider__wrapper">
      <h2 className="slider-title">Добро пожаловать, Охотник</h2>
      <div className="slider-container">
                <div className="slider-item subscribe">{sliderItems.itemOne}</div>
                <div className="slider-item subscribe">{sliderItems.itemTwo}</div>
                <div className="slider-item subscribe">{sliderItems.itemThree}</div>
                <div className="slider-item subscribe">{sliderItems.itemFour}</div>
      </div>
      <button className={'new-game'}>Новая игра</button>
    </div>
    
  )
}
