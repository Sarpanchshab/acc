import React from "react";

function AppSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100  px-12 lg:px-72">
      {/* Left Side: Text and Buttons */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl text-centr font-bold text-gray-800 mb-4">
          Get the learning app
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Download lessons and learn anytime, anywhere with the Unacademy app.
        </p>
        {/* Download Buttons */}
        <div className="flex justify-center lg:justify-start space-x-4">
         
          <a href="https://play.google.com/store/apps/details?id=co.jorah.axsuf&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/appsection.jpg"
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
          <a href="https://apps.apple.com/us/app/classplus/id1324522260" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/appstore.jpg"
              alt="Get it on App Store"
              className="h-12"
            />
            <p className="bg-yellow-200">App Store ORG:AXSUF</p>
          </a>
        </div>
      </div>

      {/* Right Side: Mobile Screens */}
      <div className="pt-10 lg:w-1/2 flex justify-center">
        <img
          src="/img/appsectionstore.png"
          alt="Mobile App Preview"
          className="max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default AppSection;
