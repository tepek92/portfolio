import style from './Project.module.css';

function Project({title, description}) {
    return (
        <div className={style.project}>
            <div className={style.imgBox}>
                <div className={style.link}>
                    <a href="?#"><h3>Смотреть</h3></a>
                </div>
            </div>
            <div className={style.textBox}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    );
}

export default Project;