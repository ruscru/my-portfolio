import "./skills.scss"
import {Settings, ArrowForwardIos} from '@material-ui/icons';


export default function Skills(props) {
    return(
        <div  className="Skills" id="skills">
        <div className="svgContainer" >
                <svg viewBox="0 0 500 100" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#F0CED9'}}></path>
                </svg>
        </div>
        <div className="skillsContainer">
            
            <h1>Skills & Tools</h1>
            <span>Las habilidades, herramientas y tecnologías que utilizo para dar vida a los productos:</span>
            <div className="container-icons">
                <div className="box-icon">
                    <i className="devicon devicon-html5-plain" aria-hidden="true"></i>
                    <p>HTML5</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-css3-plain" aria-hidden="true"></i>
                    <p>CSS3</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-javascript-plain" aria-hidden="true"></i>
                    <p>JavaScript</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-jquery-plain" aria-hidden="true"></i>
                    <p>jQuery</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-react-original" aria-hidden="true"></i>
                    <p>React</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-git-plain" aria-hidden="true"></i>
                    <p>Git</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-github-plain" aria-hidden="true"></i>
                    <p>Github</p>
                </div>
                <div className="box-icon">
                    <Settings className="devicon" />
                    <p>RESTful APIs</p>
                </div>
                <div className="box-icon">
                    <div className="container-img-i i-responsive">
                        <img src="assets/icon-tablet-phone-and-browser.svg" alt="" aria-hidden="true"/>
                    </div>
                    <p>Responsive Websites</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-sass-original" aria-hidden="true"></i>
                    <p>SASS</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-materialui-plain" aria-hidden="true"></i>
                    <p>Material UI</p>
                </div>
                <div className="box-icon">
                    <ArrowForwardIos className="devicon" />
                    <p>Command Line</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-visualstudio-plain" aria-hidden="true"></i>
                    <p>VS Code</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-wordpress-plain" aria-hidden="true"></i>
                    <p>WordPress</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-php-plain" aria-hidden="true"></i>
                    <p>PHP</p>
                </div>
                <div className="box-icon">
                    <i className="devicon devicon-mysql-plain" aria-hidden="true"></i>
                    <p>MySQL</p>
                </div>
                
            </div>
            <h2>Actualmente trabajando en:</h2>
            <p>Mejorar mis habilidades con react, además me encuentro entendiendo y prácticando Next.js y me divierto aprendiendo de animaciones con css.</p>
        </div>
        
        </div>
    );
}