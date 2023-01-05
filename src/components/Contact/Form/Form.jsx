import style from './Form.module.scss';
import {WarningIcon} from "../../../common/components/Icons/WarningIcon";
import {useFormik} from "formik";
import * as Yup from 'yup';

function Form() {

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
            alert(`Представим, что запрос ушел на сервер и отправилось письмо:)
            name: ${values.name}
            email: ${values.email}
            text message: ${values.text}`);
            formik.resetForm();
        },
    });

    const nameStyle = formik.errors.name && formik.touched.name ? style.error : '';
    const mailStyle = formik.errors.email && formik.touched.email ? style.error : '';
    const textStyle = formik.errors.text && formik.touched.text ? style.error : '';

    return (
        <div>
            <div className={style.formBox}>
                <p className={style.formTitle}>Or just write me a letter here_</p>

                <form onSubmit={formik.handleSubmit} className={style.form}>
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

export default Form;