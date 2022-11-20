import style from './Contact.module.css';
import styleContainer from '../../common/styles/Container.module.css'


function Contact() {
    return (
        <div className={style.contact}>
            <div className={style.content + ' ' + styleContainer.container}>
                <div className={style.title}>
                    <h3>Контакты</h3>
                </div>
                <form className={style.form}>
                    <input type="text" placeholder="Имя"/>
                    <input type="text" placeholder="Почта"/>
                    <textarea placeholder="Пожелания"/>
                </form>
                <div className={style.button}>
                    <span>Отправить</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;