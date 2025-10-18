import React from 'react';

const ResumeCard = ({ 
  id = 1, 
  name = "Sebastián David Castro Arrieta", 
  profession = "Ingeniero de Sistemas",
  location = "Corozal",
  phone = "3011449561",
}) => {
  return (
    <div className="bg-gray-50 w-full rounded-md flex flex-col sm:flex-row items-start sm:items-center font-['roboto'] px-4 py-4 text-neutral-700 mb-2 gap-3 sm:gap-0 hover:bg-gray-100 transition-colors duration-200">
      {/* Number Badge */}
      <div className="font-['sansationLight'] flex-shrink-0">
        <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-neutral-700 text-white rounded-full font-bold text-lg">
          {id}
        </div>
      </div>
      
      {/* Divider - Hidden on mobile */}
      <div className="hidden sm:block h-16 border-r-2 border-gray-400 mx-4" />
      
      {/* Info Section */}
      <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center gap-3 sm:gap-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full sm:pr-5 gap-3 sm:gap-0">
          {/* User Details */}
          <div className="flex flex-col">
            <h2 className="text-lg sm:text-xl font-semibold">
              {name}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              {profession}
            </p>
            <p className="text-sm text-neutral-500 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-3 h-3 fill-current">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
              {location}
            </p>
          </div>
          
          {/* Phone Number */}
          <a 
            href={`tel:${phone}`}
            className="text-sm sm:text-base text-neutral-700 hover:text-red-500 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
            </svg>
            {phone}
          </a>    
        </div>
        
        {/* Download Button */}
        <button 
          className="text-white bg-green-600 rounded-xl p-2.5 hover:cursor-pointer hover:-translate-y-1 transition-all duration-200 hover:shadow-lg hover:bg-green-700 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Descargar información"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 640 640" 
            className="fill-current w-6 h-6"
          >
            <path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;