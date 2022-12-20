import style from './Main.module.css';
import styleContainer from '../../common/styles/Container.module.css'
import mePhoto from '../../assets/image/me.png'

function Main() {
    return (
        <div className={style.main}>
            <div className={style.content + ' ' + styleContainer.container}>
                <div className={style.photo}>
                    <img src={mePhoto} alt="mePhoto"/>
                </div>

                <div className={style.info}>
                    {/*<span>Привет!</span>*/}
                    <p className={style.name}>Pavel Rasyk_</p>
                    <p className={style.work}>frontend developer</p>
                    <div className={style.contact}>
                        <dl className={style.list}>
                            <dt>Age:</dt>
                            <dd>30</dd>
                            <dt>Phone:</dt>
                            <dd>8 (913) 005 01 34</dd>
                            <dt>Email:</dt>
                            <dd>pavelrasyk@gmail.com</dd>
                            <dt>Address:</dt>
                            <dd>Russia, Novosibirsk</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;