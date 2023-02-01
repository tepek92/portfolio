import style from './Header.module.scss';
import Nav from "./Nav/Nav";
import Fade from 'react-reveal/Fade';

function Header() {
    return (
        <div className={style.header}>
            <Fade right>
            <div className={style.container}>
                <Nav/>
            </div>
            </Fade>
        </div>
    );
}

export default Header;
