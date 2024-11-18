import SectionTitle from "@/components/EstateDetails/SectionTitle";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaCamera } from "react-icons/fa";

const Account = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProfileUpdate = (data) => {
    updateUserProfile(data.name, data.photo)
      .then(() => {
        toast.success("User Profile Update successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-6xl font-old_standard font-bold text-dark_charcoal mb-12">
          Account Settings
        </h1>
        <div className=" grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <SectionTitle text="User Details" />
            <form
              onSubmit={handleSubmit(handleProfileUpdate)}
              className="space-y-5"
            >
              <div className="flex flex-col gap-1 grow">
                <label
                  htmlFor="name"
                  className="text-sm font-open_sans font-bold text-dark_charcoal"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Last name is required",
                  })}
                  placeholder="Enter your last name"
                  className="auth__input"
                  defaultValue={user.displayName}
                />
                {errors.lname && (
                  <span className="text-xs font-bold font-open_sans text-red-600">
                    {errors.lname.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="photo"
                  className="text-sm font-open_sans font-bold text-dark_charcoal"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  type="url"
                  {...register("photo", {
                    required: "Photo url is required",
                  })}
                  placeholder="Enter your photo url"
                  className="auth__input"
                  defaultValue={user?.photoURL}
                />
                {errors.photo && (
                  <span className="text-xs font-bold font-open_sans text-red-600">
                    {errors.photo.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm font-open_sans font-bold text-dark_charcoal"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Invalid Email Address",
                    },
                  })}
                  placeholder="Enter your email"
                  className="auth__input"
                  defaultValue={user.email}
                />
                {errors.email && (
                  <span className="text-xs font-bold font-open_sans text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <input
                type="submit"
                value="Update Profile"
                className="block text-center w-full p-5 rounded-md bg-black text-white font-bold font-open_sans uppercase cursor-pointer"
              />
            </form>
          </div>
          <div className="content-center">
            <div className="p-5 bg-black rounded-md space-y-6">
              <h2 className="text-3xl font-bold font-open_sans text-white">
                Profile Picture
              </h2>
              <img
                src={user.photoURL}
                className="size-32 object-cover object-center rounded-md inline-block"
                alt=""
              />
              <button className="flex items-center gap-2 rounded-md bg-white text-base text-dark_charcoal py-3 px-5 font-bold font-open_sans uppercase ">
                <FaCamera className="text-xl" /> <span>Uload Photo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
