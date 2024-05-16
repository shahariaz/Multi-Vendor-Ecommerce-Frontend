import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(admin_login(user));
  };
  const overwirteStyle = {
    display: "flex",
    margin: "o auto",
    height: "24px",
    justifyContent: "center",
    alignItem: "center",
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage]);
  return (
    <div className="min-h-screen min-w-full bg-white flex justify-center items-center shadow-2xl">
      <div className="w-[350px] text-[#000000] p-2">
        <div className="bg-slate-200 p-4 border rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img src="http://localhost:5173/images/logo.png" alt="logo"></img>
            </div>
          </div>
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

            <button
              disabled={loading ? true : false}
              className="w-full px-3 py-2 rounded-md bg-slate-800 text-white hover:shadow-blue-300 hover:shadow-sm"
            >
              {loading ? (
                <PropagateLoader
                  margin-top="5px"
                  color="#fff"
                  cssOverride={overwirteStyle}
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
