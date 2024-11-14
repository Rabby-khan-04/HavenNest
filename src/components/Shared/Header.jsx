import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import PropTypes from "prop-types";
import AuthContext from "@/context/AuthContext";

const Header = ({ transparant = false }) => {
  const [navbar, setNavbar] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  }, []);

  return (
    <header
      className={`duration-300 transition-all  text-white ${
        navbar
          ? "p-5 sticky top-0 z-50 bg-black"
          : transparant
          ? "relative py-8 -mb-[112px] z-50"
          : "bg-black py-8 relative z-50"
      }`}
    >
      <nav className="container flex items-center justify-between gap-5">
        <div>
          <Link to="/" className="font-old_standard font-bold text-2xl">
            havenNest.
          </Link>
        </div>

        <ul className="flex items-center justify-center gap-8 text-sm font-bold font-open_sans grow nav__menu">
          <li>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <span>Login</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/register">
              <span>Register</span>
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center">
          {user ? (
            <div className="flex items-center gap-4">
              <img
                src="https://i.ibb.co.com/VvNp22F/user.png"
                className="inline-block size-[42px]"
                alt=""
              />
              <button className="primary__btn">Logout</button>
            </div>
          ) : (
            <Link
              to="/login"
              className="inline-block p-[10px] rounded-full border border-white"
            >
              <FaRegUser className="text-xl" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  transparant: PropTypes.bool,
};

export default Header;
