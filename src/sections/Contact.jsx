import sofieSidder from "/src/assets/sofie.sidder.BW.jpg"
import underConstruction from "/src/assets/under.construction.png"

export default function Contact(){
    return(
        <section id="contact">
            <h1>Let&apos;s <br /> connect!</h1>
            <p>SEND ME A MESSAGE</p>
            <a href="mailto:sofiehyllen@hotmail.com" target="blank">SOFIEHYLLEN@HOTMAIL.COM</a>
            <div id="contact-image"><img className="img-max" src={sofieSidder} alt="Sofie" /></div>

            <div className="contact-container">
                <div className="contact-links-right" >
                    <a href="https://www.facebook.com/sofiefuglsang.hyllen/" target="_blank" rel="noreferrer">FACEBOOK</a> <br />
                    <a href="https://www.linkedin.com/in/sofie-fuglsang-hyllen-b98a6224a/" target="_blank" rel="noreferrer">LINKEDIN</a>
                </div>

                <div className="contact-links-left"  >
                    <div id="instagram"><a >INSTAGRAM</a> <br /></div>
                    <a href="mailto: sofiehyllen@hotmail.com" target="_blank" rel="noreferrer">E-MAIL</a>
                </div>
                <div className="instagram-illustration"><img className="img-max" src={underConstruction} alt="Under Construction" /></div>                    
            </div>

            <div className="bottom-text">
                <p>&#169; SOFIE FUGLSANG HYLLEN 2023</p>
                <p id="back-to-top"><a href="#">JUMP TO TOP</a></p>
            </div> 
        </section>
    );
}
