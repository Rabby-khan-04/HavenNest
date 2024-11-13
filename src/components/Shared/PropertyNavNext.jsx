import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

const PropertyNavNext = ({ activeIndex, totalSlides }) => {
  const swipe = useSwiper();
  return (
    <div className="absolute right-20 z-10" style={{ top: "calc(50% - 31px)" }}>
      {activeIndex < totalSlides - 1 && (
        <button
          onClick={() => swipe.slideNext()}
          className="bg-black text-white text-3xl inline-block p-4 rounded-full transition-all ease-in-out duration-300"
        >
          <BsArrowRight />
        </button>
      )}
    </div>
  );
};

PropertyNavNext.propTypes = {
  activeIndex: PropTypes.number,
  totalSlides: PropTypes.number,
};

export default PropertyNavNext;
