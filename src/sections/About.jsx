import { useEffect, useState } from "react";
import AboutContent from "../components/AboutContent";

export default function About(){

    const [posts, setposts] = useState([]);
    //Indholdsindlæg 1
    useEffect(() => {
        async function getPosts(){
            //Husk "?" efter url inden "_embed..."
            const url = "https://sohyllen.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=9&order=asc" 
            const response = await fetch(url);
            const data = await response.json();
            setposts(data);
        }
        getPosts();
    }, []);

    return(
        <section className="article" id="about">
            <h2>about 03</h2>
            <div>
                {posts.map(post =>(
                    <AboutContent key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}