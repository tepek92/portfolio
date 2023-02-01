import style from './Contact.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";
import InfoContact from "./InfoContact/InfoContact";
import Form from "./Form/Form";
import Fade from 'react-reveal/Fade';


function Contact() {

    return (
        <div id="contact" className={style.contact}>
            <Fade bottom>

                <div className={style.content + ' ' + styleContainer.container}>
                    <div className={style.title}>
                        <Title color={"white"} title={"Get in touch_"}/>
                    </div>
                    <div className={style.infoBox}>
                        <InfoContact/>
                        <Form/>
                    </div>

                </div>
            </Fade>
        </div>
    );
}

export default Contact;