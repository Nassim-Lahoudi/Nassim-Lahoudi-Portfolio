import { Link } from "react-router-dom";
import "./index.css";
import "./App.css";

function Imprint() {

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
                    <div className="imprint-container">
                        <h2 className="sec-headline-appearance">Websites</h2>
                        <p className="paraghraph-appearance">This imprint applies to all offerings under the domain <b>nassim-lahoudi.de</b>, including all subdomains (subpages). <br /> <br /></p>
                        <h2 className="sec-headline-appearance">Information according to § 5 TMG</h2>
                        <p className="paraghraph-appearance">Nassim Lahoudi <br /> Sieringstraße 28 <br /> 65929, Frankfurt am Main <br /> Germany <br /> <br /> E-Mail: info@nassim-lahoudi.de</p>
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

export default Imprint;
