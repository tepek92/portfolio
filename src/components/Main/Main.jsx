import style from './Main.module.css';
import styleContainer from '../../common/styles/Container.module.css'

function Main() {
    return (
        <div className={style.main}>
            <div className={style.content + ' ' + styleContainer.container}>
                <div className={style.info}>
                    <span>Привет!</span>
                    <h3>Меня зовут Павел Расюк</h3>
                    <p>Я будущий frontend разоаботчик, учусь в It-incubator :)</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;