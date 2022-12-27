import style from './Contact.module.css';
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";
import InfoContact from "./InfoContact/InfoContact";
import Form from "./Form/Form";


function Contact() {

    return (
        <div id="contact" className={style.contact}>

            <div className={style.content + ' ' + styleContainer.container}>
                <div className={style.title}>
                    <Title color={"white"} title={"Get in touch_"}/>
                </div>
                <div className={style.infoBox}>
                    <InfoContact />
                    <Form />
                </div>

            </div>
        </div>
    );
}

export default Contact;