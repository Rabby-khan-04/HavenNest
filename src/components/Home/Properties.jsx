import PropertyCarousel from "./PropertyCarousel";

const Properties = () => {
  return (
    <section className="py-24">
      <div className="container grid grid-cols-5 gap-8">
        <div className="col-span-2 content-center">
          <h2 className="text-4xl font-bold font-old_standard text-dark_charcoal">
            Featured Properties
          </h2>
          <p className="text-base font-open_sans text-dark_silver font-bold mb-4">
            Browse our latest hot offers.
          </p>

          <button className="text-base text-dark_charcoal font-open_sans font-bold flex items-center gap-2 group py-4 mt-8">
            View Details
            <span className="w-20 h-0.5 before:contents relative before:absolute before:top-0 before:left-0 before:bg-dark_charcoal before:h-full before:w-2/4 group-hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"></span>
          </button>
        </div>
        <div className="col-span-3 -mr-96">
          <PropertyCarousel />
        </div>
      </div>
    </section>
  );
};

export default Properties;
