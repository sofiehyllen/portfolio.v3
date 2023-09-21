import { useEffect, useState } from "react";
import AboutContent from "../components/AboutContent";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
        <section  className="article" id="about">
            <h2 data-aos="fade-right" data-aos-duration="1500">about 03</h2>
            <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                {posts.map(post =>(
                    <AboutContent key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}