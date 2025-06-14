import React from 'react';

const AppDownload = () => {
    return (
        <div className='mt-7 relative bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 rounded-xl p-6 sm:p-8 lg:p-12'>
            <div className='flex justify-center items-center'>
                <img
                    className='w-full h-auto rounded-xl shadow-xl'
                    src="/AppDownload.png"
                    alt="App Download"
                />
            </div>
            <div className='absolute bottom-[10%] right-10 text-white text-center sm:text-center lg:text-left'>
                <h1 className='text-[3vw] font-extrabold leading-tight mb-4 sm:mb-6 text-shadow-lg'>
                    <span className='text-green-400 font-bold'>ForkFly</span><span className="text-indigo-400">.In</span> App
                </h1>
                <h2 className='text-lg hidden lg:flex font-semibold mb-4'>
                    Personalised & Instant
                </h2>
                <p className='text-base mb-6 hidden lg:flex'>
                    Download the &nbsp; <span className='text-orange-400 font-bold'>ForkFly &nbsp;</span> App for faster Orders and a smoother experience!
                </p>
                <div className="flex gap-6 mb-4 justify-center sm:justify-center lg:justify-start">
                    <img
                        className="h-8 sm:h-12 cursor-pointer md:h-14 transform transition-transform duration-300 ease-in-out hover:scale-110"
                        src="/App Store.png"
                        alt="App Store"
                    />
                    <img
                        className="h-8 cursor-pointer sm:h-12 md:h-14  transform transition-transform duration-300 ease-in-out hover:scale-110"
                        src="/Google Play.png"
                        alt="Google Play"
                    />
                </div>
            </div>
        </div>
    );
};

export default AppDownload;
