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
                    Soy ingeniera de sistemas, apasionada por el desarrollo Front End en busca de proyectos que reten a mi capacidad lógica y analítica. Cuando descubrí el desarrollo web me di cuenta que encajaría perfectamente, ya que puedo usar mi lado lógico para codificar. 
                    <br />
                    En el desarrollo web he encontrado retos interesantes, puedo ayudar a construir sitios que impacten en la sociedad y a crear experiencias digitales increíbles. También tengo experiencia en los ámbitos de diseño de producto, gestión de proyectos y relación con el cliente.
                    </span>
                    <div className="iconsSocials">
                        <a href="https://github.com/ruscru" target="_blank" rel="noreferrer"><GitHub className="iconMedia"/></a>
                        <a href="https://www.linkedin.com/in/ruscru/" target="_blank" rel="noreferrer"><LinkedIn className="iconMedia"/></a>
                        <a href="https://www.facebook.com/ruth.s.cetina" target="_blank" rel="noreferrer"><Facebook className="iconMedia"/></a>
                    </div>
                </div>
            </div>
            
        </div>
    );

}