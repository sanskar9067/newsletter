import React from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import News from '../components/News'
import Footer from '../components/Footer'
import SocialMedia from '../components/SocialMedia'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <SocialMedia />
            <News />
            <Footer />
        </div>
    )
}
