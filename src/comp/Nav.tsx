import logo from "/logo.svg"
import caret from "/caret.svg"
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="flex justify-around items-center bg-white py-5">
            <div className="logo-container">
                <img src={logo} alt="Logo" />
            </div>
            <div className="nav-list">
                <ul className="flex gap-6">
                    <li><Link to={"/"} className="font-poppins font-medium text-base">Domain</Link></li>
                    <li className="flex items-center gap-1"><Link to={"/"} className="font-poppins font-medium text-base">Hosting</Link> <span className="cursor-pointer"><img src={caret} alt="Dropdown" /></span></li>
                    <li className="flex items-center gap-1"><Link to={"/"} className="font-poppins font-medium text-base">Tool & Service</Link> <span className="cursor-pointer"><img src={caret} alt="Dropdown" /></span></li>
                    <li className="flex items-center gap-1"><Link to={"/"} className="font-poppins font-medium text-base">Support</Link> <span className="cursor-pointer"><img src={caret} alt="Dropdown" /></span></li>
                    <li><Link to={"/"} className="font-poppins font-medium text-base">Affiliate</Link></li>
                </ul>
            </div>
            <div className="buttons flex gap-4">
                <button className="font-poppins font-semibold text-xl px-5 py-4">Log In</button>
                <button className="font-poppins font-semibold text-xl px-5 py-4 rounded-full bg-black text-white">Sign Up</button>
            </div>
        </nav>
    )
}

export default Nav;