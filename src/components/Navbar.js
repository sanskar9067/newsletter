import React from 'react'
import LeadVortex from '../assets/LeadVortex.jpg';

export default function Navbar() {
    return (
        <div>
            <nav class="fixed bottom-100 bg-white border-gray-200 sticky top-0 z-50">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={LeadVortex} class="h-9" alt="Logo" style={{ borderRadius: "50%" }} />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">Lead Vortex</span>
                    </a>
                </div>
            </nav>


        </div>

    )
}
