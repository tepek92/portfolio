import style from './Projects.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from "../../common/components/Title/Title";
import socialImg from "../../assets/image/social_network4.webp"
import todoImg from "../../assets/image/Todolist.png"
import cardImg from "../../assets/image/Cards.png"
import Fade from 'react-reveal/Fade';

const TD_DESCRIPTION = 'Classic task manager. Implemented login and logout. Creation of several todolists, removal. You can add tasks, mark completed tasks, and filter tasks by status.'
const SN_DESCRIPTION = 'Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr.'
const CARDS_DESCRIPTION = `When we collect the answer ourselves and generate it, the brain works more actively. This principle is the basis of learning with cards. We see a question - one side of the card with an unfamiliar word or definition. We then try to find the answer on our own and, if we fail, we open the back side and check ourselves. You can create your own study cards in the app and share them with other students. You can decorate the cards with pictures.`

const cardsStack = [
    'typescript',
    'react',
    'redux-toolkit',
    'react-router',
    'material-ui',
    'eslint',
    'prettier',
    'redux-hook-form'
]
const todolistStack = [
    'typescript',
    'react',
    'redux-toolkit',
    'react-router',
    'material-ui',
    'jest',
    'storybook',
    'formik'
]



export const Projects = () => {
    return (
        <div id="projects" className={style.projects}>
            <Fade bottom>
                <div className={style.content + ' ' + styleContainer.container}>
                    <div className={style.title}>
                        <Title title={"My Projects_"}/>
                    </div>
                    <div className={style.projectsItems}>
                        <Project
                            title={"Cards training"}
                            description={CARDS_DESCRIPTION}
                            stack={cardsStack}
                            imgProject={cardImg}
                            link={"https://github.com/tepek92/cards"}
                        />
                        <Project
                            title={"Todolist"}
                            description={TD_DESCRIPTION}
                            stack={todolistStack}
                            imgProject={todoImg}
                            link={"https://github.com/tepek92/todolist"}
                        />
                        <Project
                            title={"Social Network web app for you"}
                            description={SN_DESCRIPTION}
                            stack={cardsStack}
                            imgProject={socialImg}
                            link={"https://github.com/tepek92/samurai_way_ts"}
                        />

                    </div>
                </div>
            </Fade>
        </div>
    );
}