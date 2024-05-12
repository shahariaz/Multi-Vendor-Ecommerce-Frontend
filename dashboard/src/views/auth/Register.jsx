import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useState } from "react";
export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const inputHandle = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandle = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen min-w-full bg-[rgb(205,202,233)] flex justify-center items-center">
      <div className="w-[350px] text-[#fff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold text-center">
            Welcome to Ecommerce
          </h2>
          <p className="text-sm mb-3 font-medium  text-center">
            Please register your account
          </p>
          <form onSubmit={submitHandle}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={inputHandle}
                value={user.name}
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded-md bg-transparent outline-none border border-slate-700"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                type="email"
                name="email"
                id="email"
                value={user.email}
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-transparent outline-none border border-slate-700"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">password</label>
              <input
                onChange={inputHandle}
                type="password"
                name="password"
                id="password"
                value={user.password}
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-md bg-transparent outline-none border border-slate-700"
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500 "
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & treams
              </label>
            </div>
            <button className="w-full px-3 py-2 rounded-md bg-slate-800 text-white hover:shadow-blue-300 hover:shadow-sm">
              Register
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already Have an account ?
                <Link className="font-bold" to="/login">
                  Sing In
                </Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3 ">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden ">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 hover:shadow-blue-700/50 justify-center items-center cursor-pointer overflow-hidden ">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
