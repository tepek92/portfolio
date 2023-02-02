import style from './Title.module.css'

export const Title = ({title, color}) => {
    return <h2 style={{color: color}} className={style.title}><span>{title}</span></h2>
}