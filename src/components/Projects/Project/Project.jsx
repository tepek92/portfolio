import style from './Project.module.scss';

function Project({title, description, imgProject, link}) {
    return (
        <div className={style.project}>
            <div className={style.imgBox}>
                <img src={imgProject} alt="project"/>
            </div>
            <div className={style.textBox}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
                <p className={style.stack}>Used stack:</p>
                <ul className={style.tags}>
                    <li>type script</li>
                    <li>html5</li>
                    <li>css3</li>
                    <li>react</li>
                    <li>redux</li>
                </ul>
                <a className={style.linkProject} href={link}>www.github.com</a>
            </div>
        </div>
    );
}

export default Project;