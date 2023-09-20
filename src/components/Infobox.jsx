export default function Infobox(props){
    return(
        <section className="infobox">
            <div>
                <h4>INFO</h4>
            </div>
            <div className="infobox-grid infobox-top">
                <div className="grid-item"><h5>Project title :</h5></div>
                <div className="grid-item"><p>{props.title}</p></div>  

                <div className="grid-item"><h5>Year :</h5></div>    
                <div className="grid-item"><p>{props.year}</p></div>
                    
                <div className="grid-item"><h5>Client :</h5></div>
                <div className="grid-item"><p>{props.client}</p></div>                       
            </div>

            <div className="infobox-grid">
                <div className="grid-item"><h5>Task :</h5></div> 
                <div className="grid-item"><p>{props.task}</p></div> 

                <div className="grid-item"><h5>Services :</h5></div>   
                <div className="grid-item"><p>{props.service}</p></div>

                <div className="grid-item"><h5>URL :</h5></div>
                <div className="grid-item"> <a href={props.url} target="_blank">{props.url}</a></div>

                <div className="grid-item"><h5>GIT :</h5></div>    
                <div className="grid-item"> <a href={props.git} target="_blank">{props.git}</a></div>                  
            </div>
        </section>
    )
}