import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    //parece que esto se usa por que no estoy usando clases y es para usar los mount
    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Desarrolladora FrontEnd', 'PMP', 'Scrum Master' ] 
        });
    },[])

    return (
        <div className="intro" id="intro" >
         <div className="introWrapper">
            <div className="wrapper">
                 {/*<h2>Hi There, I'm</h2>*/}
                 <h2>Hola, Soy</h2>
                 <h1>Ruth Stella Cruz Cetina</h1>
                 <h3><span ref={textRef}></span></h3>
             </div>            
             <a href="#about">
                 <img src="assets/down.png" alt="" />
             </a>
         </div>                 
        </div>
    )
}
