import style from './Skill.module.css';

function Skill({title, description}) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{description}</p>
        </div>
    );
}

export default Skill;