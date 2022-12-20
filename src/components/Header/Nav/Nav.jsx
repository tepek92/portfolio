import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            {/*<a href="?#">Главная</a>*/}
            {/*<a href="?#">Скилы</a>*/}
            {/*<a href="?#">Проекты</a>*/}
            {/*<a href="?#">Контакты</a>*/}
            <a href="?#">home</a>
            <a href="?#">skills</a>
            <a href="?#">project</a>
            <a href="?#">contact</a>
        </div>
    );
}

export default Nav;