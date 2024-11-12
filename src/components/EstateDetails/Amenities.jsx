import PropTypes from "prop-types";

const Amenities = ({ feature, ICON }) => {
  return (
    <div className="font-open_sans text-dark_charcoal pb-5 border-b border-[#e2e2e2] flex items-center gap-2">
      <img src={ICON} className="w-6" alt="" />
      <p className="capitalize font-normal">{feature}</p>
    </div>
  );
};

Amenities.propTypes = {
  feature: PropTypes.string,
  ICON: PropTypes.string,
};

export default Amenities;
