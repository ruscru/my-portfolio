import "./topbar.scss"
/*import {Person, Mail} from "@material-ui/icons"*/

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                   <a href="#intro" className="logo">Ruth C.</a>
                   {/* <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+5730000000</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>r@gmail.com</span>
                    </div> */}                 
                </div>                
                

            </div>
        </div>
    )
}
