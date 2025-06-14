import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CgProfile } from 'react-icons/cg';
import { Button } from '../ui/button';

const LoginDialog = () => {
    const [Login, setLogin] = useState(false);

    return (
        <div>
            <Dialog className="p-8">
                <DialogTrigger>
                    <button className="bg-black flex items-center space-x-2 p-2 text-white rounded-full transition-colors">
                        <CgProfile className="text-orange-400 text-xl" />
                        <p className="text-sm font-medium">Login/Signup</p>
                    </button>
                </DialogTrigger>

                <DialogContent className="rounded-xl w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[30vw] shadow-lg bg-white p-8 sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-3xl text-start font-semibold mb-4">
                            ForkFly.<span className='text-orange-400'>In</span>
                        </DialogTitle>
                        <DialogDescription>
                            <form action="">
                                <div>
                                    {!Login && (
                                        <div className='flex text-start flex-col gap-2'>
                                            <label htmlFor="full-name" className='font-medium text-gray-700'>
                                                Full Name
                                            </label>
                                            <input
                                                id="full-name"
                                                className='p-3 border border-gray-300 rounded-md focus:outline-none'
                                                type="text"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                    )}

                                    <div className='flex flex-col text-start gap-2 mt-4'>
                                        <label htmlFor="email" className='font-medium text-gray-700'>
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            className='p-3 border border-gray-300 rounded-md focus:outline-none'
                                            type="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div className='flex flex-col text-start gap-2 mt-4'>
                                        <label htmlFor="password" className='font-medium text-gray-700'>
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            className='p-3 border border-gray-300 rounded-md focus:outline-none'
                                            type="password"
                                            placeholder="Enter your password"
                                        />
                                    </div>

                                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none">
                                        {Login ? "Login" : "Sign Up"}
                                    </Button>

                                    <p className='mt-6 text-center text-gray-600'>
                                        {Login ? "Already have an account?" : "Don't have an account?"}
                                        {Login ? (
                                            <span
                                                onClick={() => setLogin(false)}
                                                className='cursor-pointer text-blue-600 hover:text-blue-500 font-medium'
                                            >
                                                &nbsp; SignUp
                                            </span>
                                        ) : (
                                            <span
                                                onClick={() => setLogin(true)}
                                                className='cursor-pointer text-blue-600 hover:text-blue-500 font-medium'
                                            >
                                                &nbsp; Login
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default LoginDialog;
