import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "../Shared/PropertyCard";
import PropertyNav from "../Shared/PropertyNav";
import "swiper/css";

const PropertyCarousel = () => {
  const [rooms, setRooms] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get("/rooms.json").then((res) => setRooms(res.data));
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper relative"
      >
        {rooms.map((room) => (
          <SwiperSlide
            style={{ height: "400px", width: "280px" }}
            key={room.id}
          >
            <PropertyCard room={room} />
          </SwiperSlide>
        ))}
        <PropertyNav activeIndex={activeIndex} totalSlides={rooms.length} />
      </Swiper>
    </div>
  );
};

export default PropertyCarousel;
