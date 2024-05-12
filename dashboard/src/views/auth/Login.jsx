import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useState } from "react";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="min-h-screen min-w-full bg-white flex justify-center items-center shadow-2xl">
      <div className="w-[350px] text-[#000000] p-2">
        <div className="bg-slate-200 p-4 border rounded-md">
          <h2 className="text-xl mb-3 font-bold text-center">
            Welcome to Ecommerce
          </h2>
          <p className="text-sm mb-3 font-medium  text-center">
            Please Login your account
          </p>
          <form onSubmit={submitHandle}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={inputHandle}
                value={user.email}
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-transparent outline-none border border-slate-700"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">password</label>
              <input
                onChange={inputHandle}
                value={user.password}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-md bg-transparent outline-none border border-slate-700"
                autoComplete="current-password"
              />
            </div>

            <button className="w-full px-3 py-2 rounded-md bg-slate-800 text-white hover:shadow-blue-300 hover:shadow-sm">
              Login
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't have Account ?
                <Link className="font-bold" to="/register">
                  Register
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
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden text-white ">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 hover:shadow-blue-700/50 justify-center items-center cursor-pointer overflow-hidden  text-white">
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
