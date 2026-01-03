import React, { useEffect } from "react";
import { useFormik } from "formik";
import { User } from "lucide-react";
import { toast } from "react-toastify";
import axiosAuth from "../api/axiosAuth";
import { EmailInput, PasswordInput } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/layout/AppHeader";
import { useLoader } from "../contexts/LoaderContext";
import { loginSchema } from "../validations/auth";
import { useAuth } from "@/contexts/useAuth";
type Props = {};
const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoader();
  const { token, setToken } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const { data } = await axiosAuth.post(`/users/login`, values);
        if (data?.user) {
          toast.success(data?.message);
          data?.accessToken && localStorage.setItem("accessToken", data?.accessToken);
          setToken(data?.accessToken);
          navigate("/");
          return;
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Login failed");
      } finally {
        setLoading(false); // ✅ ensures loader is always stopped
      }
    },
  });
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="container_main min-h-screen flex flex-col items-center p-6">
      <AppHeader />
      <div className="flex-1 flex items-center md:items-center md:justify-center w-full">
        <div className="login_inner_containe w-full">
          <div className="flex flex-col md:flex-row p-4">
            <div className="login_left_part flex-1 flex items-center justify-center flex-col p-4 md:border-r-2 border-b-2 md:border-b-0 border-gray-200">
              <div className="bg-white border-4 rounded-full p-4 max-w-max">
                <User size={80} />
              </div>
              <div className="login_form w-full text-center">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group mt-5">
                    <EmailInput
                      chnageFunc={formik.handleChange}
                      placeHolder="User Email"
                      className="p-3 w-2/3 md:w-2/4 rounded-2xl bg-amber-50"
                    />
                    <p className="mt-3 text-teal-300 font-bold">
                      {formik.errors.email}
                    </p>
                  </div>
                  <div className="form-group mt-5">
                    <PasswordInput
                      chnageFunc={formik.handleChange}
                      placeHolder="User Password"
                      className="p-3 w-2/3 md:w-2/4 rounded-2xl bg-amber-50"
                    />
                    <p className="mt-3 text-teal-300 font-bold">
                      {formik.errors.password}
                    </p>
                  </div>
                  <div className="flex w-1/3 m-auto justify-center mt-8 gap-4">
                    <button
                      type="submit"
                      className="flex-1 border bg-green-500 uppercase rounded-3xl px-8 py-3 text-lg font-bold text-white cursor-pointer"
                    >
                      Login
                    </button>
                    <p className="self-center text-white font-bold text-lg">
                      or
                    </p>
                    <button
                      type="submit"
                      className="flex-1 border bg-green-500 uppercase rounded-3xl px-8 py-3 text-lg font-bold text-white"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="login_right_part flex-1 p-4 px-8 md:border-l-2 border-gray-200">
              <div className="h-full flex flex-col justify-between">
                <p className="heading text-5xl text-white">
                  <span className="font-bold">Welcome</span>
                  <span className="md:block"> Back</span>
                </p>
                <p className="description md:w-[70%] text-white mt-8 text-lg">
                  Manage your expenses smartly. Take control of your budget,
                  analyze spending and save more every month — all in one place.
                </p>
                <div className="mt-8">
                  <button
                    type="button"
                    className="border bg-green-500 uppercase rounded-3xl px-8 py-3 text-lg font-bold text-white"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
