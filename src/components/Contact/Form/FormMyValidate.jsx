import style from './Form.module.scss';
import {useState} from "react";
import {WarningIcon} from "../../../common/components/Icons/WarningIcon";

export const FormMyValidate = () => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorMail, setErrorMail] = useState('');
    const [errorText, setErrorText] = useState('');

    const validatorInput = () => {
        let error = false;
        if (name.trim() === '') {
            setErrorName('field cannot be empty')
            setErrorMail('')
            setErrorText('')
            error = true;
        } else if (mail.trim() === '') {
            setErrorMail('field cannot be empty')
            setErrorName('')
            setErrorText('')
            error = true;
        } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail.trim()))) {
            setErrorMail('Invalid email address')
            setErrorName('')
            setErrorText('')
            error = true;
        } else if (text.trim() === '') {
            setErrorText('field cannot be empty')
            setErrorName('')
            setErrorMail('')
            error = true;
        }

        return error;
    }



    const changeName = e => {
        setErrorName('')
        setName(e.currentTarget.value)
    }
    const changeMail = e => {
        setErrorMail('')
        setMail(e.currentTarget.value)
    }
    const changeText = e => {
        setErrorText('')
        setText(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!validatorInput()) {

            alert(`Представим, что запрос ушел на сервер и отправилось письмо:)
            name: ${name}
            email: ${mail}
            text message: ${text}`)

            setName('')
            setMail('')
            setText('')
        }
    }


    const nameStyle = errorName ? style.error : '';
    const mailStyle = errorMail ? style.error : '';
    const textStyle = errorText ? style.error : '';

    return (
        <div>
            <div className={style.formBox}>
                <p className={style.formTitle}>Or just write me a letter here_</p>
                <form onSubmit={onSubmit} className={style.form}>
                    <div className={style.formGroup}>
                        <input
                            className={nameStyle}
                            value={name}
                            onChange={changeName}
                            name="name"
                            type="text"
                            placeholder="Your name"
                        />
                        {errorName &&
                            <span className={style.textError}>
                                <WarningIcon/>
                                {errorName}
                            </span>
                        }
                    </div>
                    <div className={style.formGroup}>
                        <input
                            className={mailStyle}
                            value={mail}
                            onChange={changeMail}
                            name="mail"
                            type="text"
                            placeholder="Your e-mail"
                        />
                        {errorMail &&
                            <span className={style.textError}>
                                <WarningIcon/>
                                {errorMail}
                        </span>
                        }

                    </div>

                    <div className={style.formGroup}>
                        <textarea
                            className={textStyle}
                            value={text}
                            onChange={changeText}
                            name="text"
                            placeholder="Type the message here"
                        />
                        {errorText &&
                            <span className={style.textError + ' ' + style.textAreaError}>
                                <WarningIcon/>
                                {errorText}
                            </span>
                        }
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