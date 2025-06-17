'use client';
import Image from "next/image";
import { Ship, Plane, Truck, Search, Menu, X } from 'lucide-react';
import Packages from "./components/packages/page";
import WhiteCard from "./components/white-card/page";
import GreenCard from "./components/green-card/page";
import FAQ from "./components/faq/page";
import Footer from "./components/footer/page";
import { useState } from 'react';
import HeroPage from "./components/hero_page/page";



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

      <HeroPage />



      <WhiteCard />

      <Packages />
      <section className="px-6 sm:px-20 py-16 bg-white mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1D591F] mb-10 text-center">
          News & Updates
        </h2>
        <section className="px-6 sm:px-20 py-16 bg-white mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D591F] mb-10 text-center">
            News & Updates
          </h2>

          {/* Feature News */}
          <div className="relative h-[30rem] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group mb-12">
            <img
              src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg"
              alt="Singapore Logistics Hub"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0" />
            <div className="absolute bottom-10 left-10 z-10 max-w-2xl">
              <p className="uppercase text-sm text-gray-300 font-semibold mb-2">CFS Spotlight</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug tracking-tight uppercase">
                New Hub Opened in Singapore to Expand Logistics
              </h3>
              <p className="text-sm text-[#6dc1ff] mt-4 font-medium">Murtaza Hussain</p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4 mb-12">
            {/* Top Left */}
            <div className="relative h-60 rounded-xl overflow-hidden group">
              <img src="mainbg.jpg" alt="News 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white text-sm font-semibold">
                Amazon Launches AI-Based Predictive Shipping in India
              </div>
            </div>

            {/* Center Large */}
            <div className="row-span-2 relative rounded-xl overflow-hidden group">
              <img src="/bgimg.jpeg" alt="Feature News" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <h2 className="text-3xl font-extrabold leading-snug">
                  Hyperloop Freight Corridors Begin Pilot Testing Across Europe
                </h2>
                <p className="text-sm text-red-400 mt-2 font-semibold">Editorial Desk · June 7, 2025</p>
              </div>
            </div>

            {/* Top Right */}
            <div className="relative h-60 rounded-xl overflow-hidden group">
              <img src="/bgimg1.jpeg" alt="News 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white text-sm font-semibold">
                World's First Autonomous Port Goes Live in Dubai
              </div>
            </div>

            {/* Bottom Left */}
            <div className="relative h-60 rounded-xl overflow-hidden group">
              <img src="/bgimg3.webp" alt="News 3" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white text-sm font-semibold">
                India and Japan Sign Green Shipping Pact for Asia-Pacific Routes
              </div>
            </div>

            {/* Bottom Right */}
            <div className="relative h-60 rounded-xl overflow-hidden group">
              <img src="/bgimg4.webp" alt="News 4" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white text-sm font-semibold">
                UPS Unveils Smart Locker Network in Rural Africa
              </div>
            </div>
          </div>

          {/* Updates Block Below Grid */}
          <div className="bg-[#e9f8ee] p-8 rounded-xl shadow-inner border border-[#d2f0dc]">
            <h4 className="text-xl sm:text-2xl font-bold text-[#1D591F] mb-4">Latest Operational Updates</h4>
            <ul className="space-y-3 text-sm sm:text-base text-[#2E3B2C] list-disc list-inside">
              <li><span className="font-semibold">June 5:</span> Scheduled maintenance from 12:00 AM to 3:00 AM GMT.</li>
              <li><span className="font-semibold">New Feature:</span> Real-time driver GPS tracking is now live on all routes.</li>
              <li><span className="font-semibold">Reminder:</span> Please upload customs documents 24 hours before dispatch.</li>
              <li><span className="font-semibold">Update:</span> Our mobile app v3.2 now supports dark mode and QR scanning.</li>
              <li><span className="font-semibold">Notice:</span> Weather-related delays expected in Northern Corridor shipments.</li>
            </ul>
          </div>
        </section>




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
        </section>
    </div >
  );
}
