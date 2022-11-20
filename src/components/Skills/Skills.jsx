import style from './Skills.module.css';
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const REACT_DESCRIPTION = 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
const CSS_DESCRIPTION = 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).'
const JS_DESCRIPTION = 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.'


function Skills() {
    return (
        <div className={style.skills}>
            <div className={style.content + ' ' + styleContainer.container}>
                <div className={style.title}>
                    <h3>Мои скиллы</h3>
                </div>
                <div className={style.skillsItems}>
                    <Skill title={"React"} description={REACT_DESCRIPTION}/>
                    <Skill title={"CSS"} description={CSS_DESCRIPTION}/>
                    <Skill title={"JS"} description={JS_DESCRIPTION}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;