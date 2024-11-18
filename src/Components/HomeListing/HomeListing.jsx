import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination,  Navigation } from 'swiper/modules';
import styles from './HomeListing.module.css'

const HomeListing = () => {

    const propertiesData = [
        {
            "id": 1,
            "title": "4 BHK luxary room in kormanglam",
            "description": "Luxary rooms for the complete family",
            "price": 40000,
            "location": "Kormanglam",
            "amenities": ["WiFi", "Housekeeping", "Meals"],
            "photos": [
                "https://images.oyoroomscdn.com/uploads/hotel_image/40154/large/trlbamuvbcwl.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/40154/large/iihforcjaapx.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/40154/large/iuafwbhfuolq.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/40154/large/sushpvoomare.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/40154/large/isnochhgvbmq.jpg"
            ],
            "agentName": "Anikesh Sharma",
            "agentEmail": "anikesh.sharma@gmail.com",
            "agentPhone": "+91-7985854242"
        },
        {
            "id": 2,
            "title": "3BHK Apartment in HSR Layout",
            "description": "A well-furnished 3BHK apartment in HSR Layout.",
            "price": 22000,
            "location": "Marathahalli",
            "amenities": ["WiFi", "Gym", "Parking"],
            "photos": ["https://www.ecolifedevelopers.com/images/aarial3.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/235096/large/xlojoipoggnx.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/235096/large/pcfpqjpyploe.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/235096/large/hmpgtcahlrna.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/235096/large/mxktnhukqbmj.jpg"
            ],
            "agentName": "Pradeep Maurya",
            "agentEmail": "pradeepmaurya@gmail.com",
            "agentPhone": "+91-7846985754"
        },
        {
            "id": 3,
            "title": "RiverSide view apartment",
            "description": "A luxurious RiverSide Apartment with a stunning view.",
            "price": 30000,
            "location": "Cauvery",
            "amenities": ["WiFi", "Swimming Pool", "Gym"],
            "photos": [
                "https://images.oyoroomscdn.com/uploads/hotel_image/227295/large/opachurqdjha.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/227295/large/leiscjubxenv.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/227295/large/wgphxvwpsixa.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/227295/large/wgphxvwpsixa.jpg",
                "https://images.oyoroomscdn.com/uploads/hotel_image/227295/large/hdosgbruaoom.jpg"
            ],
            "agentName": "R deepthi",
            "agentEmail": "deepthi.r@gmail.com",
            "agentPhone": "+91-8945123675"
        },
    ]


    return (
        <>
            {
                propertiesData.map((property, index) => {
                    return (
                        <div className={styles.HomeListingCard} key={index}>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                             
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <img src={property.photos[0]} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={property.photos[1]} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={property.photos[2]} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={property.photos[3]} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={property.photos[4]} alt="" />
                                </SwiperSlide>
                            </Swiper>
                            <div className={styles.detailContainer}>
                                <p>{property.title}</p>
                                <h2>₹{property.price}</h2>
                                <span>{property.description}</span>
                                <hr />
                                <div className={styles.amenities}>
                                    {
                                        property.amenities.map((amenity, index) => {
                                            return (
                                                <div key={index} className={styles.amenity}>
                                                    <span>{amenity}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <hr />
                                <div className={styles.agentContainer}>
                                    <div className={styles.imageName}>
                                        <b>{property.agentName}</b>
                                    </div>
                                    <div>
                                        <span> <b> Email:</b> {property.agentEmail}</span>
                                        <span> <b> Phone No.</b> {property.agentPhone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default HomeListing