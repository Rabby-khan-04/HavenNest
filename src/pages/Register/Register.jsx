import SocialLogin from "@/components/AuthCom/SocialLogin";
import SectionTitle from "@/components/EstateDetails/SectionTitle";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    const fname = data.fname;
    const lname = data.lname;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;

    console.log(fname, lname, photo, email, password);
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-[576px] rounded-md border broder-[#e2e2e2] p-8 bg-base">
        <SectionTitle text="Create an account" />

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-1 grow">
              <label
                htmlFor="fname"
                className="text-sm font-open_sans font-bold text-dark_charcoal"
              >
                First Name
              </label>
              <input
                id="fname"
                type="text"
                {...register("fname", {
                  required: "First name is required",
                })}
                placeholder="Enter your first name"
                className="auth__input"
              />
              {errors.fname && (
                <span className="text-xs font-bold font-open_sans text-red-600">
                  {errors.fname.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1 grow">
              <label
                htmlFor="lname"
                className="text-sm font-open_sans font-bold text-dark_charcoal"
              >
                Last Name
              </label>
              <input
                id="lname"
                type="text"
                {...register("lname", {
                  required: "Last name is required",
                })}
                placeholder="Enter your last name"
                className="auth__input"
              />
              {errors.lname && (
                <span className="text-xs font-bold font-open_sans text-red-600">
                  {errors.lname.message}
                </span>
              )}
            </div>
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
            />
            {errors.email && (
              <span className="text-xs font-bold font-open_sans text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-open_sans font-bold text-dark_charcoal"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password mustbe at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="auth__input"
            />
            {errors.password && (
              <span className="text-xs font-bold font-open_sans text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          <input
            type="submit"
            value="Sign up"
            className="block text-center w-full p-5 rounded-md bg-black text-white font-bold font-open_sans uppercase cursor-pointer"
          />
        </form>

        <div className="mt-6 text-center text-sm font-normal font-open_sans text-dark_charcoal">
          <p>
            Already have an account?{" "}
            <Link className="underline" to="/login">
              Sign in
            </Link>
          </p>
        </div>
        <SocialLogin />
      </div>
    </section>
  );
};

export default Register;
