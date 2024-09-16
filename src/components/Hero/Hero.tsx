import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg from '../../assets/dumbell.png'

const Hero = () => {
  return (
    <>
        <section>
            {/* Brand Info */}
            <div className="container grid grid-cols-1 md:grid-cols-2
            min-h-[650px] relative">
                    <div className='flex flex-col justify-center py-14
                    md:py-0 font-playfair'>
                        <div className="text-center md:text-left space-y-6">
                        <h1 className='text-5xl lg:text-6xl font-bold
                        leading-relaxed xl:leading-normal'>Gym Gives you the perfect <span className='text-primary'>Health</span></h1>
                        <p className='text-gray-600 xl:max-w-[500px]'>It is a long established fact that a reader will be distracted</p>
                    </div>
                    {/* Button Section */}
                    <div className="flex justify-center items-center gap-8 md:justify-start mt-4">
                        <button className='primary-btn flex items-center gap-2 mt-4'>{" "}Order Now</button>
                        <button className='flex justify-center items-center gap-2 mt-4'><FaPlay/>Watch Now</button>
                    </div>
                </div>
                {/* Hero Image */}
                <div className="flex justify-center items-center">
                    <img src={HeroImg} className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero