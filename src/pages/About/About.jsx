import AboutBanner from "../../components/AboutBanner/AboutBanner";
import "./About.css";
import AboutInfo from "../../data/about.json";
import Collapse from "../../components/Collapse/Collapse";

function About() {
    return (
        <div className="about">
            <AboutBanner />
            <div className="about_collapse">
                {AboutInfo.map((info, index) => (
                    <div key={index}>
                    <Collapse 
                    title={info.title}
                    texte={info.text}
                    />
                </div>
                ))}
            </div>
        </div>
    );
}

export default About;