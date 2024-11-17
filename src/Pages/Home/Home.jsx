import React from "react";
import styles from "./Home.module.css";
;

import AmenityCard from "../../Components/AmenityCard/AmenityCard";
import HomeListing from "../../Components/HomeListing/HomeListing";
import Carousel from "../../Components/Carousel/Carousel";


const amenitiesData = [
    {
        amenityName: 'Swimming Pool',
        imgPath: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
    {
        amenityName: 'Gym',
        imgPath: 'https://images.pexels.com/photos/4761798/pexels-photo-4761798.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
    {
        amenityName: 'Parking',
        imgPath: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
    {
        amenityName: 'Private Security',
        imgPath: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
    {
        amenityName: 'King Size Bed',
        imgPath: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
    {
        amenityName: 'Medical Center',
        imgPath: 'https://images.pexels.com/photos/5452205/pexels-photo-5452205.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
    {
        amenityName: 'Wifi',
        imgPath: 'https://images.pexels.com/photos/156093/pexels-photo-156093.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
    {
        amenityName: 'Library',
        imgPath: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
    {
        amenityName: 'Cafeteria',
        imgPath: 'https://images.pexels.com/photos/414380/pexels-photo-414380.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
    {
        amenityName: 'Hair Dryer',
        imgPath: 'https://images.pexels.com/photos/3992941/pexels-photo-3992941.jpeg?auto=compress&cs=tinysrgb&h=400',
    },
]




const Home = () => {
    return (
        <>
            <div className="mt-32">
            <Carousel />
            </div>
           

            <section className={styles.HomeListingSection}>
                <div className={styles.HomeListingTextContainer}>
                    <h3>Featured Listings</h3>
                    <p> Explore our most <span className="text-purple-600 font-semibold">popular</span> properties</p>
                </div>
                <div className={styles.HomeListingCardContainer}>
                    <HomeListing />
                </div>
            </section>

            <section className={styles.amenitiesSection}>
                <div className={styles.amenitiesTextContainer}>
                    <h3>
                        Our Amenities
                    </h3>
                    <p>Building Amenities</p>
                </div>

                <div className={styles.amenitiesCardContainer}>

                    {
                        amenitiesData.map((amenity, index) => (
                            <AmenityCard key={index} imgPath={amenity.imgPath} amenityName={amenity.amenityName} />
                        ))
                    }
                </div>

            </section>


        </>
    );
};

export default Home;