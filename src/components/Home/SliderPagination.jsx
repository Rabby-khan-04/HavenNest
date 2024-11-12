import PropTypes from "prop-types";
import { useSwiper } from "swiper/react";

const SliderPagination = ({ rooms, activeIndex }) => {
  const swipe = useSwiper();

  const handleDotClick = (index) => {
    swipe.slideTo(index); // Navigate to the specific slide
  };

  return (
    <div className="flex gap-5 mt-6 justify-center absolute bottom-48 z-20">
      {rooms.map((room, index) => (
        <img
          key={room.id}
          className={`size-[88px] border-2 border-[#dbd4cd] inline-block rounded transition-all duration-300 ease-in-out cursor-pointer ${
            index === activeIndex ? "scale-125" : ""
          }`}
          src={room.thumb}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  );
};

SliderPagination.propTypes = {
  rooms: PropTypes.array,
  activeIndex: PropTypes.number,
};

export default SliderPagination;
