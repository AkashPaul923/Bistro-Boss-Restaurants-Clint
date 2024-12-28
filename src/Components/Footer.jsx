import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0E1627] text-white">
        <div className="max-w-screen-md mx-auto px-4 py-6 lg:py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                {/* Contact Us Section */}
                <div className="text-center  mb-6 lg:mb-0 ">
                    <h2 className="text-lg font-bold mb-2">CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>

                {/* Social Media Section */}
                <div className="text-center ">
                    <h2 className="text-lg font-bold mb-2">Follow US</h2>
                    <p>Join us on social media</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" aria-label="Facebook" className="text-blue-600">
                            <FaFacebookF className="text-2xl" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-violet-950">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-blue-400">
                            <FaTwitter className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Copyright Section */}
        <div className="py-8 text-center text-sm text-white bg-[#151515]">
            <p>Copyright &copy; CulinaryCloud. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
