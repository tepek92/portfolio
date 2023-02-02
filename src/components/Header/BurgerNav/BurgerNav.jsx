import style from './BurgerNav.module.scss';
import {Link} from "react-scroll";
import {MenuIcon} from "../../../common/components/Icons/MenuIcon";
import {useState} from "react";
import {CloseIcon} from "../../../common/components/Icons/CloseIcon";

export const BurgerNav = () => {

    const [open, setOpen] = useState(false)
    const onClickHandler = () => {
        setOpen(prev => !prev)
    }
    const itemsStyle = open ? `${style.navBurgerItems} ${style.showMenuItems}` : style.navBurgerItems

    return (
        <div className={style.navBurger}>
            <div className={itemsStyle}>
                <Link
                    onClick={onClickHandler}
                    to="home"
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    home
                </Link>
                <Link
                    onClick={onClickHandler}
                    to="skills"
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    skills
                </Link>
                <Link
                    onClick={onClickHandler}
                    to="projects"
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    projects
                </Link>
                <Link
                    onClick={onClickHandler}
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    isDynamic={true}
                >
                    contact
                </Link>
            </div>
            <div className={style.navBtn} onClick={onClickHandler}>
                {open ? <CloseIcon/> : <MenuIcon/>}

            </div>
        </div>
    );
}