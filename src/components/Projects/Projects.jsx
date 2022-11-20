import style from './Projects.module.css';
import styleContainer from '../../common/styles/Container.module.css'
import Project from "./Project/Project";

const TD_DESCRIPTION = 'Lorem ipsum dolor sit amet..'
const SN_DESCRIPTION = 'Lorem ipsum dolor sit amet..'


function Projects() {
    return (
        <div className={style.projects}>
            <div className={style.content + ' ' + styleContainer.container}>
                <div className={style.title}>
                    <h3>Мои проекты</h3>
                </div>
                <div className={style.projectsItems}>
                    <Project title={"Todolist"} description={TD_DESCRIPTION}/>
                    <Project title={"Social Network"} description={SN_DESCRIPTION}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;