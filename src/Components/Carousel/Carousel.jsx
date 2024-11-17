import React, { useState, useEffect } from "react";
import img1 from "../../assets/homepage/img1.jpg";
import img2 from "../../assets/homepage/img2.jpg";
import img3 from "../../assets/homepage/img3.jpg";
import img4 from "../../assets/homepage/img4.jpg";
import img5 from "../../assets/homepage/img5.jpg";
import img6 from "../../assets/homepage/img6.jpg";
import "./Carousel.css";

const images = [
  {
    src: img1,
    title: "Find Your Dream Home with RentEase",
    description: "Explore a wide range of real estate options tailored to meet your needs, with personalized support at every step.",
  },
  {
    src: img2,
    title: "RentEase: Your Trusted Real Estate Partner",
    description: "Unlock a world of possibilities with expertly curated property listings and professional advice designed for you.",
  },
  {
    src: img3,
    title: "Welcome Home with RentEase",
    description: "Experience hassle-free property searches and expert real estate assistance to make your home dreams a reality.",
  },
  {
    src: img4,
    title: "RentEase Makes Renting Easy",
    description: "Discover your ideal home with ease through our detailed listings and dedicated property experts.",
  },
  {
    src: img5,
    title: "Discover Your Next Home with RentEase",
    description: "From cozy apartments to spacious houses, find the perfect match with our user-friendly real estate services.",
  },
  {
    src: img6,
    title: "RentEase: Simplifying Your Search for Home",
    description: "Get instant access to the best properties and insightful guidance to turn your housing search into a success story.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <img
          className="carousel-image"
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
        />
        <div className="carousel-text-overlay">
          <h2>{images[currentIndex].title}</h2>
          <p>{images[currentIndex].description}</p>
        </div>
        <button className="carousel-button previous" onClick={handlePrevious}>
          &#9664; 
        </button>
        <button className="carousel-button next" onClick={handleNext}>
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
