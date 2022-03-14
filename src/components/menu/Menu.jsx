import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className="menuWrapper ">
            <div className={"right " + (menuOpen && "active")}>
                <div className="menuCircle">
                </div>
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>                    
            </div>
        <div className={"menu " + (menuOpen && "active") }>
            <ul>
                <li onClick={()=>setMenuOpen(false)}> {/*no es la mejor práctica, lo mejor es separar en nuevo componente.*/}
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>               
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        </div>
    )
}
