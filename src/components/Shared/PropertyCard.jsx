import { Separator } from "@radix-ui/react-separator";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PropertyCard = ({ room }) => {
  const { id, title, bed, bath, area, price, image } = room;

  return (
    <div className="w-full h-full rounded-md relative overflow-hidden group cursor-pointer">
      <div
        className="absolute bg-black/30 scale-100 group-hover:scale-110 duration-1000 transition-all z-10 inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundBlendMode: "overlay",
        }}
      ></div>
      <div className="p-5 absolute bottom-0 left-0 right-0 z-20 group-hover:-translate-y-1/3 transition-all duration-500">
        <h3 className="text-white font-open_sans text-base font-semibold">
          {title}
        </h3>
        <p className="text-[22px] font-bold font-open_sans text-white">
          ${price} /mo
        </p>
        <div className="flex items-center text-white/70 font-open_sans text-xs font-normal">
          <p>{bed} BD</p>
          <Separator
            orientation="vertical"
            className="h-3 border-l-2 border-white/70 mx-1"
          />
          <p>{bath} BA</p>
          <Separator
            orientation="vertical"
            className="h-3 border-l-2 border-white/70 mx-1"
          />
          <p>{area} SF</p>
        </div>
      </div>
      <div className="p-5 absolute bottom-0 left-0 right-0 z-20 translate-y-96 group-hover:translate-y-0 transition-all duration-500">
        <Link
          to={`details/${id}`}
          className="text-base text-white font-open_sans font-bold text-xs py-4 uppercase inline-block w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  room: PropTypes.object,
};

export default PropertyCard;
