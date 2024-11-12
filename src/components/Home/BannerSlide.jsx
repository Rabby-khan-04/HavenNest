import { Separator } from "@radix-ui/react-separator";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BannerSlide = ({ room, activeIndex }) => {
  const navigate = useNavigate();
  const { id, title, bed, bath, area, price, image } = room;
  const colors = ["#716b65", "#637c71", "#a57d54", "#a07350"];
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center bg-black/40"
      style={{
        backgroundImage: `url(${image})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-7xl font-bold text-white font-old_standard">
            {title}
          </h2>
          <div className="flex items-center text-white/50 font-open_sans mt-4 mb-3">
            <p>{bed} BD</p>
            <Separator
              orientation="vertical"
              className="h-4 border-l-2 border-white/50 mx-2"
            />
            <p>{bath} BA</p>
            <Separator
              orientation="vertical"
              className="h-4 border-l-2 border-white/50 mx-2"
            />
            <p>{area} SF</p>
          </div>
        </div>
      </div>
      <div
        className={`w-2/4 absolute left-0 bottom-0 z-20`}
        style={{ backgroundColor: `${colors[activeIndex]}` }}
      >
        <div className="relative px-12 py-8 grid grid-cols-2">
          <div></div>
          <div className="flex justify-between items-center relative z-20">
            <h2 className="text-2xl font-semibold font-open_sans text-white">
              ${price} <span className="text-lg">/mo</span>
            </h2>
            <button
              onClick={() => navigate(`details/${id}`)}
              className="text-base text-white font-open_sans font-bold flex items-center gap-2 group py-4"
            >
              View Details
              <span className="w-20 h-0.5 before:contents relative before:absolute before:top-0 before:left-0 before:bg-white before:h-full before:w-2/4 group-hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"></span>
            </button>
          </div>
          {/* Progress Bar */}
          <span
            key={activeIndex}
            className="absolute w-full h-full top-0 left-0 bg-white bg-opacity-20 progress-bar z-auto"
          ></span>
        </div>
      </div>
    </div>
  );
};

BannerSlide.propTypes = {
  room: PropTypes.object,
  activeIndex: PropTypes.number,
};

export default BannerSlide;
