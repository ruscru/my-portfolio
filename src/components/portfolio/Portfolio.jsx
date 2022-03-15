import data from "../../data.json";
import {GitHub, Launch} from "@material-ui/icons"
import "./portfolio.scss";


export default function Portfolio() {
        
    return (
        <div className="portfolio" id="portfolio" >
            <h1>Work</h1>
            <div className="portfolioContainer">
                {
                    data.map((item) =>(
                        <div className="box-portfolio" key={item.id}>
                            <div className="left">
                                <div className="box">
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                            <div className="right">
                                <h2>{item.title}</h2>
                                <div className="text-project">{item.text}</div>
                                <ul className="tech-project-list">
                                    {
                                        item.tech.map((tech, index) =>(
                                            <li key={"li"+index}>{tech}</li>
                                        ))
                                    }
                                </ul>
                                <div className="links">
                                    <a href={item.url} target="_blank" rel="noreferrer"><Launch className="iconLink" /></a>
                                    <a href={item.github} target="_blank" rel="noreferrer"><GitHub className="iconLink" /></a>                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
               
            </div>
            
            
        </div>
    )
}
