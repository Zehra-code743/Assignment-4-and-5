import Link from "next/link";
import Image from "next/image"

export default function Header() {
    return (
        <div className="header" >
            <div className="logo">
                <img src={"logo.png"} alt="logo" /></div>
                
            
            <ul className="header-button">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/about-us"}><li>About Us</li></Link>
                <Link href={"/contact-us"}><li>Contact Us</li></Link>
                <Link href={"/blogs"}><li>Blog Us</li></Link>
                <Link href={"/product"}><li>product</li></Link>

        

            
        
                

                <Link href={"/start"} passHref>
                    <li className="start-button">Start</li>
                </Link>
            </ul>
            
        </div>
    );
}