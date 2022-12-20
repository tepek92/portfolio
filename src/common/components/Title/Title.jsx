import style from './Title.module.css'

export function Title({title}) {
    return <h2 className={style.title}>{title}</h2>
}