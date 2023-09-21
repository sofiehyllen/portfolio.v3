import { Link } from "react-router-dom";


export default function PageSkills(){
    return(
        <section className="document" id="page-skills">        
            <Link to ="/" className="route-link back-link">&#10094; BACK</Link>

            <div className="skills-window">
                <div className="skills-window-text">
                    <h4>Technical skills</h4>
                    <p>Here i present some of my relevant technical skills. <br />
                        I excel in some more than others, but I have a fundamental and basic knowledge of all of them <br />
                        - the rest i will learn along the way!</p>
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
        </section>
    )
}