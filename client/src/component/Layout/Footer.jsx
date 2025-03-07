import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="transition-transform transform hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">About Us</h4>
            <p className="text-gray-400 text-white">We provide top-notch educational resources to help students and professionals excel in their careers.</p>
          </div>
          
          {/* Quick Links */}
          <div className="transition-transform transform hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Courses', 'Events', 'Sitemap', 'Privacy Policy', 'Terms of Use'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="transition-transform transform hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Newsletter</h4>
            <p className="text-gray-400">Subscribe to get the latest news and updates.</p>
            <form className="mt-4 flex bg-white rounded-md overflow-hidden">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 text-black outline-none"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white font-medium transition-transform transform hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Contact */}
          <div className="transition-transform transform hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Contact Us</h4>
            <p className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt className="text-blue-400" />
              <span className="text-white">Infront of Dr. M.D. Gupta, Rajeshwari Road, Shivpuri, MP</span>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <FaPhoneAlt className="text-blue-400" />
              <a href="tel:+917974249633" className="hover:text-blue-400 transition duration-300">+91 7974249633</a>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:apusprajapati@gmail.com" className="hover:text-blue-400 transition duration-300">apusprajapati@gmail.com</a>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <FaGlobe className="text-blue-400" />
              <a href="https://www.advancedcomputerclasses.in" className="hover:text-blue-400 transition duration-300">www.advancedcomputerclasses.in</a>
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-125 text-xl text-white">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center relative z-10">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved Designed with <a href="" rel="nofollow" className="text-blue-400 hover:underline">Privacy & Policy</a></p>
        </div>
      </div>
      
      {/* Glassmorphism Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 backdrop-blur-md z-0"></div>
    </footer>
  );
};

export default Footer;
