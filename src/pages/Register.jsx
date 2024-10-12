import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RxSlash } from "react-icons/rx";

function Register() {
  return (
    <div>
      <section className=" bg-[#f4f5f4]">
        <div className=" text-xl font-semibold px-3 py-4 md:w-[80%] md:mx-auto">
          <h1>Register</h1>
        </div>
      </section>
      <section>
        <div className="w-[93%] my-6 md:w-[39%] border mx-auto md:mt-9">
          
            <div className=" px-5 py-3 bg-[#f4f5f4]">
              <p className="">Create your own Account</p>
            </div>
            <div className=" px-6 mt-4">
              <label htmlFor="name" className=" text-[0.9rem]">
                {" "}
                Name{" "}
              </label>
              <input
                className=" w-[100%] border h-10 outline-none mt-1 mb-4 px-2"
                type="text"
                name="name"
                id=""
              />
              <label htmlFor="username" className=" text-[0.9rem]">
                Username
              </label>
              <input
                className=" w-[100%] border h-10 outline-none mt-1 mb-4 px-2"
                type="text"
                name="username"
                id=""
              />
              <label htmlFor="email" className=" text-[0.9rem]">
                {" "}
                Email
              </label>
              <input
                className=" w-[100%] border h-10 outline-none mt-1 mb-4 px-2"
                type="email"
                name="email"
                id=""
              />
              <label htmlFor="password" className=" text-[0.9rem]">
                Password
              </label>
              <input
                className=" w-[100%] border h-10 outline-none mt-1 mb-4 px-2"
                type="password"
                name="password"
                id=""
              />
              <label htmlFor="cpassword" className=" text-[0.9rem]">
                Confirm Password
              </label>
              <input
                className=" w-[100%] border h-10 outline-none mt-1 mb-4 px-2"
                type="cpassword"
                name="password"
                id=""
              />
              <div className="">
                <p>Account type</p>
                <div className=" ">
                <span className=" flex items-center gap-4 my-3">
                  <button
                    className=" h-3 w-3 rounded-full bg-black"
                    type="button"
                  ></button>
                  <a href="">
                    <p>Individual [searching for property]</p>
                  </a>
                </span>
                <span className=" flex items-center gap-4 mb-3">
                  <button
                    className=" h-3 w-3 rounded-full bg-black"
                    type="button"
                  ></button>
                  <a href="">
                    <p>Property Owner</p>
                  </a>
                </span>
                <span className=" flex items-center gap-4 mb-3">
                  <button
                    className=" h-3 w-3 rounded-full bg-black"
                    type="button"
                  ></button>
                  <a href="">
                    <p>Estate Agent</p>
                  </a>
                </span>
                <span className=" flex items-center gap-4 mb-10">
                  <button
                    className=" h-3 w-3 rounded-full bg-black"
                    type="button"
                  ></button>
                  <a href="">
                    <p>Property Developer</p>
                  </a>
                </span>
                </div>

                <a className=" px-8 py-2 bg-red-500 text-white my-3" href="">
                  Register Now
                </a>
                <p className=" my-5 text-[0.9rem]">
                  By registering you accept our{" "}
                  <a className=" text-[#e23c3c]" href="">
                    Terms of Use{" "}
                  </a>
                  and{" "}
                  <a className=" text-[#e23c3c]" href="">
                    Privacy
                  </a>{" "}
                  and agree that we and our selected partners may contact you
                  with relevant offers and services.
                </p>
              </div>
            </div>
            <div>
              <p className="  py-4 text-[0.9rem] bg-[#f4f5f4] px-6">
                Already have an Account?{" "}
                <a className="text-[#e23c3c]" href="/signin">
                  {" "}
                  Click here to sign in
                </a>
              </p>
            </div>
          
        </div>
      </section>
      <section className=" w-[93%] mx-auto md:w-[39%] my-8">
        <div className=" bg-[#ffeded] flex flex-col justify-center items-center py-3">
            <h1 className=" text-[1.2rem] mb-2">
                Need help? Contact us
            </h1>
            <span className=" mb-2 flex items-center gap-1">
                <h1 className=""><FaTelegramPlane /></h1>
                <p><span className=" font-semibold">Telegram</span>: <a className=" text-[#e23c3c] underline" href="">@nigeriapropertycentre.com</a></p>
            </span>
            <span className=" mb-2 flex items-center gap-1">
                <h1><MdOutlineEmail /></h1>
                <p><a className=" text-[#e23c3c] underline"href="">support@nigeriapropertycentre.com</a></p>
            </span>
        </div>
      </section>
      <section className=" hidden md:block py-3 w-[80%] mx-auto bg-[#f4f5f4] rounded-lg pl-3 mt-10 mb-5">
        <div className=" flex items-center gap-2">
            <a className=" text-[#e23c3c] " href="/">Home</a>
            <h1 className=" text-gray-400"><RxSlash /></h1>
            <a className="text-[#e23c3c] " href="/register">Register</a>
        </div>
      </section>
    </div>
  );
}

export default Register;
