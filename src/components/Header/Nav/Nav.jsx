import style from './Nav.module.css';
import {Link} from "react-scroll";
// import {useState} from "react";

function Nav() {
    // const [active, setActive] = useState('');
    // const homeStyle = active === 'home' ? style.active : ''
    // const skillsStyle = active === 'skills' ? style.active : ''
    // const projectsStyle = active === 'projects' ? style.active : ''
    // const contactStyle = active === 'contact' ? style.active : ''


    return (
        <div className={style.nav}>
             {/*<span className={homeStyle} >*/}
            <Link
                // activeClass={homeStyle}
                to="home"
                // spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                // onClick={() => setActive('home')}
            >
                home
            </Link>
            {/*</span>*/}
            {/*<span className={skillsStyle}>*/}
            <Link
                // activeClass={skillsStyle}
                to="skills"
                // spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                // onClick={() => setActive('skills')}
            >
                skills
            </Link>
            {/*</span>*/}
            {/*<span className={projectsStyle}>*/}
            <Link
                // activeClass={projectsStyle}
                to="projects"
                // spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                // onClick={() => setActive('projects')}
            >
                projects
            </Link>
            {/*</span>*/}
            {/*<span className={contactStyle} >*/}
            <Link
                // activeClass={contactStyle}
                to="contact"
                // spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                isDynamic={true}
                // onClick={() => setActive('contact')}
            >
                contact
            </Link>
            {/*</span>*/}
        </div>
    );
}


export default Nav;