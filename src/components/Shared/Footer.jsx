import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-black py-24 font-open_sans text-white">
      <div className="container grid grid-cols-5">
        <div className="col-span-2">
          <h2 className="text-2xl font-extrabold font-old_standard mb-3">
            havenNest.
          </h2>
          <div className="text-white/70 text-sm space-y-1">
            <p>90 Fifth Avenue, 3rd Floor</p>
            <p>San Francisco, CA 1980</p>
            <p>(123) 456-7890</p>
          </div>
          <ul className="mt-12 flex items-center gap-4 text-2xl text-white">
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Company</h3>
          <ul className="text-sm font-normal space-y-1 text-white/80">
            <li>
              <a href="#">Agents</a>
            </li>
            <li>
              <a href="#">Property Search</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Services</h3>
          <ul className="text-sm font-normal space-y-1 text-white/80">
            <li>
              <a href="#">Buy Properties</a>
            </li>
            <li>
              <a href="#">Sell Properties</a>
            </li>
            <li>
              <a href="#">Rent Properties</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Company</h3>
          <ul className="text-sm font-normal space-y-1 text-white/80">
            <li>
              <a href="#">Homes for Rent</a>
            </li>
            <li>
              <a href="#">Apartments for Rent</a>
            </li>
            <li>
              <a href="#">Homes for Sale</a>
            </li>
            <li>
              <a href="#">Apartments for Sale</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
