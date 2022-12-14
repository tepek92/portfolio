import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import mePhoto from '../../assets/image/me.png'
import {GitHubIcon} from "../../common/components/Icons/GitGubIcon";
import {LinkedInIcon} from "../../common/components/Icons/LinkedInIcon";
import {InstagramIcon} from "../../common/components/Icons/InstagramIcon";

function Main() {
    return (
        <div id="home" className={style.main}>
            <div className={style.content + ' ' + styleContainer.container}>
                <div className={style.photo}>
                    <img src={mePhoto} alt="mePhoto"/>
                </div>

                <div className={style.info}>
                    <p className={style.name}>Pavel Rasyk_</p>
                    <p className={style.work}>frontend developer</p>
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
                            <GitHubIcon />
                        </a>
                        <a href="https://github.com/tepek92?tab=repositories">
                            <LinkedInIcon />
                        </a>
                        <a href="https://www.instagram.com/pavelrasyk/">
                            <InstagramIcon />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;