import style from './Projects.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from "../../common/components/Title/Title";
import socialImg from "../../assets/image/socialnetwork.png"
import todoImg from "../../assets/image/Todolist.png"
import cardImg from "../../assets/image/Cards.png"
import Fade from 'react-reveal/Fade';

// const TD_DESCRIPTION = 'Classic task manager. Implemented login and logout. Creation of several todolists, removal. You can add tasks, mark completed tasks, and filter tasks by status.'
// const SN_DESCRIPTION = 'In this project, I worked with class components and some old libraries. What can be useful in projects with legacy code.'
// const CARDS_DESCRIPTION = `Create learning cards and learn from them.
// You can create your own cards by adding pictures to them, as well as search for cards created by other users.`


const TD_DESCRIPTION = [
    'login / logout ',
    'creating and deleting todolists',
    'creating and deleting tasks ',
    'flag completed ',
    'task filtering ',
    'editing the heading of todolists and tasks',
]

const SN_DESCRIPTION = [
    'login / logout / captcha',
    'profile editing',
    'publishing posts',
    'pagination on the user page',
    'user subscription and unsubscription',
    'go to user page',
    'sending messages',
]

const CARDS_DESCRIPTION = [
    'login / registration / password recovery',
    'filtering and searching in tables',
    'pagination in tables',
    'adding and removing packs/cards',
    'adding pictures to questions',
    'card learning process',
    'profile editing',
    'server error handling',
]

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

const socialNetworkStack = [
    'typescript',
    'react',
    'redux',
    'react-router',
    'material-ui',
    'redux-form'
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
                            title={"Social Network"}
                            description={SN_DESCRIPTION}
                            stack={socialNetworkStack}
                            imgProject={socialImg}
                            link={"https://github.com/tepek92/samurai_way_ts"}
                        />

                    </div>
                </div>
            </Fade>
        </div>
    );
}