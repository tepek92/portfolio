import style from './Header.module.scss';
import Nav from "./Nav/Nav";

function Header() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;
