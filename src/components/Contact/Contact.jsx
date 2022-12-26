import style from './Contact.module.css';
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";


function Contact() {
    return (
        <div id="contact" className={style.contact}>

            <div className={style.content + ' ' + styleContainer.container}>
                <div className={style.title}>
                    <Title color={"white"} title={"Get in touch_"}/>
                </div>
                <div className={style.infoBox}>
                    <div className={style.infoContacts}>
                        <div className={style.list}>
                            <dl>
                                <dt>Phone:</dt>
                                <dd><a href="tel:89130050134">8 (913) 005-01-34</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:pavelrasyk@gmail.com">pavelrasyk@gmail.com</a></dd>
                            </dl>
                        </div>
                        <div>
                            <ul>
                                <li><a href="https://github.com/tepek92?tab=repositories">GitHub</a></li>
                                <li><a href="https://github.com/tepek92?tab=repositories">Linkedin</a></li>
                                <li><a href="https://www.instagram.com/pavelrasyk/">Instagram</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className={style.formBox}>
                            <p className={style.formTitle}>Or just write me a letter here_</p>
                            <form className={style.form}>
                                <div className={style.formGroup}>
                                    <input type="text" placeholder="Your name"/>
                                    <span></span>
                                </div>
                                <div className={style.formGroup}>
                                    <input type="text" placeholder="Your e-mail"/>
                                </div>
                                <div className={style.formGroup}>
                                    <textarea placeholder="Type the message here"/>
                                </div>

                            </form>
                            <button>send</button>
                        </div>

                        <div className={style.footer}>
                            <p>© 2022 Pavel Rasyk. All Rights Reserved</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Contact;