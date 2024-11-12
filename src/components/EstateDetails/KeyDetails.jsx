import PropTypes from "prop-types";

const KeyDetails = ({ text, value }) => {
  return (
    <div className="font-open_sans text-dark_charcoal pb-5 border-b border-[#e2e2e2]">
      <p className="text-xs uppercase">{text}</p>
      <p className="capitalize font-bold">{value}</p>
    </div>
  );
};

KeyDetails.propTypes = {
  text: PropTypes.string,
  value: PropTypes.any,
};

export default KeyDetails;
