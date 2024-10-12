import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import tenth from "../assets/image/tenth.png";
import { RiAppleFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div>
      <section className=" bg-[#2f3d46] text-gray-300 text-[0.9rem] pb-3 ">
        <div className=" lg:w-[80%] w-[90%] lg:flex lg:justify-between py-3 mx-auto border-b-[0.1px] border-b-gray-500 pb-5">
          <div className=" lg:w-[30%]  md:w-[80%] w-[100%] ">
            <h3 className=" font-semibold my-6">About us</h3>
            <p className=" lg:w-[85%] w-[95%] mb-4">
              Nigeria Property Centre (NPC) is a leading property website in
              Nigeria with property listings for sale, rent and lease. We offer
              Nigerian property seekers an easy way to find details of property
              in Nigeria like homes, houses, lands, shops, office spaces and
              other commercial property.
            </p>
            <a href="" className="bg-[#e23c3c] py-2 px-2 rounded-sm">
              Learn more
            </a>
            <h3 className=" font-semibold py-7">Advertise With Us</h3>
            <a className=" hover:text-[#e23c3c]" href="">Advertise/Market your Property</a>
            <br />
            <a className=" hover:text-[#e23c3c]" href="">Featured Real Estate Companies</a>
            <br />
            <a className=" hover:text-[#e23c3c]"  href="">Place Banner Adverts</a>
          </div>
          <div className=" lg:w-[20%]  md:w-[80%] ">
            <h3 className=" font-semibold my-6">Market Trends</h3>
            <a className=" hover:text-[#e23c3c]" href="">Property Demand Trends </a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Average Property Prices</a>
            <h3 className=" font-semibold my-7">Popular Property</h3>
            <a className=" hover:text-[#e23c3c]"href="">Flats for rent in Abuja</a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Houses for rent in Abuja</a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Houses for sale in Abuja</a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Lands for sale in Abuja</a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Mini flats for rent in Abuja</a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Self contain for rent in Abuja</a>
            <br />
            <a className=" hover:text-[#e23c3c]" href="">Flats for rent in Lagos</a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Houses for rent in Lagos</a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Houses for sale in Lagos</a>
            <br />
            <a className=" hover:text-[#e23c3c]" href="">Land for sale in Lagos</a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Mini flats for rent in lagos</a>
            <br />
            <a className=" hover:text-[#e23c3c]"href="">Self contain for rent in lagos</a>
          </div>
          <div className="  lg:w-[20%]  md:w-[80%]">
            <h3 className=" font-semibold my-6">Companies</h3>
            <a className=" hover:text-[#e23c3c]" href="">Estate Agents</a>
            <br />
            <a className=" hover:text-[#e23c3c]" href="">Property Developers</a>
            <h3 className=" font-semibold my-7">Useful Links</h3>
            <a className=" hover:text-[#e23c3c]"href="">Property Blog</a>
            <br />
            <a className=" hover:text-[#e23c3c]" href="">Area Guide</a>
            <br />
            <a className=" hover:text-[#e23c3c]" href="">Conatct Us</a>
            <br />
            <div className=" mt-7">
              <a className=" hover:text-[#e23c3c]" href="">Private Policy</a>
              <br />
              <a className=" hover:text-[#e23c3c]" href="">Term of Use</a>
              <br />
              <a className=" hover:text-[#e23c3c]" href="">FAQs</a>
            </div>
            <h3 className=" mt-9 mb-4 font-semibold">Partner</h3>
            <a className=" hover:text-[#e23c3c]" href="">Office Detail</a>
          </div>
          <div className=" lg:w-[20%]  md:w-[80%]">
            <h3 className="font-semibold my-6">Follow Us</h3>
            <div className=" flex gap-3">
              <a
                className=" text-[15px] border p-2 bg-white text-black"
                href=""
              >
                <FaFacebook />
              </a>
              <a
                className=" text-[15px] border p-2 bg-white text-black"
                href=""
              >
                <FaTwitter />
              </a>
              <a
                className=" text-[15px] border p-2 bg-white text-black"
                href=""
              >
                <FaInstagram />
              </a>
              <a
                className=" text-[15px] border p-2 bg-white text-black"
                href=""
              >
                <FaYoutube />
              </a>
            </div>

            <h3 className="font-semibold my-6">Download our Mobile App</h3>
            <div className="flex-none md:flex lg:flex-col">
              <a href="">
                <img src={tenth} className=" w-[120px] h-[60px]" />
              </a>
              <a href="">
              <img src={tenth} className=" w-[120px] h-[60px]"/>
              </a>
            </div>

            <h3 className=" font-semibold my-6">Other Regions</h3>
            <a className=" hover:text-[#e23c3c]" href="">Kenya Property Centre</a>
            <br />
            <a className=" hover:text-[#e23c3c]" href="">Ghana Property Center</a>
          </div>
        </div>
        <p className=" w-[95%] mx-auto lg:w-[80%] lg:mx-auto py-4">
          2024 © Nigeria Property Centre. All rights reserved.
        </p>
      </section>
    </div>
  );
}
