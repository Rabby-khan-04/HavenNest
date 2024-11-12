import PropTypes from "prop-types";

const SectionTitle = ({ text }) => {
  return (
    <h2 className="text-xl text-dark_charcoal font-bold font-open_sans mb-6">
      {text}
    </h2>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;
