import style from './Hi.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import btnIcon from '../../assets/image/btn_icon.png'
import {Title} from "../../common/components/Title/Title";
import Fade from 'react-reveal/Fade';


export const Hi = () => {
    return (
        <div className={style.hi}>
            <Fade bottom>
                <div className={styleContainer.container}>
                    <Title title={"Hi_"}/>
                    <p className={style.description}>I am Junior Web developer able to build a Web presence from the
                        ground
                        up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing
                        well-designed, testable and efficient code using current best practices in Web development. Fast
                        learner, hard worker and team player who is proficient in an array of scripting languages and
                        multimedia Web tools.</p>
                    <a className={style.btn}
                       href="https://drive.google.com/file/d/14LfAsZxcetezuLZkjRnO-oGW_5LgYVyx/view?usp=sharing">
                        <img src={btnIcon} alt="btn"/>
                        Download CV
                    </a>
                </div>
            </Fade>
        </div>
    );
}