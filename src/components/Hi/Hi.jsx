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
                    <p className={style.description}>I am a front-end developer and I love programming. I have
                        experience in SPA development using React, Redux, Typescript. I plan to further improve my
                        knowledge in this area and expand it with new technologies. In my free time, I solve puzzles on
                        Codewars. Open to your suggestions.</p>
                    <a className={style.btn}
                       href="https://drive.google.com/drive/folders/1suKTqpsq8TriJtUeJG6D_MVqABL-ZHx4?usp=sharing">
                        <img src={btnIcon} alt="btn"/>
                        Download CV
                    </a>
                </div>
            </Fade>
        </div>
    );
}