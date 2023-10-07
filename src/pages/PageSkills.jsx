import { useNavigate } from "react-router-dom";
import skillsPersonal from "/src/assets/skills.personal.png"

export default function PageSkills(){

    const navigate = useNavigate();

    return(
        <section className="document" id="page-skills">        
            <button onClick={() => navigate(-1)} className="route-link back-button">&#10094; BACK</button>

            <div className="skills-window">
                <div className="skills-window-text">
                    <h4>Technical skills</h4>
                    <p>Here i present some of my relevant technical skills. <br />
                        I excel in some more than others, but I have a fundamental and basic knowledge of them all<br />
                        - the rest i am still in the process of learning!</p>
                    </div>   
                <div className="skills">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <br />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                </div>   
            </div>

            <div className="skills-window">
                <div className="skills-window-text">
                    <h4>Personal skills</h4>
                    <p>Just as important as my technical skills are my personal qualities. <br />
                    Here are the qualities i believe provides me the greatest advantage in my studies as a multimedia design student.</p>
                    </div>   
                <div className="skills-personal">
                    <img className="img-max" src={skillsPersonal} alt="Personal skills" />
                </div>   
            </div>
        </section>
    )
}