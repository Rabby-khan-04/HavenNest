import homeIco from "../../assets/icon/home.png";
import experienced from "../../assets/icon/experienced_agents.png";
import wallet from "../../assets/icon/wallet.png";
import cloud from "../../assets/icon/cloud.png";
import whyUs from "../../assets/image/whyus.jpg";
import FeatureList from "./FeatureList";

const WhyUs = () => {
  const features = [
    {
      img: homeIco,
      title: "Find your future home",
      des: "We help you find a new home by offering a smart real estate experience",
    },
    {
      img: experienced,
      title: "Experienced agents",
      des: "Find an experienced agent who knows your market best",
    },
    {
      img: wallet,
      title: "Buy or rent homes",
      des: "Millions of houses and apartments in your favourite cities",
    },
    {
      img: cloud,
      title: "List your own property",
      des: "Sign up now and sell or rent your own properties",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-black from-50% to-transparent to-50%">
      <div className="container grid grid-cols-2 gap-12">
        <div className="-mr-24">
          <h2 className="text-white font-old_standard font-bold text-5xl mb-4 animate__bounceIn">
            Why Choose us
          </h2>
          <p className="text-base font-open_sans text-dark_silver font-bold mb-4">
            We offer perfect real estate services.
          </p>
          <img src={whyUs} className="w-full block mt-12" alt="" />
        </div>
        <div className="pl-28 space-y-6 content-center">
          {features.map((feature, idx) => (
            <FeatureList
              key={idx}
              img={feature.img}
              title={feature.title}
              des={feature.des}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
