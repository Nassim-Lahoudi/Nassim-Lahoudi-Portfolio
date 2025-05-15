import { Link } from "react-router-dom";
import "./index.css";
import "./App.css";

function Project() {

    const infoBtn = () => {
        const email = "info@nassim-lahoudi.de";
        navigator.clipboard.writeText(email)
        alert(`E-mail: ${email}\nAlready copied in Clipboard`)
        console.log("E-Mail Already copied in Clipboard")
    }

    return (
        <div className="page-container">
            <div className="header-container">
                <div className="navbar-container">
                    <ul className="unordered-list-appearance">
                        <li className="list-element"><Link to="/" className="link-element">Home</Link></li>
                        <li className="list-element"><Link to="/project" className="link-element">Project</Link></li>
                        <li className="list-element"><Link to="/aboutme" className="link-element">About me</Link></li>
                    </ul>
                </div>
            </div>
            <div className="main-container">
                <div className="name-container">
                    <h1 className="headline-appearance">Nassim Lahoudi</h1>
                </div>
                <div className="main-content-container">
                    <div className="first-content-container">
                        {/* <div className="first-list-container">
                            <ul className="unordered-aboutme-list-appearance">
                                <li className="list-element-aboutme"></li>
                                <li className="list-element-aboutme"></li>
                                <li className="list-element-aboutme"></li>
                                <li className="list-element-aboutme"></li>
                                <li className="list-element-aboutme"></li>
                            </ul>
                        </div> */}
                        <div className="second-list-container">
                            <a href="https://github.com/Nassim-Lahoudi"><img src="github.png" alt="Github" className="icon-appearance project-img" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="list-element-container">
                    <ul className="unordered-list-appearance">
                        <li className="list-element"><Link to="/imprint" className="link-element">Imprint</Link></li>
                        <li className="list-element"><Link to="/project" className="link-element">Project</Link></li>
                        <li className="list-element"><Link to="/aboutme" className="link-element">About me</Link></li>
                    </ul>
                </div>
                <div className="links-container">
                    <a href="https://github.com/Nassim-Lahoudi"><img src="github.png" alt="Github" className="icon-appearance" /></a>
                    <button onClick={infoBtn}><img src="email.png" alt="E-Mail" className="icon-appearance" /></button>
                </div>
                <div className="copyright-container">
                    <p className="paraghraph-appearance copyright-text-appearance">&copy; All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
