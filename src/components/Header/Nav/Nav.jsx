import style from './Nav.module.scss';
import {Link} from "react-scroll";

export const Nav = () => {

    return (
        <div className={style.nav}>
            <Link
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
            >
                home
            </Link>
            <Link
                to="skills"
                smooth={true}
                offset={-70}
                duration={500}
            >
                skills
            </Link>
            <Link
                to="projects"
                smooth={true}
                offset={-70}
                duration={500}
            >
                projects
            </Link>
            <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                isDynamic={true}
            >
                contact
            </Link>
        </div>
    );
}