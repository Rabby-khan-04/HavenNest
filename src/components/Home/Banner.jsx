import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";
import BannerSlide from "./BannerSlide";
import SliderNav from "./SliderNav";
import SliderPagination from "./SliderPagination";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  const [rooms, setRooms] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get("/rooms.json").then((res) => setRooms(res.data.splice(0, 4)));
  }, []);

  return (
    <section className="relative">
      <Swiper
        className="mySwiper"
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.id}>
            <BannerSlide room={room} activeIndex={activeIndex} />
          </SwiperSlide>
        ))}

        <SliderNav />
        <div className="container relative">
          <SliderPagination rooms={rooms} activeIndex={activeIndex} />
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
