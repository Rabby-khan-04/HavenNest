import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("User Logged In Successfully!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="m-6 space-y-4">
      <p className="text-center font-old_standard text-xl font-semibold text-dark_charcoal">
        OR
      </p>

      <div className="max-w-96 mx-auto text-base font-open_sans font-semibold text-dark_charcoal space-y-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center text-center border rounded-full p-3 hover:text-white hover:bg-black transition-all duration-300"
        >
          <FaGoogle className="text-xl" />{" "}
          <span className="grow block ">Continue with Google</span>
        </button>
        <button className="w-full flex items-center text-center border rounded-full p-3 hover:text-white hover:bg-black transition-all duration-300">
          <FaMicrosoft className="text-xl" />{" "}
          <span className="grow block ">Continue with Microsoft </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
