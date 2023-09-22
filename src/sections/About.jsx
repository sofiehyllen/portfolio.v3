import { useEffect, useState } from "react";
import AboutContent from "../components/AboutContent";
//Jeg importerer animationer fra AOS biblioteket
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function About(){

    const [posts, setposts] = useState([]);
    useEffect(() => {
        //Dette er en funktion som bruges til at hente data fra Wordpress APIen:
        async function getPosts(){
            const url = "https://sohyllen.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=9&order=asc" 
            //Der bruges fetch til at lave en HTTP-anmodning til det angivne URL:
            const response = await fetch(url);
            const data = await response.json();
            //Her opdateres 'posts' med det hentede data:
            setposts(data);
        }
        getPosts();
    }, []);

    return(
        <section  className="article" id="about">
            <h2 data-aos="fade-right" data-aos-duration="1000">about 02</h2>
            <div data-aos="fade-left" data-aos-duration="1000">
                {posts.map(post =>(
                    <AboutContent key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}

