import PropTypes from "prop-types";

const FeatureList = ({ img, title, des }) => {
  return (
    <div className="flex items-center gap-6">
      <div>
        <img src={img} alt="" className="w-16 inline-block" />
      </div>
      <div className="grow font-open_sans space-y-2">
        <h3 className="text-xl font-extrabold text-dark_charcoal">{title}</h3>
        <p className="text-spanish_gray">{des}</p>
      </div>
    </div>
  );
};

FeatureList.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  des: PropTypes.string,
};

export default FeatureList;
