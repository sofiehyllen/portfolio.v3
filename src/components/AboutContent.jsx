import parse from "html-react-parser";


export default function AboutContent({post}){
  let image = ""
  let billede = false
        if (post._embedded && post._embedded["wp:featuredmedia"]){
            image = post._embedded["wp:featuredmedia"][0].source_url; 
            billede = true
        }

    return(
        //Jeg skriver en ternary, hvis billede = true viser den billeder, ellers laver den et tomt span
        <article className="about-content">
            <div className="about-text">{parse(post.content.rendered)}</div>
            <div className="image-container"> 
                <p>sofie.jpg</p>    
                {billede ? <img className="img-max" src={image} alt={post.title.rendered}/> :<span></span>}
            </div>
        </article>
    )
}