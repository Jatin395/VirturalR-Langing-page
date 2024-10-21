import React from 'react'
import { pricingOptions } from '../constants'
import {motion} from 'framer-motion'

export default function Pricing() {
    const TopVarient = {
        hidden : {opacity : 0 , y:100},
        visible : {opacity : 1, y:0,
            transition : {
                duration : 0.8,
                ease : 'easeInOut'
            }
        }
    }
    return (
        <>

            <motion.div className="flex flex-col justify-center items-center bg-dark text-white gap-12 overflow-x-hidden pt-12" id='price'>
                
               <motion.h1 initial='hidden' whileInView={'visible'} variants={TopVarient} viewport={{once : true}} className='text-6xl'>Pricing</motion.h1>

                <motion.div className="flex justify-center items-center flex-wrap bg-dark md:p-12 gap-12 text-white">

                    <motion.div initial='hidden' whileInView={'visible'} variants={TopVarient} viewport={{once : true}} className="w-80 h-[450px] border border-gray-800 rounded-lg shadow-2xl text-center p-6">

                        <h1 className='text-4xl mb-4'>{pricingOptions[0].title}</h1>
                        <h1 className='text-4xl'>10<sub className='text-gray-400 text-xl'> /Month</sub></h1>
                        <ul className='mt-4'>
                            <li className='m-4'>{pricingOptions[0].features[0]}</li>
                            <li className='m-4'>{pricingOptions[0].features[1]}</li>
                            <li className='m-4'>{pricingOptions[0].features[2]}</li>
                            <li className='m-4'>{pricingOptions[0].features[3]}</li>
                        </ul>
                        <button className='mt-4 w-40 h-10 border border-gray-800 rounded-md hover:bg-gray-400'>Subscribe</button>

                    </motion.div>

                    <motion.div initial='hidden' whileInView={'visible'} variants={TopVarient} viewport={{once : true}} className="w-80 h-[450px] shadow-2xl rounded-lg text-center border border-gray-800 p-6">

                        <h1 className='text-4xl mb-4'>{pricingOptions[1].title}</h1>
                        <h1 className='text-4xl'>10<sub className='text-gray-400 text-xl'> /Month</sub></h1>
                        <ul className='mt-4'>
                            <li className='m-4'>{pricingOptions[1].features[0]}</li>
                            <li className='m-4'>{pricingOptions[1].features[1]}</li>
                            <li className='m-4'>{pricingOptions[1].features[2]}</li>
                            <li className='m-4'>{pricingOptions[1].features[3]}</li>
                        </ul>
                        <button className='mt-4 w-40 h-10 border border-gray-800 rounded-md hover:bg-gray-400'>Subscribe</button>

                    </motion.div>

                    <motion.div initial='hidden' whileInView={'visible'} variants={TopVarient} viewport={{once : true}} className="w-80 h-[450px] border border-gray-800 text-center p-6  rounded-lg shadow-2xl">

                        <h1 className='text-4xl mb-4'>{pricingOptions[2].title}</h1>
                        <h1 className='text-4xl'>10<sub className='text-gray-400 text-xl'> /Month</sub></h1>
                        <ul className='mt-4'>
                            <li className='m-4'>{pricingOptions[2].features[0]}</li>
                            <li className='m-4'>{pricingOptions[2].features[1]}</li>
                            <li className='m-4'>{pricingOptions[2].features[2]}</li>
                            <li className='m-4'>{pricingOptions[2].features[3]}</li>
                        </ul>
                        <button className='mt-4 w-40 h-10 border border-gray-800 rounded-md hover:bg-gray-400'>Subscribe</button>

                    </motion.div>
                </motion.div>

            </motion.div>
        </>
    )
}
