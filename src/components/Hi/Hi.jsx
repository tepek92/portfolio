import style from './Hi.module.css';
import styleContainer from '../../common/styles/Container.module.css'
import btnIcon from '../../assets/image/btn_icon.png'
import {Title} from "../../common/components/Title/Title";

function Main() {
    return (
        <div className={style.hi}>
            <div className={style.content + ' ' + styleContainer.container}>
                <Title title={"Hi_"} />
                <p className={style.description}>I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.</p>
                <a className={style.btn} href="?#">
                    <img src={btnIcon} alt="btn"/>
                    Download CV
                </a>

            </div>
        </div>
    );
}

export default Main;