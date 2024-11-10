import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white mt-10 w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 py-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Logo</h3>
            <p>Address: Level 1, 12 Sample St, Sydney NSW 2000</p>
            <p>Contact: 1800 123 4567, info@relume.io</p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-800">
                <FaFacebook size={22} />
              </Link>
              <Link href="#" className="text-gray-800">
                <FaInstagram size={22} />
              </Link>
              <Link href="#" className="text-gray-800">
                <FaLinkedin size={22} />
              </Link>
              <Link href="#" className="text-gray-800">
                <FaXTwitter size={22} />
              </Link>
              <Link href="#" className="text-gray-800">
                <FaYoutube size={22} />
              </Link>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col space-y-2">
              <Link href="#">About Us</Link>
              <Link href="#">Our Services</Link>
              <Link href="#">Latest News</Link>
              <Link href="#">Contact Support</Link>
              <Link href="#">Customer Login</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="#">Join Us</Link>
              <Link href="#">Help Center</Link>
              <Link href="#">Careers Page</Link>
              <Link href="#">Feedback Form</Link>
              <Link href="#">Site Map</Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex gap-3 lg:flex-row sm:flex-col-reverse md:flex-col-reverse flex-col-reverse items-center sm:justify-start justify-start md:justify-between py-6">
          <p className="text-[14px] leading-tight text-gray-500">
            © 2024 Relume. All rights reserved.
          </p>
          <div className="flex gap-3">
            <Link className="underline lg:text-base text-xs sm:text-xs md:text-xs" href="#">Privacy Policy</Link>
            <Link className="underline lg:text-base text-xs sm:text-xs md:text-xs" href="#">Terms of Service</Link>
            <Link className="underline lg:text-base text-xs sm:text-xs md:text-xs" href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
