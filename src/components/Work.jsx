import React from 'react'
import flow from '../assets/code.jpg'
import { checklistItems } from '../constants'
import {motion} from 'framer-motion'

export default function Work() {
    
    const LeftVarient = {
        hidden :{opacity : 0, x : -10},
        visible : {opacity : 1, x :0,
            transition : {
                duration : 0.4,
                ease : 'easeOut'
            }
        }
    }
    const RightVarient = {
        hidden :{opacity : 0, x : 10},
        visible : {opacity : 1, x :0,
            transition : {
                duration : 0.4,
                ease : 'easeOut'
            }
        }
    }
    const TopVarient = {
        hidden : {opacity : 0 , y:10},
        visible : {opacity : 1, y:0,
            transition : {
                duration : 0.8,
                ease : 'easeInOut'
            }
        }
    }
    return (
        <div className="flex flex-col justify-center items-center bg-dark text-white p-4 pt-16" id='work'>

            <motion.h1 initial='hidden' whileInView={'visible'} viewport={{once : true}} variants={TopVarient} className='text-6xl text-center'>Accelerate your <span className='text-light'>coding workflow</span></motion.h1>

            <div className="mt-20 flex flex-col gap-12 items-center justify-center md:flex-row">

                <motion.div className="w-1/2" initial='hidden' whileInView={'visible'} viewport={{once : true}} variants={LeftVarient}>
                    <img src={flow} className=''></img>
                </motion.div>

                <motion.div className="" initial='hidden' whileInView={'visible'} viewport={{once : true}} variants={RightVarient}>

                    <div className="mb-6 md:mb-12">
                        <dt className='text-center md:text-start text-xl md:text-3xl'>{checklistItems[0].title}</dt>
                        <dt className='text-center md:text-start text-md md:text-lg text-gray-500'>{checklistItems[0].description}</dt>
                    </div>

                    <div className="mb-6 md:mb-12">
                        <dt className='text-center md:text-start text-xl md:text-3xl'>{checklistItems[1].title}</dt>
                        <dt className='text-center md:text-start text-md md:text-lg text-gray-500'>{checklistItems[1].description}</dt>
                    </div>

                    <div className="mb-6 md:mb-12">
                        <dt className='text-center md:text-start text-xl md:text-3xl'>{checklistItems[2].title}</dt>
                        <dt className='text-center md:text-start text-md md:text-lg text-gray-500'>{checklistItems[2].description}</dt>
                    </div>

                    <div className="mb-6 md:mb-12">
                        <dt className='text-xl text-center md:text-start md:text-3xl'>{checklistItems[3].title}</dt>
                        <dt className='text-center md:text-start text-md md:text-lg text-gray-500'>{checklistItems[3].description}</dt>
                    </div>

                </motion.div>

            </div>

        </div>
    )
}
