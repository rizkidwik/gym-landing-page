import React from 'react'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'
import { GrYoga } from 'react-icons/gr'
import { motion } from 'framer-motion'
import { SlideLeft } from '../../utility/animation'

const EquipmentsData = [
    {
        id: 1,
        title: "Yoga Equipments",
        desc: "Yoga lorem ipsm",
        icons: <GrYoga/>,
        delay: 0.3
    },
    {
        id: 2,
        title: "Muscle Equipments",
        desc: "Muscle lorem ipsm",
        icons: <FaDumbbell/>,
        delay: 0.6
    },
    {
        id: 3,
        title: "Fitness Equipments",
        desc: "Fitness lorem ipsm",
        icons: <GiGymBag/>,
        delay: 0.9
    }
]
const Equipments = () => {
  return (
    <div>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-4 gap-6 font-playfair">
                <div className="space-y-4 p-6">
                    <h1 className="text-3xl md:text-4xl font-bold">what we offer for you?</h1>
                    <p className='text-gray-500'>Lorem Ipsum dolor sit amet</p>
                </div>
                {
                    EquipmentsData.map((data) => {
                        return (
                        <motion.div 
                        variants={SlideLeft(data.delay)} 
                        initial="hidden"
                        whileInView="visible"
                        key={data.id}
                        className="space-y-4 p-6 bg-gray-100
                        hover:bg-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.1)] rounded-xl">
                            <div className="text-4xl">{data.icons}</div>
                            <h1 className="text-2xl font-semibold">{data.title}</h1>
                            <p className='text-gray-500'>{data.desc}</p>
                        </motion.div>
                    )
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Equipments