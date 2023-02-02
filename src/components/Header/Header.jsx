import style from './Header.module.scss';
import {Nav} from "./Nav/Nav";
import Fade from 'react-reveal/Fade';
import {BurgerNav} from "./BurgerNav/BurgerNav";

export const Header = () => {
    return (
        <div className={style.header}>
            <Fade right>
                <div className={style.container}>
                    <Nav/>
                </div>
            </Fade>
            <BurgerNav/>
        </div>
    );
}