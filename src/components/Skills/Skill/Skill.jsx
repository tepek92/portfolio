import style from './Skill.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skill(props) {
    const {title, description, icon, faIcons} = props;
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                {faIcons && <FontAwesomeIcon icon={faIcons} className={style.test}/>}
                {icon && <img src={icon} alt="icon"/>}
                {/*<img src={icon} alt="icon"/>*/}
            </div>
            <h2 className={style.title}>{title}</h2>
            {/*<p className={style.description}>{description}</p>*/}
        </div>
    );
}

export default Skill;