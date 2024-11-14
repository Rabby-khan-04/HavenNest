import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "../Shared/PropertyCard";
import PropertyNavNext from "../Shared/PropertyNavNext";
import PropertyNavPrev from "../Shared/PropertyNavPrev";
import "swiper/css";

const PropertyCarousel = () => {
  const [rooms, setRooms] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get("/rooms.json").then((res) => setRooms(res.data));
  }, []);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        {rooms.map((room) => (
          <SwiperSlide
            style={{ height: "400px", width: "280px" }}
            key={room.id}
          >
            <PropertyCard room={room} />
          </SwiperSlide>
        ))}
        <PropertyNavPrev activeIndex={activeIndex} />
        <PropertyNavNext activeIndex={activeIndex} totalSlides={rooms.length} />
      </Swiper>
    </div>
  );
};

export default PropertyCarousel;
