import style from './Contact.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";
import InfoContact from "./InfoContact/InfoContact";
import Form from "./Form/Form";
import Fade from 'react-reveal/Fade';


function Contact() {

    return (
        <div id="contact" className={style.contact}>

            <div className={style.content + ' ' + styleContainer.container}>
                <Fade bottom>

                    <div className={style.title}>
                        <Title color={"white"} title={"Get in touch_"}/>
                    </div>
                    <div className={style.infoBox}>
                        <InfoContact/>
                        <Form/>
                    </div>

                </Fade>
            </div>
        </div>
    );
}

export default Contact;