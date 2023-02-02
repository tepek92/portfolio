import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import mePhoto from '../../assets/image/me.png';
import {GitHubIcon} from "../../common/components/Icons/GitGubIcon";
import {LinkedInIcon} from "../../common/components/Icons/LinkedInIcon";
import {Particle} from "./Particle/Particle";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import {TelegramIcon} from "../../common/components/Icons/TelegramIcon";

export const Main = () => {
    return (
        <div id="home" className={style.main}>
            <div className={style.content + ' ' + styleContainer.container}>
                <Particle/>
                <Tilt className="Tilt" options={{max: 25}} style={{
                    position: 'relative',
                    zIndex: 10
                }}>
                    <div className={style.photo}>
                        <img src={mePhoto} alt="mePhoto"/>
                    </div>
                </Tilt>
                <Fade bottom>
                    <div className={style.info}>
                        <p className={style.name}>Pavel Rasyk_</p>
                        <ReactTypingEffect
                            text={["frontend developer"]}
                        />
                        <div className={style.contact}>
                            <dl className={style.list}>
                                <dt>Age:</dt>
                                <dd>30</dd>
                                <dt>Phone:</dt>
                                <dd><a href="tel:89130050134">8 (913) 005-01-34</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:pavelrasyk@gmail.com">pavelrasyk@gmail.com</a></dd>
                                <dt>Address:</dt>
                                <dd>Russia, Novosibirsk</dd>
                            </dl>
                        </div>
                        <div className={style.socialNetwork}>
                            <a href="https://github.com/tepek92?tab=repositories">
                                <GitHubIcon/>
                            </a>
                            <a href="https://github.com/tepek92?tab=repositories">
                                <LinkedInIcon/>
                            </a>
                            <a href="https://t.me/pavelrasyk">
                                <TelegramIcon/>
                            </a>

                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}