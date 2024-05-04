import React, { useState } from 'react'
import LeadVortex from '../assets/LeadVortex.jpg';

export default function Jumbotron() {
    const [email, setEmail] = useState();

    return (
        <div>
            <section class="bg-center bg-no-repeat bg-cover bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <div className='flex justify-center'>
                        <img src={LeadVortex}
                            style={{
                                borderRadius: "50%",
                                height: "7rem",
                                marginBottom: "30px"
                            }}
                        />
                    </div>
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Lead Vortex</h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">"Empowering Internet Entrepreneurs with AI & Lead Gen Tips! 🚀
                        It's FREE🎉<br></br>
                        Boost Sales & Growth, 2x/Week!"</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <form action="#" method="post" class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:justify-center">
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" class="flex-grow px-4 py-3 border border-gray-300  focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500" required />
                            <button type="submit" class="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>

    )
}
