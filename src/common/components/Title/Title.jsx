import style from './Title.module.css'

export function Title({title, color}) {
    return <h2 style={{color: color}} className={style.title}>{title}</h2>
}