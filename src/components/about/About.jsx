import "./about.scss"
import {GitHub, LinkedIn, Facebook} from "@material-ui/icons"

export default function About() {

    return(
        <div className="About" id="about" >
            <div className="aboutContainer">
                <div className="left">
                    <div className="imageContainer">                   
                        <div className="avatar">
                            <img src="assets/Avatar.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1>Hola! My nombre es Ruth
                    <br/>
                    Soy una desarrolladora Front End
                    </h1>
                    <span>
                    Mi interes en el desarrollo web empezó en el 2014, cuando decidí intentar construir un sitio en wordpress. Siempre he sido alguien que tiene un lado muy lógico, cuando descubrí el desarrollo web me di cuenta que encajaria perfectamente, ya que puedo usar mi lado lógico para codificar. En el desarrollo web he encontrado retos interesantes, puedo ayudar a construir sitios orientados a los usuarios y a crear experiencias digitales increibles.
                    </span>
                    <div className="iconsSocials">
                        <a href="#"><GitHub className="iconMedia"/></a>
                        <a href="#"><LinkedIn className="iconMedia"/></a>
                        <a href="#"><Facebook className="iconMedia"/></a>
                    </div>
                </div>
            </div>
            
        </div>
    );

}