import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content ">

      <div className="max-w-7xl mx-auto py-16 grid gap-12 lg:grid-cols-5">
    
        <div className="lg:col-span-2 flex flex-col gap-5">
       
          <h1 className="text-3xl font-bold">
            Green<span className="text-green-500">Petals</span>
          </h1>

          <p className="text-gray-300 leading-7">
            Discover premium indoor plants, decorative collections, and
            gardening essentials designed to bring freshness and nature into
            your everyday space.
          </p>

      
        </div>

      
        <nav className="flex flex-col gap-3">
          <h6 className="footer-title">Shop</h6>

          <a className="link link-hover">Indoor Plants</a>

          <a className="link link-hover">Outdoor Plants</a>

          <a className="link link-hover">Succulents</a>

          <a className="link link-hover">Plant Accessories</a>

          <a className="link link-hover">New Arrivals</a>
        </nav>

        <nav className="flex flex-col gap-3">
          <h6 className="footer-title">Company</h6>

          <a className="link link-hover">About Us</a>

          <a className="link link-hover">Our Team</a>

          <a className="link link-hover">Blogs</a>

          <a className="link link-hover">Careers</a>

          <a className="link link-hover">Contact</a>
        </nav>

     
        <div className="flex flex-col gap-4">
          <h6 className="footer-title">Contact</h6>

          <p>Phnom Penh, Cambodia</p>

          <p>support@greenpetals.com</p>

          <p>+855 12 345 678</p>

          <div className="mt-4">
            <p className="font-semibold mb-3">Subscribe to Newsletter</p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="
            input
            input-bordered
            rounded-r-none
            text-black
            w-full
            "
              />

              <button
                className="
            btn
            bg-green-600
            border-none
            rounded-l-none
            hover:bg-green-700
            text-white
            "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

    
      <div className="border-t border-white/10">
        <div
          className="
      max-w-7xl
      mx-auto
      px-8
      py-6
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-4
      "
        >
      
          <p className="text-sm text-gray-400">
            © 2026 GreenPetals. All rights reserved.
          </p>

          
          <div className="flex gap-6 text-sm">
            <a className="link link-hover">Privacy Policy</a>

            <a className="link link-hover">Terms of Service</a>

            <a className="link link-hover">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
