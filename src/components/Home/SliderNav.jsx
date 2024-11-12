import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

const SliderNav = () => {
  const swipe = useSwiper();
  return (
    <div className="absolute right-0 bottom-0 z-20">
      <button
        onClick={() => swipe.slidePrev()}
        className="bg-black text-white text-3xl inline-block py-12 pl-14 pr-5"
      >
        <BsArrowLeft />
      </button>
      <button
        onClick={() => swipe.slideNext()}
        className="bg-black text-white text-3xl inline-block py-12 pr-14 pl-5"
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default SliderNav;
