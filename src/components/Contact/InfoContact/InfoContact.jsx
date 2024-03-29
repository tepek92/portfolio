import style from './InfoContact.module.scss';


export const InfoContact = () => {

    return (
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
                    <li><a href="https://t.me/pavelrasyk">Telegram</a></li>
                </ul>
            </div>
        </div>

    );
}