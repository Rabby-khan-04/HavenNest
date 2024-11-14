import SectionTitle from "@/components/EstateDetails/SectionTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import SocialLogin from "@/components/AuthCom/SocialLogin";

const Login = () => {
  const [forgetPassword, setforgetPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;

    console.log(email, password);
  };

  const handleForgetPassword = (data) => {
    console.log(data);
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-[576px] rounded-md border broder-[#e2e2e2] p-8 bg-base">
        <SectionTitle
          text={forgetPassword ? "Forget Password" : "Welcome Back"}
        />

        {forgetPassword ? (
          <div>
            <form
              onSubmit={handleSubmit(handleForgetPassword)}
              className="space-y-5"
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="user_email"
                  className="text-sm font-open_sans font-bold text-dark_charcoal"
                >
                  Email
                </label>
                <input
                  id="user_email"
                  type="email"
                  {...register("user_email", {
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

              <input
                type="submit"
                value="Get new password"
                className="block text-center w-full p-5 rounded-md bg-black text-white font-bold font-open_sans uppercase cursor-pointer"
              />
            </form>
            <div className="mt-6 text-center text-sm font-normal font-open_sans text-dark_charcoal">
              <p>
                <button
                  className="underline flex items-center gap-2 justify-center text-center w-full"
                  onClick={() => setforgetPassword(false)}
                >
                  <BsArrowLeft />
                  <span>Go back</span>
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
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
                value="Sign In"
                className="block text-center w-full p-5 rounded-md bg-black text-white font-bold font-open_sans uppercase cursor-pointer"
              />
            </form>

            <div className="mt-6 space-y-4 text-center text-sm font-normal font-open_sans text-dark_charcoal">
              <button
                onClick={() => setforgetPassword(true)}
                className="underline"
              >
                Forget password
              </button>

              <p>
                New to havenNest?{" "}
                <Link className="underline" to="/register">
                  Create an account
                </Link>
              </p>
            </div>
            <SocialLogin />
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
