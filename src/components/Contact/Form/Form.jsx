import style from './Form.module.scss';
import {WarningIcon} from "../../../common/components/Icons/WarningIcon";
import {useFormik} from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import {useRef} from "react";
import {useSnackbar} from 'react-simple-snackbar'

const options = {
    position: 'bottom-left',
    style: {
        backgroundColor: 'rgb(56, 142, 60)',
        fontFamily: 'Roboto, sans-serif;',
        fontSize: '16px',
        textAlign: 'center',
    },
}

export const Form = () => {
    const form = useRef();
    const [openSnackbar] = useSnackbar(options)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            text: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('field cannot be empty'),
            text: Yup.string()
                .required('field cannot be empty'),
            email: Yup.string().email('Invalid email address').required('field cannot be empty'),
        }),
        onSubmit: (values) => {
            emailjs.sendForm('service_fgg8kun', 'template_dloiq3k', form.current
                , 'N_E3DrHnfQ7L1WTit')
                .then((result) => {
                    openSnackbar('Your message has been sent, thanks!')
                    formik.resetForm();
                }, (error) => {
                    console.log(error.text);
                });
        },
    });

    const nameStyle = formik.errors.name && formik.touched.name ? style.error : '';
    const mailStyle = formik.errors.email && formik.touched.email ? style.error : '';
    const textStyle = formik.errors.text && formik.touched.text ? style.error : '';

    return (
        <div>
            <div className={style.formBox}>
                <p className={style.formTitle}>Or just write me a letter here_</p>

                <form ref={form} onSubmit={formik.handleSubmit} className={style.form}>
                    <div className={style.formGroup}>
                        <input
                            autoComplete={"of"}
                            className={nameStyle}
                            type="text"
                            placeholder="Your name"
                            {...formik.getFieldProps('name')}
                        />
                        {nameStyle &&
                            <span className={style.textError}>
                                <WarningIcon/>
                                {formik.errors.name}
                            </span>
                        }
                    </div>
                    <div className={style.formGroup}>
                        <input
                            autoComplete={"of"}
                            className={mailStyle}
                            type="text"
                            placeholder="Your e-mail"
                            {...formik.getFieldProps('email')}
                        />
                        {mailStyle &&
                            <span className={style.textError}>
                                <WarningIcon/>
                                {formik.errors.email}
                        </span>
                        }

                    </div>

                    <div className={style.formGroup}>
                        <textarea
                            autoComplete={"of"}
                            className={textStyle}
                            placeholder="Type the message here"
                            {...formik.getFieldProps('text')}
                        />
                        {textStyle &&
                            <span className={style.textError + ' ' + style.textAreaError}>
                                <WarningIcon/>
                                {formik.errors.text}
                            </span>
                        }
                    </div>
                    <button type="submit">send</button>

                </form>
            </div>


            <div className={style.footer}>
                <p>© 2022 Pavel Rasyk. All Rights Reserved</p>
            </div>
        </div>
    );
}