// This is the login page
// This page will fetch the data and check if the entered user name and password is there in dummyJSON serve
// If not it will show the appropriate error on the login section
// After successful authentication it will save the id and token to localstorage for profile page reference and
// it will redirect us to the profile page

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    localStorage.clear();
    setError("");
    setLoading(true);

    let json = "";
    let response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: password,
      }),
    });

    if (response.ok) {
      json = await response.json();
      localStorage.setItem("id", json.id);
      localStorage.setItem("token", json.token);
      navigate("/profile");
    } else {
      let data = await response.json();
      setError(data.message);
      setLoading(false);
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen flex items-center justify-center">
      <form className="text-xl font-[500] text-black flex flex-col rounded-3xl w-1/3 p-12 backdrop-blur-md bg-white/30 h-[80%] gap-8 md:w-1/2 sm:w-[90%] sm:h-[90%] sm:p-8 xs:p-4 tall:w-[60%]">
        <div className="relative mt-4">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={user}
            className="peer h-12 w-full bg-transparent border-b-2 border-slate-600 outline-none hover: placeholder:text-black "
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <label
            htmlFor="username"
            className="absolute -top-6 left-0 transition-all text-slate-800 peer-placeholder-shown:text-transparent"
          >
            Username
          </label>
        </div>

        <div className="relative mt-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            className="peer h-12 w-full bg-transparent border-b-2 border-slate-600 outline-none hover: placeholder:text-black "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label
            htmlFor="password"
            className="absolute -top-6 left-0 transition-all text-slate-800 peer-placeholder-shown:text-transparent"
          >
            Password
          </label>
        </div>

        <div className="mt-4">
          <input
            type="submit"
            value="Login"
            className="self-start w-1/3 rounded-lg h-12 bg-slate-800 text-sky-200 cursor-pointer inline-block"
            onClick={handleSubmit}
          />
         
        </div>
        {error !== "" && <div>{error}</div>}

        <div className="flex-1 flex items-end justify-between pl-2 md:flex-col md:justify-end md:items-start md:gap-4">
          <div>
            <a href="https://dummyjson.com/users" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg"
                alt="dummyJSON_vector_logo"
                width="30px"
                className="inline-block align-middle md:hidden"
              />{" "}
            
            </a>
          </div>
          
        </div>
      </form>
    </div>
  );
}