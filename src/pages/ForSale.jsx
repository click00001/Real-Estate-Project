import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import eleventh from "../assets/image/eleventh.jpeg";
import { CiLocationOn } from "react-icons/ci";
import fourteenth from "../assets/image/fourteenth.jpg";

export default function ForSale() {
  const [showMore, setshowMore] = useState(false)
  const toggleShowMore = () =>{
    setshowMore(!showMore)
  }
  return (
    <div>
      <section className=" w-[95%  mx-auto">
        <div className=" hidden lg:block h-52 bg-[#e23c3c]"></div>
        <div className=" bg-[#f4f5f4] px-4">
          <div className="  lg:px-0 md:w-[90%] lg:w-[75%] mx-auto lg:m-auto">
            <h1 className=" font-semibold md:text-[1.5rem] py-4">
              Property For Sale In Nigeria
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className=" w-[95%] md:w-[90%] mx-auto lg:w-[75%] mt-8 lg:flex lg:justify-between">
          <div className=" lg:w-[62%]">
            <div className=" bg-[#f4f5f4] md:px-4 md:py-5 hidden md:block">
              <p className="  text-[1rem]">
                There are 72,673 available flats, houses, land and commercial
                property for sale in Nigeria. The property have been listed by
                estate agents who can be contacted using the contact information
                provided for each property listing. The list can be filtered by
                price, furnishing and recency.
              </p>
            </div>
            <div className=" bg-[#f4f5f4] md:mt-4 py-5 px-4 w-[100%]">
              <h1 className=" font-bold md:text-xl">Quick Filter</h1>
              <span className=" flex flex-wrap mt-3 mb-5 gap-2 text-[0.95rem] md:gap-5 md:text-[1rem]">
                <a className="hover:text-[#e23c3c]"  href="">Flats</a> 
                <a className="hover:text-[#e23c3c]"  href="">Houses</a>
                <a className="hover:text-[#e23c3c]"  href="">Commercial Properties</a>
                <a className="hover:text-[#e23c3c]" href="">Lands</a>
              </span>
              <span className=" flex flex-wrap gap-2 md:gap-5 text-[0.95rem] md:text-[1rem]">
                <a className="hover:text-[#e23c3c]" href="">Abia</a>
                <a className="hover:text-[#e23c3c]" href="">Abuja</a>
                <a className="hover:text-[#e23c3c]" href="">Adamawa</a>
                <a className="hover:text-[#e23c3c]" href="">Akwa Ibom</a>
                <a className="hover:text-[#e23c3c]" href="">Anambra</a>
                <a className="hover:text-[#e23c3c] hidden md:block"  href="">Bauchi</a>
                <a className="hover:text-[#e23c3c] hidden lg:block" href="">Bayelsa</a>
                <a className="hover:text-[#e23c3c] hidden lg:block" href="">Benue</a>
                <a className="hover:text-[#e23c3c] hidden lg:block" href="">Borno</a>
              </span>
              <span className=" flex flex-wrap gap-2 md:gap-5 text-[0.95rem] md:text-[1rem]">
                <a className="hover:text-[#e23c3c]" href="">Cross River</a>
                <a className="hover:text-[#e23c3c]" href="">Delta</a>
                <a className="hover:text-[#e23c3c]" href="">Ebonyi</a>
                <a className="hover:text-[#e23c3c]" href="">Edo</a>
                <a className="hover:text-[#e23c3c]" href="">Ekiti</a>
                <a className="hover:text-[#e23c3c]" href="">Enugu</a>
                <a className="hover:text-[#e23c3c] hidden md:block" href="">Gombe</a>
                <a className="hover:text-[#e23c3c] hidden md:block" href="">Imo</a>
                <a className="hover:text-[#e23c3c] hidden md:block" href="">Jigawa</a>
                <a className="hover:text-[#e23c3c] hidden md:block" href="">Kaduna</a>
                <a className="hover:text-[#e23c3c] hidden" href="">kano</a>
              </span>
              <span className=" flex flex-wrap gap-2 md:gap-5 text-[0.95rem] md:text-[1rem]">
                <a className="hover:text-[#e23c3c]" href="">Katsina</a>
                <a className="hover:text-[#e23c3c]" href="">Kebbi</a>
                <a className="hover:text-[#e23c3c]" href="">kogi</a>
                <a className="hover:text-[#e23c3c]" href="">Kwara</a>
                <a className="hover:text-[#e23c3c]" href="">Lagos</a>
                <a className="hover:text-[#e23c3c]" href="">Nasarawa</a>
                <a className="hover:text-[#e23c3c] hidden md:block"   href="">Niger</a>
                <a className="hover:text-[#e23c3c] hidden md:block"  href="">Ogun</a>
                <a className="hover:text-[#e23c3c] hidden md:block" href="">Ondo</a>{" "}
                <a className="hover:text-[#e23c3c] hidden md:block" href="">Osun</a>
                <a className="hover:text-[#e23c3c] hidden md:block" href="">Oyo</a>
              </span>
              {showMore && (
                 <span className=" flex gap-5 flex-wrap lg:gap-5 text-[0.95rem] lg:text-[1rem]">
                 <a className='hover:text-[#e23c3c]' href="">Plateau</a>
                 <a className='hover:text-[#e23c3c]' href="">Rivers</a>
                 <a className='hover:text-[#e23c3c]' href="">Sokoto</a>
                 <a className='hover:text-[#e23c3c]' href="">Taraba</a>
                 <a className='hover:text-[#e23c3c]' href="">Yobe</a>
                 <a className='hover:text-[#e23c3c]' href="">Zamfara</a>
               </span>
              )}
              <button className=" text-[#e23c3c] underline py-1" onClick={toggleShowMore}>
                {showMore ? "Show less" : "Show more"}
              </button>
              <span className=" flex gap-2 mt-5 md:text-[1rem]">
                <a className=" border-r-2 pr-2 hover:text-[#e23c3c]" href="">Furnished</a>
                <a className='hover:text-[#e23c3c]' href="">Unfurnished</a>
              </span>
            </div>
            <div className=" flex px-4 py-4 md:text-[1rem] justify-between bg-[#f4f5f4] mt-5">
              <span>
                <p>Result 1 - 21 of 23,567</p>
              </span>
              <select
                name=""
                id=""
                className=" w-32 border-red-600 text-gray-500"
              >
                <option className=" md:text-[0.9rem]" value="1">Default</option>
                <option className=" md:text-[0.9rem]" value="2">
                  <a href="">Most Recent</a>
                </option>
                <option className=" md:text-[0.9rem]" value="3">
                  <a href="">Highest Price</a>
                </option>
                <option className=" md:text-[0.9rem]" value="4">
                  <a href="">Lowest Price</a>
                </option>
                <option className=" md:text-[0.9rem]" value="5">
                  <a href="">Verification status</a>
                </option>
              </select>
            </div>
            <div className="bg-[#fffbf0] mt-5  lg:my-5 border border-yellow-600">
              <div className=" p-3 hidden md:block hover:text-[#e23c3c] text-[0.9rem] md:text-[1rem]">
                <a href="">Luxury finished 5 Bedrooms semi-detached Duplex with a Room BQ Available </a>
              </div>
                <div className=" md:flex lg:px-3">
                <div className=" flex justify-center py-3  md:w-[40%]">
                  <a href="">
                    <img src={eleventh} className=" h-[200px] w-[300px] md:h-[250px] md:w-[350px] lg:w-[250px] lg:h-[200px] " />
                  </a>
                </div>
                <div className=" px-4 md:w-[60%] md:py-3 ">
                  <a className=" text-[#e23c3c] font-semibold lg:font-bold md:text-[1rem]" href="">5 bedroom semi-detached duplex for sale</a>
                  <span className=" flex items-center gap-1 md:my-1">
                   <h1 className=" md:text-[1rem]"><CiLocationOn /></h1>
                   <p className=" font-semibold text-[0.9rem]">Guzape District, Abuja</p>
                  </span>
                  <span className=" hidden md:block md:my-2 md:text-[0.9rem]">
                    <p>For sale property type: luxury finished 5 bedroom semi detached duplex with a room bq available in a serene neighborhood. location:
                    </p>
                    <a className=" underline text-[#e23c3c]" href=""> More details</a>
                  </span>
                  <span className=" font-bold text-[#e23c3c] text-[0.9rem] md:text-[1rem]">
                    <h2>#400,000,000</h2>
                  </span>
                </div>
                </div>
                <div className=" flex justify-around mt-3 md:mt-0 bg-[#ffd46b] py-3 text-[0.9rem]">
                  <p>5 Bedrooms</p>
                  <p>6 Bathrooms</p>
                  <p>6 Toilets</p>
                  <p>3 Parking Spaces</p>
                </div>
            </div>
            <div className="bg-[#fffbf0] mt-5  lg:my-5 border">
              <div className=" p-3 hidden md:block hover:text-[#e23c3c] text-[0.9rem] md:text-[1rem]">
                <a href="">Massive 16 Rooms (Twin Duplexes)</a>
              </div>
                <div className=" md:flex lg:px-3">
                <div className=" flex justify-center py-3  md:w-[40%]">
                  <a href="">
                    <img src={fourteenth} className=" h-[200px] w-[300px] md:h-[250px] md:w-[350px] lg:w-[250px] lg:h-[200px] " />
                  </a>
                </div>
                <div className=" px-4 md:w-[60%] md:py-3 ">
                  <a className=" text-[#e23c3c] font-semibold lg:font-bold md:text-[1rem]" href="">16 bedrooms detached duplex for sale</a>
                  <span className=" flex items-center gap-1 md:my-1">
                   <h1 className=" md:text-[1rem]"><CiLocationOn /></h1>
                   <p className=" font-semibold text-[0.9rem]">Apo legislative Quarters, Apo, Abuja</p>
                  </span>
                  <span className=" hidden md:block md:my-2 md:text-[0.9rem]">
                    <p>A massive 16 duplexes ( twin duplexes) on a land of 2,500 square metre. the land has a c of o. all rooms and sitting rooms comes with
                    </p>
                    <a className=" underline text-[#e23c3c]" href=""> More details</a>
                  </span>
                  <span className=" font-bold text-[#e23c3c] text-[0.9rem] md:text-[1rem]">
                    <h2>#999,000,000</h2>
                  </span>
                </div>
                </div>
                <div className=" flex justify-around mt-3 md:mt-0 bg-[#f4f5f4] py-3 text-[0.9rem] ">
                  <p>16 Bedrooms</p>
                  <p>16 Bathrooms</p>
                  <p>20 Toilets</p>
                  <p>3 Parking Spaces</p>
                </div>
            </div>
            <div className="bg-[#fffbf0] mt-5  lg:my-5 border">
              <div className=" p-3 hidden md:block hover:text-[#e23c3c] text-[0.9rem] md:text-[1rem]">
                <a href="">Massive 16 Rooms (Twin Duplexes)</a>
              </div>
                <div className=" md:flex lg:px-3">
                <div className=" flex justify-center py-3  md:w-[40%]">
                  <a href="">
                    <img src={eleventh} className=" h-[200px] w-[300px] md:h-[250px] md:w-[350px] lg:w-[250px] lg:h-[200px] " />
                  </a>
                </div>
                <div className=" px-4 md:w-[60%] md:py-3 ">
                  <a className=" text-[#e23c3c] font-semibold lg:font-bold md:text-[1rem]" href="">16 bedrooms detached duplex for sale</a>
                  <span className=" flex items-center gap-1 md:my-1">
                   <h1 className=" md:text-[1rem]"><CiLocationOn /></h1>
                   <p className=" font-semibold text-[0.9rem]">Apo legislative Quarters, Apo, Abuja</p>
                  </span>
                  <span className=" hidden md:block md:my-2 md:text-[0.9rem]">
                    <p>A massive 16 duplexes ( twin duplexes) on a land of 2,500 square metre. the land has a c of o. all rooms and sitting rooms comes with
                    </p>
                    <a className=" underline text-[#e23c3c]" href=""> More details</a>
                  </span>
                  <span className=" font-bold text-[#e23c3c] text-[0.9rem] md:text-[1rem]">
                    <h2>#999,000,000</h2>
                  </span>
                </div>
                </div>
                <div className=" flex justify-around mt-3 md:mt-0 bg-[#f4f5f4] py-3 text-[0.9rem] ">
                  <p>16 Bedrooms</p>
                  <p>16 Bathrooms</p>
                  <p>20 Toilets</p>
                  <p>3 Parking Spaces</p>
                </div>
            </div>
            <div className="bg-[#fffbf0] mt-5  lg:my-5 border">
              <div className=" p-3 hidden md:block hover:text-[#e23c3c] text-[0.9rem] md:text-[1rem]">
                <a href="">Massive 16 Rooms (Twin Duplexes)</a>
              </div>
                <div className=" md:flex lg:px-3">
                <div className=" flex justify-center py-3  md:w-[40%]">
                  <a href="">
                    <img src={eleventh} className=" h-[200px] w-[300px] md:h-[250px] md:w-[350px] lg:w-[250px] lg:h-[200px] " />
                  </a>
                </div>
                <div className=" px-4 md:w-[60%] md:py-3 ">
                  <a className=" text-[#e23c3c] font-semibold lg:font-bold md:text-[1rem]" href="">16 bedrooms detached duplex for sale</a>
                  <span className=" flex items-center gap-1 md:my-1">
                   <h1 className=" md:text-[1rem]"><CiLocationOn /></h1>
                   <p className=" font-semibold text-[0.9rem]">Apo legislative Quarters, Apo, Abuja</p>
                  </span>
                  <span className=" hidden md:block md:my-2 md:text-[0.9rem]">
                    <p>A massive 16 duplexes ( twin duplexes) on a land of 2,500 square metre. the land has a c of o. all rooms and sitting rooms comes with
                    </p>
                    <a className=" underline text-[#e23c3c]" href=""> More details</a>
                  </span>
                  <span className=" font-bold text-[#e23c3c] text-[0.9rem] md:text-[1rem]">
                    <h2>#999,000,000</h2>
                  </span>
                </div>
                </div>
                <div className=" flex justify-around mt-3 md:mt-0 bg-[#f4f5f4] py-3 text-[0.9rem] ">
                  <p>16 Bedrooms</p>
                  <p>16 Bathrooms</p>
                  <p>20 Toilets</p>
                  <p>3 Parking Spaces</p>
                </div>
            </div>
            
          </div>


          <div className=" lg:w-[35%] mt-7 md:mt-0 border">
            <div>
              <div className=" flex justify-between border lg:gap-3 p-4 items-center">
                <p className=" text-[0.9rem]">Can't find what you're looking for?</p>
                <a
                  href=""
                  className=" border bg-[#4e595f] text-white text-xs p-2"
                >
                  Post a Request
                </a>
              </div>
            </div>
            <div className=" mt-5">
              <div className=" bg-[#f4f5f4] py-3 flex gap-2 item-center pl-8">
                <span className="text-[25px]">
                  <CiFilter />
                </span>
                <h1 className=" font-semibold text-l">Advanced Filter Option </h1>
              </div>
              <div className="mx-4 lg:mx- ml-4 mt-4">
                <label htmlFor="Location" className=" text-gray-500">
                  Location
                </label>
                <br />
                <input
                  className=" w-[100%] lg:w-[350px] border mt-1 py-2 pl-3"
                  type="search"
                  name="Location"
                  id=""
                  placeholder="Enter a State, Locality or Area"
                />
              </div>
              <div className=" mx-4 ml-4 mt-4">
                <label htmlFor="Category" className=" text-gray-500">
                  Category
                </label>
                <select
                  className=" w-[100%] lg:w-[350px] border mt-1 py-2 pl-3 outline-none border-gray-400 text-gray-500"
                  name="Category"
                  id=""
                >
                  <option value="1">All Categories</option>
                  <option value="2">For Sale</option>
                  <option value="3">Joint venture</option>
                </select>
              </div>
              <div className=" flex justify-between mx-4 ml-4 mt-4 lg:gap-10 ">
                <div className=" w-[48%]">
                  <label htmlFor="Apartment" className=" text-gray-500">
                    Types
                  </label>
                  <br />
                  <select
                    className=" w-[100%] lg:w-[155px] border mt-1 py-2 outline-none text-gray-500"
                    name="Apartment"
                    id=""
                  >
                    <option value="1">All Types</option>
                    <option value="2">Flats & Apartments</option>
                  </select>
                  <br />
                </div>
                <div className="  w-[48%]">
                  <label htmlFor="Bedrooms" className=" text-gray-500">
                    Bedrooms
                  </label>
                  <br />
                  <select
                    className=" w-[100%] lg:w-[155px] border mt-1 py-2 outline-none text-gray-500"
                    name="Bedrooms"
                    id=""
                  >
                    <option value="1">Any</option>
                    <option value="2">2 Bedrooms</option>
                  </select>
                </div>
              </div>
              <div className=" flex justify-between mx-4 ml-4 mt-4 lg:gap-10">
                <div className=" w-[48%]">
                  <label htmlFor="minprice" className=" text-gray-500">
                    Min Price
                  </label>
                  <br />
                  <select
                    className="w-[100%] lg:w-[155px] border mt-1 py-2 outline-none text-gray-500"
                    name="minprice"
                    id=""
                  >
                    <option value="1">No Min</option>
                    <option value="2">#250,000</option>
                  </select>
                  <br />
                </div>
                <div className=" w-[48%]">
                  <label htmlFor="maxprice" className=" text-gray-500">
                    Max Price
                  </label>
                  <br />
                  <select
                    className=" w-[100%] lg:w-[155px] border mt-1 py-2 outline-none text-gray-500"
                    name="maxprice"
                    id=""
                  >
                    <option value="1">No Max</option>
                    <option value="2">#1,000,000</option>
                  </select>
                </div>
              </div>
              <div className=" flex justify-between mx-4 ml-4 mt-4 lg:gap-10">
                <div className=" w-[48%]">
                  <label htmlFor="furnish" className=" text-gray-500">
                    Furnishing
                  </label>
                  <br />
                  <select
                    className=" w-[100%] lg:w-[155px] border mt-1 py-2 outline-none text-gray-500"
                    name="furnish"
                    id=""
                  >
                    <option value="1">Any</option>
                    <option value="2">Unfurnished</option>
                  </select>
                  <br />
                </div>
                <div className=" w-[48%]">
                  <label htmlFor="service" className=" text-gray-500">
                    Servicing
                  </label>
                  <br />
                  <select
                    className="w-[100%] lg:w-[155px] border mt-1 py-2 outline-none text-gray-500"
                    name="service"
                    id=""
                  >
                    <option value="1">Any</option>
                    <option value="2">Serviced</option>
                  </select>
                </div>
              </div>
              <div className=" flex justify-between mx-4 ml-4 mt-4 lg:gap-10">
                <div className=" w-[48%]">
                  <label htmlFor="Apartment" className=" text-gray-500">
                    Shared
                  </label>
                  <br />
                  <select
                    className="w-[100%] lg:w-[155px] border mt-1 py-2 outline-none text-gray-500"
                    name="Apartment"
                    id=""
                  >
                    <option value="1">Any</option>
                    <option value="2">Shared</option>
                  </select>
                  <br />
                </div>
                <div className=" w-[48%]">
                  <label htmlFor="Bedrooms" className=" text-gray-500">
                    Added to Site
                  </label>
                  <br />
                  <select
                    className=" w-[100%] lg:w-[155px] border mt-1 py-2 outline-none text-gray-500"
                    name="Bedrooms"
                    id=""
                  >
                    <option value="1">Anytime</option>
                    <option value="2">last 24 hours</option>
                  </select>
                </div>
              </div>
              <div className=" ml-4 mt-4 mx-4">
                <label htmlFor="prop-ref" className=" text-gray-500">
                  Property ref.
                </label>
                <br />
                <input
                  className="w-[100%] lg:w-[350px] border mt-1 py-2 pl-3"
                  type="number"
                  name="prop-ref"
                  id=""
                  placeholder="e.g 1234"
                />
              </div>
              <div className=" mt-4 ml-4 mx-4">
                <label htmlFor="keyword" className=" text-gray-500">
                  Keywords
                </label>
                <br />
                <input
                  className="w-[100%] lg:w-[350px] border mt-1 py-2 pl-3"
                  type="text"
                  name="keyword"
                  id=""
                  placeholder=" e.g 'pools' or 'jacuzzi'"
                />
              </div>
              <div className=" my-4 ml-4 mx-4">
                <button className="py-2 text-white bg-[#e52f28] w-[100%] lg:w-[350px] border" type="submit">Search</button>
              </div>
            </div>
            <div className=" mt-6">
              <div className=" bg-[#f4f5f4] py-3 flex gap-2 item-center pl-8">
                <span className="text-[25px]">
                  <CiFilter />
                </span>
                <h1 className=" font-semibold text-l">Available Property </h1>
              </div>
              <div className=" mx-4">
                <p className=" px-3 mt-3">
                  Currently available for sale in Nigeria
                </p>
                <div className=" border px-3 mt-3">
                  <span className=" flex font-semibold text-[0.8rem] justify-between border-t py-2">
                    <h2>Property type</h2>
                    <h2>Count</h2>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Flats
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      9,295
                    </a>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Houses
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      48,606
                    </a>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Lands
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      17,475
                    </a>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Commercial propety
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      2,754
                    </a>
                  </span>
                </div>
                <div className=" border px-3 mt-3">
                  <span className=" flex justify-between font-semibold text-[0.8rem] border-t py-2">
                    <p>Types</p>
                    <p>1 Bed</p>
                    <p>2 Bed</p>
                    <p>3 Bed</p>
                    <p>4 Bed</p>
                    <p>5 Bed</p>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Flats
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      759
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      3,415
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      4069
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      729
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      110
                    </a>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Houses
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      227
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      2,113
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      5,184
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      21,301
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      15,261
                    </a>
                  </span>
                </div>
                <div className=" border px-3 mt-3">
                  <span className=" flex font-semibold text-[0.8rem] justify-between border-t py-2">
                    <p>Land type</p>
                    <p>Count</p>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Residential land
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      8,388
                    </a>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Commercial land
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      1,427
                    </a>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Industrial land
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      108
                    </a>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Mixed-used land
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      4,694
                    </a>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      Other land
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      1,625
                    </a>
                  </span>
                  <span className=" flex justify-between text-[0.8rem] border-t py-2">
                    <a className=" hover:text-[#e23c3c]" href="">
                      All land
                    </a>
                    <a className=" hover:text-[#e23c3c]" href="">
                      17,474
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className=" border mt-5 mx-4">
              <div className=" bg-[#f4f5f4] py-3 flex gap-2 item-center pl-8">
                <span className="text-[20px] text-black">
                  <IoShareSocialOutline />
                </span>
                <h1 className=" font-semibold text-l">Share this Property list </h1>
              </div>
              <div className=" px-3 mx-4 py-4 flex gap-4">
                <span className=" text-white p-2 bg-[#3b5998]">
                  <a href="">
                    <FaFacebookF />
                  </a>
                </span>
                <span className=" text-white p-2 bg-[#1b9ce6]">
                  <a href="">
                    <FaTwitter />
                  </a>
                </span>
                <span className=" text-white p-2 bg-[#c3e4b0]">
                  <a href="">
                    <FaWhatsapp />
                  </a>
                </span>
              </div>
            </div>
            <div className=" border my-5 mx-4">
              <div className=" bg-[#f4f5f4] py-3 flex gap-2 item-center pl-8">
                <span className="text-[20px] text-black">
                <FaLink />
                </span>
                <h1 className=" font-semibold text-l">Useful links </h1>
              </div>
              <div className=" px-3 py-4 gap-4 mx-4">
                <span className=" flex items-center gap-2">
                  <h1 className=" text-[18px]"><IoIosPeople /></h1>
                  <a className=" hover:text-[#e23c3c]"href=""><p className=" text-[1rem]">View lists of Estate agents in Nigeria</p></a>
                </span>
                <span className=" flex  items-center gap-2">
                  <h1 className=" text-[18px]"><IoIosPeople /></h1>
                  <a className=" hover:text-[#e23c3c]"href=""><p className="text-[1rem]">View lists of Property developers in Nigeria </p></a>
                </span>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
