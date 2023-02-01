import style from './Skills.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import {Title} from "../../common/components/Title/Title";
import reduxIcon from '../../assets/image/redux.svg'
import tsIcon from '../../assets/image/ts.svg'

import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import {faSquareJs} from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';


const REACT_DESCRIPTION = 'React makes it painless to create interactive UIs.'
const CSS_DESCRIPTION = 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation.'
const JS_DESCRIPTION = 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World '


function Skills() {
    return (
        <section id="skills" className={style.skills}>
            <Fade bottom>
                <div className={style.content + ' ' + styleContainer.container}>
                    <div className={style.title}>
                        <Title title={"My Skills_"}/>
                    </div>
                    <div className={style.skillsItems}>
                        <Skill faIcons={faSquareJs} title={"JS"} description={JS_DESCRIPTION}/>
                        <Skill icon={tsIcon} title={"TS"} description={JS_DESCRIPTION}/>
                        <Skill faIcons={faReact} title={"React"} description={REACT_DESCRIPTION}/>
                        <Skill icon={reduxIcon} title={"Redux"} description={REACT_DESCRIPTION}/>
                        <Skill faIcons={faHtml5} title={"HTML"} description={REACT_DESCRIPTION}/>
                        <Skill faIcons={faCss3Alt} title={"CSS"} description={CSS_DESCRIPTION}/>
                    </div>
                </div>
            </Fade>
        </section>
    )
        ;
}

export default Skills;