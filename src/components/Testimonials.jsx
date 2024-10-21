import React from 'react'
import { testimonials } from '../constants'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const TopVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  }
  const ConVarient = {
    hidden: { opacity: 1, },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }


  return (
    <>
      <motion.div className="flex flex-col justify-center items-center bg-dark text-white pt-12 gap-12" initial='hidden' whileInView={'visible'} variants={ConVarient} viewport={{once :true}} id='test'>

        <motion.h1 className='text-6xl text-center' variants={TopVarient}>What people <span className='text-light'>are saying</span></motion.h1>

        <motion.div className="flex flex-wrap justify-center items-center gap-12" initial='hidden' whileInView={'visible'} variants={ConVarient} viewport={{once :true}}>

          <motion.div className="w-72 md:w-96 h-80 border flex flex-col justify-evenly border-gray-800 rounded-lg shadow-xl text-center p-6 m-4" variants={TopVarient}>

            <motion.h1 className='text-xl'>{testimonials[0].text}</motion.h1>

            <motion.div className="flex justify-evenly">
              <img className='w-16 rounded-full border border-white' src={testimonials[0].image}></img>

              <motion.div className="">
                <motion.h1 className='text-xl'>{testimonials[0].user}</motion.h1>
                <motion.h1 className='text-gray-500'>{testimonials[0].company}</motion.h1>
              </motion.div>

            </motion.div>
          </motion.div>

          <motion.div variants={TopVarient} className="w-72 md:w-96 h-80 border flex flex-col justify-evenly border-gray-800 rounded-lg shadow-xl text-center p-6 m-4">

            <motion.h1 className='text-xl'>{testimonials[1].text}</motion.h1>

            <motion.div className="flex justify-evenly">
              <img className='w-16 rounded-full border border-white' src={testimonials[1].image}></img>

              <motion.div className="">
                <motion.h1 className='text-xl'>{testimonials[1].user}</motion.h1>
                <motion.h1 className='text-gray-500'>{testimonials[1].company}</motion.h1>
              </motion.div>

            </motion.div>
          </motion.div>

          <motion.div variants={TopVarient} className="w-72 md:w-96 h-80 border flex flex-col justify-evenly border-gray-800 rounded-lg shadow-xl text-center p-6 m-4">

            <motion.h1 className='text-xl'>{testimonials[2].text}</motion.h1>

            <motion.div className="flex justify-evenly">
              <img className='w-16 rounded-full border border-white' src={testimonials[2].image}></img>

              <motion.div className="">
                <motion.h1 className='text-xl'>{testimonials[2].user}</motion.h1>
                <motion.h1 className='text-gray-500'>{testimonials[2].company}</motion.h1>
              </motion.div>

            </motion.div>
          </motion.div>

          <motion.div variants={TopVarient} className="w-72 md:w-96 h-80 border flex flex-col justify-evenly border-gray-800 rounded-lg shadow-xl text-center p-6 m-4">

            <motion.h1 className='text-xl'>{testimonials[3].text}</motion.h1>

            <motion.div className="flex justify-evenly">
              <img className='w-16 rounded-full border border-white' src={testimonials[3].image}></img>

              <motion.div className="">
                <motion.h1 className='text-xl'>{testimonials[3].user}</motion.h1>
                <motion.h1 className='text-gray-500'>{testimonials[3].company}</motion.h1>
              </motion.div>

            </motion.div>
          </motion.div>

          <motion.div variants={TopVarient} className="w-72 md:w-96 h-80 border flex flex-col justify-evenly border-gray-800 rounded-lg shadow-xl text-center p-6 m-4">

            <motion.h1 className='text-xl'>{testimonials[4].text}</motion.h1>

            <motion.div className="flex justify-evenly">
              <img className='w-16 rounded-full border border-white' src={testimonials[4].image}></img>

              <motion.div className="">
                <motion.h1 className='text-xl'>{testimonials[4].user}</motion.h1>
                <motion.h1 className='text-gray-500'>{testimonials[4].company}</motion.h1>
              </motion.div>

            </motion.div>
          </motion.div>

          <motion.div variants={TopVarient} className="w-72 md:w-96 h-80 border flex flex-col justify-evenly border-gray-800 rounded-lg shadow-xl text-center p-6 m-4">

            <motion.h1 className='text-xl'>{testimonials[5].text}</motion.h1>

            <motion.div className="flex justify-evenly">
              <img className='w-16 rounded-full border border-white' src={testimonials[5].image}></img>

              <motion.div className="">
                <motion.h1 className='text-xl'>{testimonials[5].user}</motion.h1>
                <motion.h1 className='text-gray-500'>{testimonials[5].company}</motion.h1>
              </motion.div>

            </motion.div>
          </motion.div>


        </motion.div>


      </motion.div>
    </>
  )
}
