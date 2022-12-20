import style from './Projects.module.css';
import styleContainer from '../../common/styles/Container.module.css'
import Project from "./Project/Project";
import {Title} from "../../common/components/Title/Title";
import socialImg from "../../assets/image/social_network4.webp"
import todoImg from "../../assets/image/todolist3.webp"

const TD_DESCRIPTION = 'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.'
const SN_DESCRIPTION = 'Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr.'


function Projects() {
    return (
        <div className={style.projects}>
            <div className={style.content + ' ' + styleContainer.container}>
                <div className={style.title}>
                    <Title title={"My Projects_"} />
                </div>
                <div className={style.projectsItems}>
                    <Project
                        title={"Todolist web app for you company"} description={TD_DESCRIPTION}
                        imgProject={todoImg}/>
                    <Project
                        title={"Social Network web app for you"} description={SN_DESCRIPTION}
                        imgProject={socialImg}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;