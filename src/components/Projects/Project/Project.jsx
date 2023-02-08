import style from './Project.module.scss';

export const Project = ({title, description, imgProject, link, stack}) => {
    const descriptionList = description.map(el => <li key={el}>{el}</li>)

    return (
        <div className={style.project}>
            <div className={style.imgBox}>
                <img src={imgProject} alt="project"/>
            </div>
            <div className={style.textBox}>
                <h3 className={style.title}>{title}</h3>
                <span className={style.description}>Implemented:</span>
                <ul className={style.description}>
                    {descriptionList}
                </ul>
                <p className={style.stack}>Used stack:</p>
                <ul className={style.tags}>
                    {stack.map(s => <li key={s}>{s}</li>)}
                </ul>
                <a className={style.linkProject} href={link}>www.github.com</a>
            </div>
        </div>
    );
}