import React from "react";
import Button from "../Component/Button";
import background from "../assets/image/night-bg.jpg";
import first from "../assets/image/first.png";
import second from "../assets/image/second.png";
import third from "../assets/image/third.jpg";
import fourth from "../assets/image/fourth.png";
import fifth from "../assets/image/fifth.jpeg";
import sixth from "../assets/image/sixth.jpeg";
import seventh from "../assets/image/seventh.jpg";
import eight from "../assets/image/eight.jpeg";
import ninth from "../assets/image/ninth.jpg";
import tenth from "../assets/image/tenth.png";
import { RiAppleFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

export default function Home() {
  const bground = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div>
      <section
        style={bground}
        className=" bg-center bg-no-repeat bg-cover lg:h-[500px] w-[100%]  text-center px-3 pb-12"
      >
        <h1 className="  text-2xl md:text-3xl lg:text-5xl text-white pt-10">Find your new property</h1>
        <span className=" flex justify-center py-10 md:w-[80%] lg:w-[50%] md:mx-auto">
          <button className=" w-[250px] border border-s-white py-[10px] bg-gray-700 text-white ">
            Rent
          </button>
          <button className=" w-[250px] border border-s-white py-[10px] bg-gray-700 text-white ">
            Sale
          </button>
          <button className=" w-[250px] border border-s-white py-[10px] bg-gray-700 text-white ">
            Short Let
          </button>
        </span>
        <div className=" w-[100%] md:w-[80%] md:mx-auto lg:w-[50%] ">
          <input
            className="   w-[100%]  h-10 md:h-12 text-lg outline-none"
            type="text"
            name=""
            id=""
            placeholder="Enter preferred location"
          />
        </div>
        <div className=" flex  flex-wrap md:w-[80%] md:mx-auto lg:w-[50%]  lg:mx-auto gap-8 justify-center lg:gap-7 lg:flex-nowrap pt-8">
          <div className=" flex flex-col items-start gap-2 w-[45%]">
            <label className="text-white" htmlFor="types">
              Types
            </label>
            <select
              className=" outline-none w-[100%] h-10"
              name="types"
              id=""
            >
              <option value="">All Types</option>
              <option value="">flats</option>
              <option value="">Apartments</option>
              <option value="">Commercials</option>
              <option value="">Land</option>
            </select>
          </div>
          <div className=" flex flex-col items-start gap-2  w-[45%]">
            <label className="text-white" htmlFor="bedroom">
              Bedroom
            </label>
            <select
              className=" outline-none w-[100%] h-10 "
              name="bedroom"
              id=""
            >
              <option value="">Any</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className=" flex flex-col items-start gap-2  w-[45%]">
            <label className="text-white" htmlFor="minprice">
              Min Price
            </label>
            <select
              className=" outline-none w-[100%] h-10"
              name="minprice"
              id=""
            >
              <option value="">No Min</option>
              <option value="">flats</option>
              <option value="">Apartments</option>
              <option value="">Commercials</option>
              <option value="">Land</option>
            </select>
          </div>
          <div className=" flex flex-col items-start gap-2 w-[45%]">
            <label className="text-white" htmlFor="maxprice">
              Max Price
            </label>
            <select
              className=" outline-none w-[100%] h-10"
              name=""
              id=""
            >
              <option value="">No Max</option>
              <option value=""># 5000000</option>
              <option value="">Apartments</option>
              <option value="">Commercials</option>
              <option value="">Land</option>
            </select>
          </div>
        </div>
        <div className=" pt-[30px] flex justify-center ">
          <button
            className=" bg-[#e23c3c] w-[100%] md:w-[80%] lg:w-[50%] lg:mx-auto py-2 rounded-sm text-lg text-white"
            type="button"
          >
            SEARCH
          </button>
        </div>
      </section>
      <section className=" px-3 flex flex-col md:justify-center md:flex-row md:flex-wrap lg:flex-nowrap md:w-[80%] md:mx-auto gap-[30px] py-16">
        <div className=" border md:w-[350px] pl-6 py-4">
          <a href="">
            <h1 className=" font-bold">Property for Sale in Nigeria</h1>
            <p className="  text-gray-600 text-left text-s mt-2">
              All for sale
            </p>
          </a>
        </div>
        <div className=" border md:w-[350px] pl-6 py-4">
          <a href="">
            <h1 className=" font-bold">Property for Rent in Nigeria</h1>
            <p className=" text-gray-600 text-left text-s mt-2">All for rent</p>
          </a>
        </div>
        <div className=" border md:w-[350px] pl-6 py-4">
          <a href="">
            <h1 className=" font-bold">Flats for Rent in Magodo, Lagos</h1>
            <p className=" text-gray-600 text-s text-left mt-2">2 bedrooms</p>
          </a>
        </div>
      </section>
      <section className=" px-3 md:w-[80%] md:mx-auto ">
        <div className=" text-center text-xl font-semibold">
          <h2>Featured Real Estate Company</h2>
          <div className=" flex justify-center flex-col items-center lg:flex-row gap-10 py-12">
            <a href="">
              <img src={first} className=" w-[250px]" />
            </a>
            <a href="">
              <img src={second} className=" w-[250px]" />
            </a>
            <a href="">
              <img src={fourth} className=" w-[250px]" />
            </a>
            <a href="">
              {" "}
              <img src={third} className=" w-[250px]" />{" "}
            </a>
          </div>
        </div>
        <div>
          <span >
           <button className="w-[100%] border py-3 mb-5 bg-[#f4f5f4] appearance-none text-center" type="button">
             Browse by states or locality in Nigeria
           </button>
          </span>
         <div className=" h-[500px] hidden">
          <img src="" alt="" />
          

          </div>
        </div>
      </section>
      <section className=" md:w-[95%] lg:w-[80%] m-auto">
        <h1 className=" font-semibold text-xl px-3 pt-3 pb-3">
          Latest listed Properties
        </h1>
        <div className=" flex flex-wrap gap-3">
          <div className="border mx-4 md:w-[95%] md:mx-auto lg:w-[49%] lg:mx-auto">
            <div className=" px-4 pt-2">
              <a href="">
                <p className=" font-semibold hover:text-[#e23c3c] ">
                  Avocado, Diana & Elizabeth Pearl Terraces, Semi-detach Dup..
                </p>
              </a>
              <div className=" md:flex md:mt-2">
                <span className=" flex justify-center my-3 md:flex-none">
                  <a href="">
                    <img src={fifth} className=" h-[220px] w-[320px] md:h-[150px] md:w-[250px] " />
                  </a>
                </span>

                <div className=" md:mx-3 lg:w-[49%]">
                  <h1 className=" font-bold text-[#e23c3c]">
                    Terrace Duplex for sale
                  </h1>
                  <p className="">
                    Avocado, diana & elizabeth pearl terraces, semi-detached &
                    duplexes talk of class, splendour and serenity, that is the
                    true definition of avocado pearl terraces, diana pearl
                    semi-detac...
                  </p>
                  <h1 className=" font-bold text-[#e23c3c] text-xl py-3">
                    #87,500,000
                  </h1>
                </div>
              </div>
            </div>
            <span className=" flex border justify-center text-center py-4 bg-[#f4f5f4]">
              <p className=" w-[33%] border-r-2">3 Bedroom</p>
              <p className=" w-[33%] border-r-2">3 Bathrooms</p>
              <p className=" w-[33%]">4 Toilets</p>
            </span>
          </div>
          <div className="border mx-4 md:w-[95%] md:mx-auto lg:w-[49%] lg:mx-auto">
            <div className=" px-4 pt-2 ">
              <a href="" className="">
                <p className=" font-semibold hover:text-[#e23c3c]">
                  Spacious 4 Bedroom Terraces duplex plus BQ, in a secured
                  Estate
                </p>
              </a>
              <div className=" md:flex md:mt-2">
                <span className=" flex justify-center my-3 md:flex-none">
                  <a href="">
                    <img src={sixth} className="  h-[220px] w-[320px] md:h-[150px] md:w-[250px] " />
                  </a>
                </span>
                <div className=" md:mx-3 lg:w-[49%]">
                  <h1 className=" font-bold text-[#e23c3c]">
                    Terrace Duplex for sale
                  </h1>
                  <p className="">
                    Avocado, diana & elizabeth pearl terraces, semi-detached &
                    duplexes talk of class, splendour and serenity, that is the
                    true definition of avocado pearl terraces, diana pearl
                    semi-detac...
                  </p>
                  <h1 className=" font-bold text-[#e23c3c] text-xl py-3">
                    #210,000,000
                  </h1>
                </div>
              </div>
            </div>
            <span className=" flex border justify-center text-center py-4 bg-[#f4f5f4]">
               <p className=" w-[33%] border-r-2">3 Bedroom</p>
               <p className=" w-[33%] border-r-2">3 Bathrooms</p>
               <p className=" w-[33%] border-r-2">4 Toilets</p>
              </span>
          </div>
          <div className="border mx-4 md:w-[95%] md:mx-auto lg:w-[49%] lg:mx-auto ">
            <div className=" px-4 pt-2 ">
              <a href="">
                <p className=" font-semibold hover:text-[#e23c3c]">
                  Spacious 4 Bedroom Terraces duplex plus BQ, in a secured
                  Estate
                </p>
              </a>
              <div className=" md:flex md:mt-2">
                <span className=" flex justify-center my-3 md:flex-none">
                  <a href="">
                    <img src={seventh} className="  h-[220px] w-[320px] md:h-[150px] md:w-[250px] " />
                  </a>
                </span>
                <div className=" mx-3 lg:w-[49%]">
                  <h1 className=" font-bold text-[#e23c3c]">
                    Terrace Duplex for sale
                  </h1>
                  <p className="">
                    Avocado, diana & elizabeth pearl terraces, semi-detached &
                    duplexes talk of class, splendour and serenity, that is the
                    true definition of avocado pearl terraces, diana pearl
                    semi-detac...
                  </p>
                  <h1 className=" font-bold text-[#e23c3c] text-xl py-3">
                    #210,000,000
                  </h1>
                </div>
              </div>
            </div>
            <span className=" flex border justify-center text-center py-4 bg-[#f4f5f4]">
               <p className=" w-[33%] border-r-2">3 Bedroom</p>
               <p className=" w-[33%] border-r-2">3 Bathrooms</p>
               <p className=" w-[33%] border-r-2">4 Toilets</p>
              </span>
          </div>
          <div className="border mx-4 md:w-[95%] md:mx-auto lg:w-[49%] lg:mx-auto">
            <div className=" px-4 pt-2">
              <a href="">
                <p className=" font-semibold hover:text-[#e23c3c]">
                  Spacious 4 Bedroom Terraces duplex plus BQ, in a secured
                  Estate
                </p>
              </a>
              <div className=" md:flex md:mt-2">
                <span className=" flex justify-center my- md:flex-none">
                  <a href="">
                    <img src={eight} className="  h-[220px] w-[320px] md:h-[150px] md:w-[250px] " />
                  </a>
                </span>
                <div className="  mx-3 lg:w-[49%]">
                  <h1 className=" font-bold text-[#e23c3c]">
                    Terrace Duplex for sale
                  </h1>
                  <p className="">
                    Avocado, diana & elizabeth pearl terraces, semi-detached &
                    duplexes talk of class, splendour and serenity, that is the
                    true definition of avocado pearl terraces, diana pearl
                    semi-detac...
                  </p>
                  <h1 className=" font-bold text-[#e23c3c] text-xl py-3">
                    #210,000,000
                  </h1>
                </div>
              </div>
            </div>
            <span className=" flex border justify-center text-center py-4 bg-[#f4f5f4]">
               <p className=" w-[33%] border-r-2">3 Bedroom</p>
               <p className=" w-[33%] border-r-2">3 Bathrooms</p>
               <p className=" w-[33%] border-r-2">4 Toilets</p>
              </span>
          </div> 
        </div>
        <div className=" h-[100px]">
          <img src="" alt="" />

        </div>
      </section>
      <section className=" bg-[#f4f5f4]">
        <div className=" md:w-[80%] md:m-auto px-4 pt-6 pb-10">
          <h1 className=" font-bold text-xl">About Nigeria Property Centre</h1>
          <p className=" mt-4">
            Nigeria Property Centre is a real estate and property website in
            Nigeria with property listings for sale, rent and lease. We offer
            Nigerian property seekers an easy way to find details of property
            like homes, houses, lands, shops, office spaces and other commercial
            properties to buy or rent. Nigeria Property Centre provides a
            platform for advertising property from organisations and Nigerian
            private property owners.
          </p>
          <p className=" mt-4">
            Nigeria Property Centre (NPC) is the clear leading property website
            with lots of users, advertising members and properties. Our
            advertisers are property professionals such as estate agents,
            letting (rental) agents, new homes developers and Nigerian private
            property owners who offer properties within Nigeria for property
            hunters.
          </p>
          <div className=" flex justify-evenly items-center flex-col lg:flex-row">
            <div className="  flex flex-col justify-center items-center">
              <h1 className=" font-bold text-[5rem]">18,421</h1>
              <p className=" font-bold text-[1rem]">AGENTS & DEVELOPERS</p>
            </div>
            <div className="  flex flex-col justify-center items-center">
              <h1 className=" font-bold text-[5rem]">114,936</h1>
              <p className=" font-bold text-[1rem]">PROJECTS & LISTINGS</p>
            </div>
            <div className="  flex flex-col justify-center items-center">
              <h1 className=" font-bold text-[5rem]">293</h1>
              <p className=" font-bold text-[1rem]">AREA COVERED</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" pb-10 border">
        <div className=" w-[80%] m-auto">
          <h1 className=" font-semibold text-xl pt-5 pb-4">How it works</h1>
          <iframe src="https://www.youtube.com/embed/nK1BwdLw0Co" className=" h-[85vh] w-[100%]">
          </iframe>
        </div>
      </section>
      <section>
        <div className=" text-center px-4">
          <h1 className=" font-semibold text-xl mt-6">
            Find New Properties Anytime, Anywhere!
          </h1>
          <p className=" mt-4">
            {" "}
            Download our <b>Android app</b> or <b>iOS app</b> to get quick
            access to property on Nigeria Property Centre from your mobile
            phone.
          </p>

          <div className="  my-5">
            <span className=" flex justify-center">
              <img src={ninth} className=" " />
            </span>
            <span className=" flex justify-center flex-col items-center sm:flex-row">
              <a href="">
                <img src={tenth} className=" w-[200px] h-[90px]" />
              </a>
              <a href="">
                <img src={tenth} className=" w-[200px] h-[90px]" />
              </a>
            </span>
          </div>
        </div>
        <div className=" bg-[#e23c3c]">
          <div className=" w-[80%] py-7 mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center">
            <h1 className=" text-white text-2xl font-semibold mb-5 text-center md:w-[65%] md:text-start">
              Are you an estate agent or developer? List your property for FREE.
            </h1>
            <span className=" text-white text-xl border-2 px-5 py-2 hover:bg-white hover:text-red-600">
              <a href="/Register"><button>Register Now!**</button></a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
