import style from './Skill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skill(props) {
    const {title, icon, faIcons} = props;
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                {faIcons && <FontAwesomeIcon icon={faIcons} className={style.fontIcon}/>}
                {icon && <img src={icon} alt="icon"/>}
            </div>
            <h2>{title}</h2>
        </div>
    );
}

export default Skill;