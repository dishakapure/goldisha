'use client';
import Image from "next/image";
import { Ship, Plane, Truck, Search, Menu, X } from 'lucide-react';
import Packages from "./components/packages/page";
import WhiteCard from "./components/white-card/page";
import GreenCard from "./components/green-card/page";
import FAQ from "./components/faq/page";
import Footer from "./components/footer/page";
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const info = [
    { no: "5.6K+", label: "Global Partners" },
    { no: "100K", label: "Monthly Deliveries" },
    { no: "24/7", label: "Customer Support" },
    { no: "150K+", label: "Satisfied Customers" },
  ];



  return (
    <div className="bg-[#effff1]">


      <div className="relative h-screen w-full">
        <Image
          src="/mainbg.jpg"
          alt="main"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex  justify-between px-8 py-4 h-20  items-center">
          {/* Logo/Title */}
          <h1 className="text-white text-3xl font-bold">GOL</h1>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>

          <div className={`absolute md:static top-20 md:top-0 right-0 w-3/4 md:w-auto md:flex transition-all duration-300 ease-in-out z-20
  ${menuOpen ? 'flex flex-col bg-white/90 shadow-lg rounded-l-lg p-6' : 'hidden'}
  md:flex md:flex-row md:bg-transparent md:shadow-none md:rounded-none md:p-0 space-y-4 md:space-y-0 md:space-x-10`}>

            <h1 className="cursor-pointer text-[#2E6F40] md:text-white hover:underline">Services</h1>
            <h1 className="cursor-pointer text-[#2E6F40] md:text-white hover:underline">Tracking</h1>
            <h1 className="cursor-pointer text-[#2E6F40] md:text-white hover:underline">About</h1>
            <h1 className="cursor-pointer text-[#2E6F40] md:text-white hover:underline">Contact</h1>
          </div>

        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center lg:ml-18 sm:items-start justify-center px-4 mt-20 font-sans text-center sm:text-left">


          <div className="flex justify-center sm:justify-start space-x-3 mb-6">
            <div className="p-1.5 sm:p-3 rounded-full bg-[#effff1]">
              <Ship className="text-[#2e6f40]" size={18} />
            </div>
            <div className="p-1.5 sm:p-3 rounded-full bg-[#effff1]">
              <Plane className="text-[#2e6f40]" size={18} />
            </div>
            <div className="p-1.5 sm:p-3 rounded-full bg-[#effff1]">
              <Truck className="text-[#2e6f40]" size={18} />
            </div>
          </div>

          {/* Heading Text */}
          <div className="text-center sm:text-left">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Global Logistics Solutions
            </h1>
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-4">
              Sustainable shipping solutions for a connected world
            </h3>
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-2">
              150+ Countries | 1000+ Routes | 24/7 Support
            </h3>
          </div>


          <div className="flex flex-row flex-wrap gap-3 mt-6 justify-center sm:justify-start">
            <button className="text-[#2E6F40] bg-white px-4 py-1.5 text-xs sm:text-sm rounded-3xl">
              Sign In
            </button>
            <button className="bg-[#2E6F40] text-white px-4 py-1.5 text-xs sm:text-sm rounded-3xl">
              Be a Merchant
            </button>
          </div>


        </div>
      </div>
      {/* <div className="flex space-x-4 mb-7">
            <div className="p-3 rounded-full bg-[#effff1]">
              <Ship className="text-[#2e6f40]" size={28} />
            </div>
            <div className="p-3 rounded-full bg-[#effff1]">
              <Plane className="text-[#2e6f40]" size={28} />
            </div>
            <div className="p-3 rounded-full bg-[#effff1]">
              <Truck className="text-[#2e6f40]" size={28} />
            </div>
          </div> */}
      {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="text-[#2E6F40] bg-white px-4 sm:px-2 py-2 text-sm sm:text-base rounded-3xl">
              Sign In
            </button>
            <button className="bg-[#2E6F40] text-white px-4 sm:px-5 py-2 text-sm sm:text-base rounded-3xl">
              Be a Merchant
            </button>
          </div> */}


      {/* <div className="px-2 ml-2 sm:px-2 md:px-16 lg:px-24 py-10">
            <h1 className="text-white text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:pr-2 ">Global Logistics Solutions</h1>
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-4">Sustainable shipping solutions for a connected world</h3>
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-2">150+ Countries | 1000+ Routes | 24/7 Support</h3>

          </div> */}

      <WhiteCard />

      <Packages />

      <div className="bg-[#2E6F40] h-40 py-6 mt-10 flex flex-wrap justify-center items-center gap-y-4 gap-x-20 sm:gap-60 px-4">
        {info.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-white text-xs sm:text-base">
            <h1 className="text-lg sm:text-3xl font-bold">{item.no}</h1>
            <h3 className="mt-1 text-[10px] sm:text-sm text-center">{item.label}</h3>
          </div>
        ))}
      </div>



      <GreenCard />



      <section className="text-center mt-10">
        <h1 className="text-[#1D591F] font-bold text-2xl sm:text-3xl">Track Your Package</h1>
        <p className="text-[#206413] mt-5 mr-10 ml-15 sm:text-xl">
          Enter your tracking number to get real-time updates on your shipment.
        </p>

        <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <input
            type="text"
            placeholder="Enter tracking number..."
            className="w-80 sm:w-96 px-3 py-1 sm:px-5 sm:py-2 rounded-md border font-sans bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E6F40]"
          />
          <button className="bg-[#2E6F40] text-white px-10 py-2 rounded-md flex items-center space-x-2 hover:bg-[#245c34] transition">
            <Search size={18} />
            <span>Track</span>
          </button>
        </div>

      </section>

      <FAQ />
      <Footer />
    </div>
  );
}
