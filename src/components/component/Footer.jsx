import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-gray-200 py-10">
            <div className="mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="flex flex-col sm:items-start">
                        <h1
                            onClick={() => navigate("/")}
                            className="text-3xl font-bold text-gray-900 cursor-pointer mb-4"
                        >
                            ForkFly<span className="text-orange-400">.In</span>
                        </h1>
                        <div className="flex gap-4 mb-4">
                            <img className="h-10" src="/App Store.png" alt="App Store" />
                            <img className="h-10" src="/Google Play.png" alt="Google Play" />
                        </div>
                        <p className="sm:text-left text-gray-600 mb-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nostrum nihil pariatur molestias impedit.
                        </p>
                        <div className="flex gap-5 mt-3 sm:justify-start">
                            <Facebook className="cursor-pointer hover:text-blue-600 transition-colors" />
                            <Twitter className="cursor-pointer hover:text-blue-400 transition-colors" />
                            <Linkedin className="cursor-pointer hover:text-blue-700 transition-colors" />
                        </div>
                    </div>


                    <div className="flex flex-col sm:items-start">
                        <h1 className="text-xl font-semibold text-gray-800 mb-4">Company</h1>
                        <ul className="text-gray-600 space-y-2">
                            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
                            <li className="hover:text-gray-900 cursor-pointer">Team</li>
                            <li className="hover:text-gray-900 cursor-pointer">Careers</li>
                            <li className="hover:text-gray-900 cursor-pointer">Blog</li>
                        </ul>
                    </div>


                    <div className="flex flex-col sm:items-start">
                        <h1 className="text-xl font-semibold text-gray-800 mb-4">Support</h1>
                        <ul className="text-gray-600 space-y-1">
                            <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
                            <li className="hover:text-gray-900 cursor-pointer">FAQs</li>
                            <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-gray-900 cursor-pointer">Terms of Use</li>
                        </ul>
                    </div>
                </div>
                <div className="h-[2px] mt-8 bg-black w-full" ></div>
                <div className="text-center mt-2 text-gray-600">
                    <p>&copy; 2024 ForkFly. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
