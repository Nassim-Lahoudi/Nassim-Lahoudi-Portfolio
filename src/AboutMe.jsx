import { Link } from "react-router-dom";
import "./index.css";
import "./App.css";

function AboutMe() {

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
                        <div className="first-list-container">
                            <ul className="unordered-aboutme-list-appearance">
                                <li className="list-element-aboutme">2024 - today Assistant Training <br /> Behtmann School Frankfurt am Main</li>
                                <li className="list-element-aboutme">School Graduation - Secondary School Diploma <br /> Walter-Kolb School Frankfurt am Main</li>
                                <li className="list-element-aboutme">2017 - 2024 - Secondary School <br /> Walter-Kolb School Frankfurt am Main</li>
                                <li className="list-element-aboutme">2014 - 2017 - Primary School <br /> Walter-Kolb School Frankfurt am Main</li>
                            </ul>
                        </div>
                        <div className="second-list-container">
                            <ul className="unordered-aboutme-list-appearance">
                                <li className="list-element-aboutme">Operating Systems:</li>
                                <li className="list-element-aboutme-under">Windows (Advanced Knowledge)</li>
                                <li className="list-element-aboutme-under">macOS (Basic Knowledge)</li>
                                <li className="list-element-aboutme-under">Linux (Basic Knowledge)</li>
                                <li className="list-element-aboutme">Programming Languages & Frameworks:</li>
                                <li className="list-element-aboutme-under">HTML & CSS (Advanced Knowledge)</li>
                                <li className="list-element-aboutme-under">JavaScript (Basic Knowledge)</li>
                                <li className="list-element-aboutme-under">React Library (Basic Knowledge)</li>
                                <li className="list-element-aboutme-under">Python (Advanced Knowledge)</li>
                            </ul>
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

export default AboutMe;
