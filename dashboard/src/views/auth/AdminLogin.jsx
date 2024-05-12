import { useState } from "react";
export default function AdminLogin() {
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
            Please Log in your account
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
          </form>
        </div>
      </div>
    </div>
  );
}
