import style from './Footer.module.css';


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.content}>
                <div className={style.name}>
                    <h3>Павел Расюк</h3>
                </div>
                <div className={style.socialNetwork}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div className={style.text}>
                    <span>(c) Все права защищены</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;