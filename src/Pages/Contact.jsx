import React from 'react'
import { FaPhone, FaSearchLocation } from 'react-icons/fa'
import { RiMessageFill } from 'react-icons/ri'
const Contact = () => {
    return (
        <div className=''>
            <div className="container mx-auto flex items-center flex-wrap justify-between">
                {/* First Section: Contact Information */}
                <div className="w-full md:w-4/12 p-4">
                    <span className='flex gap-3 items-center text-2xl font-semibold text-yellow-500'><FaSearchLocation className='' /><h2 className="">Our Location</h2></span>
                    <p>218 Sahera Tropical Center Room#7</p>
                    <p>New Newyork Road 1205</p>
                    <span className='flex gap-3 items-center text-2xl font-semibold mt-4 text-red-400'><FaPhone /> <h2 className="">Phone Number</h2></span>
                    <p>01923-970212, 01776-502993</p>
                    <p>+2154897369</p>
                    <span className='flex gap-3 items-center text-2xl font-semibold mt-4 text-orange-300'><RiMessageFill /> <h2 className="">Email Address</h2></span>
                    <p>hello@labartisan</p>
                    <p>hello@codexcoder.com</p>
                </div>

                {/* Second Section */}
                <div className="w-full lg:w-8/12 p-4">
                    <form className="mt-4">
                        <div className='flex gap-4 w-full'>
                            <div className="mb-4 w-full">
                                {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label> */}
                                <input
                                    className="w-full bg-white  border-b border-gray-400 focus:border-gray-700  bg-transparent focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4 w-full">
                                {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label> */}
                                <input
                                    className="w-full bg-white  border-b border-gray-400 focus:border-gray-700  bg-transparent focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <textarea
                                className="w-full bg-white  border-b border-gray-400 focus:border-gray-700  bg-transparent focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-12 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                id="message"
                                placeholder="Your Message"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-purple-700 border-b border-gray-400  py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                        >
                            Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact