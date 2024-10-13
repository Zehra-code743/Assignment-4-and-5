import Image from "next/image";
import Header from "@/components/header";

export default function About() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="intro">
                    <h1>This is my About Us Page</h1>
                    <p>
Our promise to you

At Perfume Direct, we're committed to providing an exceptional shopping experience with an easy to use website, fast shipping and outstanding customer service.


Our Mission

To supply the biggest fragrance & cosmetics brands at affordable prices to all.


Orders Shipped

800k and counting...</p>

                </div>

                <section className="contact">
                    <div className="aipic">
                        <Image 
                            src="/images 7.png" 
                            alt="Description of image" 
                            height={300} 
                            width={300} 
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}