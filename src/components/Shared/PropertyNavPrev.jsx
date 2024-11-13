import PropTypes from "prop-types";
import { BsArrowLeft } from "react-icons/bs";
import { useSwiper } from "swiper/react";

const PropertyNavPrev = ({ activeIndex }) => {
  const swipe = useSwiper();
  return (
    <div className="absolute left-0 z-10" style={{ top: "calc(50% - 31px)" }}>
      {activeIndex > 0 && (
        <button
          onClick={() => swipe.slidePrev()}
          className="bg-black text-white text-3xl inline-block p-4 rounded-full transition-all ease-in-out duration-300"
        >
          <BsArrowLeft />
        </button>
      )}
    </div>
  );
};

PropertyNavPrev.propTypes = {
  activeIndex: PropTypes.number,
};

export default PropertyNavPrev;
