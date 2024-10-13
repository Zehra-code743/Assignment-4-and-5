import Image from "next/image";
const perfumes = [
    {
      id: 1,
      src: "/perfume1.png",
      title: "Floral Essence",
      description: "A delicate blend of jasmine, rose, and lily, this perfume embodies the essence of spring.",
    },
    {
      id: 2,
      src: "/perfume2.png",
      title: "Citrus Burst",
      description: "A refreshing combination of lemon, orange, and grapefruit that invigorates the senses.",
    },
    {
      id: 3,
      src: "/perfume3.png",
      title: "Woody Ambience",
      description: "Rich notes of sandalwood, cedar, and patchouli create a warm and earthy fragrance.",
    },
    {
      id: 4,
      src: "/perfume4.png",
      title: "Ocean Breeze",
      description: "A fresh scent reminiscent of the sea, featuring notes of sea salt, jasmine, and driftwood.",
    },
    {
      id: 5,
      src: "/perfume5.png",
      title: "Spicy Delight",
      description: "A bold mix of spices including cinnamon, cardamom, and nutmeg, perfect for the adventurous spirit.",
    },
    {
      id: 6,
      src: "/perfume6.png",
      title: "Gourmand Treat",
      description: "A sweet and edible scent with notes of vanilla, caramel, and chocolate.",
    },
  ];
    export default function PerfumeList() {

    return (
      <div className="parentContainer">
        <h1 className="title">Discover the World of Perfumes</h1>
        <p className="description">
          Explore a curated selection of exquisite fragrances that captivate the senses and elevate your mood. Each perfume is a unique blend of essential oils and aromatic compounds, designed to create memorable olfactory experiences.
        </p>
        {perfumes.map((perfume) => (
          <div className="childContainer bounce-right" key={perfume.id}>
            <div className="imageContainer">
              <Image
                src={perfume.src}
                alt={perfume.title}
                height={100}
                width={100}
              />
            </div>
            <h2 className="subtitle">{perfume.title}</h2>
            <p className="description">{perfume.description}</p>
  
            <h3 className="subheading">Characteristics of {perfume.title}</h3>
            <p className="description">
              Perfumes can be defined as substances that emit and diffuse a pleasant and fragrant odor.
            </p>
  
            <h4 className="subheading">Historical Context</h4>
            <p className="description">
              The 1939 Nobel Laureate for Chemistry made significant contributions to the study of aromatic compounds.
            </p>
  
            <h5 className="subheading">Uses of {perfume.title}</h5>
            <p className="description">
              {perfume.title} is perfect for various occasions, whether personal use or special events.
            </p>
  
            <h6 className="subheading">Conclusion</h6>
            <p className="description">
              Overall, {perfume.title} plays a vital role in enhancing the sensory experiences of our lives.
            </p>
  
            <button className="readMore">Read More</button>
          </div>
        ))}
      </div>
    );
  }
    
          
    