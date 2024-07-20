import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Chat from "./Chat";


const Footer=()=>{
    return(
        <>
        <section className="mainFooter">
         <section className="footer">
            <div className="footer_box1">
                Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet
                <br/> adipisicing elit. Exercitationem culpa soluta et sint aspernatur quos,
                <br/> sit quia ratione totam dicta dolores, nostrum voluptatem.
                <br/> Recusandae possimus, necessitatibus minima cumque ipsa odio.
            </div>
            <div className="footer_box2">
                <li>
                    Feactured Books
                </li>
                <li>
                    Feactured Books
                </li>
                <li>
                    Feactured Books
                </li>
                <li>
                    Feactured Books
                </li>

            </div>
            <div className="footer_box3">
                <li>
                    Feactured Books
                </li>
                <li>
                    Feactured Books
                </li>
                <li>
                    Feactured Books
                </li>
                <li>
                    Feactured Books
                </li>

            </div>
            <div className="footer_box4">
                <li>
                    Feactured Books
                </li>
                <li>
                    Feactured Books
                </li>
                <li>
                    Feactured Books
                </li>
                <li>
                    Feactured Books
                </li>

            </div>
         </section>
         <div className="social_icons">
            <li>
                <FaFacebookF/>
            </li>
            <li>
                <FaXTwitter/>
            </li>
            <li>
                <FaYoutube/>
            </li>
            <li>
                <FaLinkedin/>
            </li>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <Chat />
            </li>
         </div>
         </section>
        
        </>
    )
}

export default Footer;