import style from './Form.module.css';
import {useState} from "react";


function Form() {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [text, setText] = useState('');

    const changeName = e => {
        setName(e.currentTarget.value)
    }
    const changeMail = e => {
        setMail(e.currentTarget.value)
    }
    const changeText = e => {
        setText(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        setName('')
        setMail('')
        setText('')
    }

    return (
        <div>
            <div className={style.formBox}>
                <p className={style.formTitle}>Or just write me a letter here_</p>
                <form onSubmit={onSubmit} className={style.form}>
                    <div className={style.formGroup}>
                        <input
                            value={name}
                            onChange={changeName}
                            name="name"
                            type="text"
                            placeholder="Your name"
                        />
                    </div>
                    <div className={style.formGroup}>
                        <input
                            value={mail}
                            onChange={changeMail}
                            name="mail"
                            type="text"
                            placeholder="Your e-mail"
                        />
                    </div>
                    <div className={style.formGroup}>
                        <textarea
                            value={text}
                            onChange={changeText}
                            name="text"
                            placeholder="Type the message here"
                        />
                    </div>

                    <button>send</button>
                </form>
            </div>

            <div className={style.footer}>
                <p>© 2022 Pavel Rasyk. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Form;