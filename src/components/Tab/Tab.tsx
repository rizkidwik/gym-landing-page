import { useState } from 'react'
import  { ProductsData } from '../../mockData/data'
import { motion } from "framer-motion"

const Tab = () => {
    const [activeTab, setActiveTab] = useState("All")
    const tabs = ["All", "Yoga", "Muscles"]
    const filteredCards = activeTab === "All" ? ProductsData : 
    ProductsData.filter(product => product.category === activeTab)

    return (
    <>
        <div>
            <div className="container my-12 md:my-16">
                {/* Tab Button Section */}
                <div className="flex space-x-4 mb-4 p-6">
                    {
                        tabs.map((tab, index) => (
                            <motion.button
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setActiveTab(tab)}
                            className={`text-lg font-bold py-2 px-4 ${activeTab === tab ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}>{tab}</motion.button>
                        ))
                    }
                </div>
                {/* Tab Card Section */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        filteredCards.map((product) => (
                                <motion.div 
                                key={product.id}
                                initial={{ opacity: 0, x:10 }}
                                whileInView={{ opacity: 1, x:1 }}
                                className="p-4 border rounded shadow-sm space-y-4">
                                    <img src={product.img} alt="" className="w-full h-[240px] object-cover"/>
                                    <div className="p-4 border rounded shadow ">
                                        <h1 className="text-lg font-bold mb-2">{product.title}</h1>
                                        <p className="text-gray-600 mb-4">{product.info}</p>
                                        <p className="text-gray-600">{product.price}</p>
                                    </div>
                                </motion.div>
                        ))
                    }
                        </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Tab