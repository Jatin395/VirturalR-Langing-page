import React from 'react'
import { features } from '../constants'
import {motion} from 'framer-motion'

export default function Features() {
  const TopVarient = {
    hidden : {opacity : 0 , y:100},
    visible : {opacity : 1, y:0,
        transition : {
            duration : 0.8,
            ease : 'easeInOut'
        }
    }
}
const ConVarient = {
    hidden : {opacity : 1,},
    visible : {opacity : 1,
        transition : {
            staggerChildren : 0.3
        }
    }
}
  return (
    <>
      <motion.div className="flex flex-col justify-center items-center bg-dark text-white gap-8 pt-12 p-4" initial='hidden' whileInView={'visible'} viewport={{once : true}} variants={ConVarient} id='fre'>

        <motion.h1 className='text-light font-extrabold' variants={TopVarient}>FEATURE</motion.h1>
        <motion.h1 className='text-6xl text-center' variants={TopVarient}>Easily build <span className='text-light'>your code</span></motion.h1>

        <motion.div className="flex flex-wrap justify-center items-center mt-6 gap-12" variants={TopVarient}>

          <motion.div className="w-96 h-80 border flex flex-col justify-evenly border-gray-800 rounded-lg shadow-xl text-center p-6 m-4" variants={TopVarient}>
            <h1 className='text-2xl'>{features[1].text}</h1>
            <p className='text-gray-500'>{features[1].description}</p>
          </motion.div>

          <motion.div className="w-96 h-80 flex flex-col justify-evenly border border-gray-800 rounded-lg shadow-xl text-center p-6 m-4" variants={TopVarient}>
            <h1 className='text-2xl'>{features[2].text}</h1>
            <p className='text-gray-500'>{features[2].description}</p>
          </motion.div>

          <motion.div className="w-96 h-80 flex flex-col justify-evenly border border-gray-800 rounded-lg shadow-xl text-center p-6 m-4" variants={TopVarient}>
            <h1 className='text-2xl'>{features[3].text}</h1>
            <p className='text-gray-500'>{features[3].description}</p>
          </motion.div>

          <motion.div className="w-96 h-80 flex flex-col justify-evenly  border border-gray-800 rounded-lg shadow-xl text-center p-6 m-4" variants={TopVarient}>
            <h1 className='text-2xl'>{features[4].text}</h1>
            <p className='text-gray-500'>{features[4].description}</p>
          </motion.div>

          <motion.div className="w-96 h-80 flex flex-col justify-evenly border border-gray-800 rounded-lg shadow-xl text-center p-6 m-4" variants={TopVarient}>
            <h1 className='text-2xl'>{features[5].text}</h1>
            <p className='text-gray-500'>{features[5].description}</p>
          </motion.div>

          <motion.div className="w-96 h-80 border flex flex-col justify-evenly border-gray-800 rounded-lg shadow-xl text-center m-4 p-6" variants={TopVarient}>
            <h1 className='text-2xl'>{features[0].text}</h1>
            <p className='text-gray-500'>{features[0].description}</p>
          </motion.div>

        </motion.div>


      </motion.div>
    </>
  )
}
