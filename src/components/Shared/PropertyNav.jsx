import PropTypes from "prop-types";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

const PropertyNav = ({ activeIndex, totalSlides }) => {
  const swipe = useSwiper();
  return (
    <div
      className="flex items-center gap-[900px] absolute left-0 right-0 z-50"
      style={{ top: "calc(50% - 31px)" }}
    >
      <div>
        {activeIndex > 0 && (
          <button
            onClick={() => swipe.slidePrev()}
            className="bg-black text-white text-3xl inline-block p-4 rounded-full transition-all ease-in-out duration-300"
          >
            <BsArrowLeft />
          </button>
        )}
      </div>
      <div>
        {activeIndex < totalSlides - 1 && (
          <button
            onClick={() => swipe.slideNext()}
            className="bg-black text-white text-3xl inline-block p-4 rounded-full transition-all ease-in-out duration-300"
          >
            <BsArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

PropertyNav.propTypes = {
  activeIndex: PropTypes.number,
  totalSlides: PropTypes.number,
};

export default PropertyNav;
