import React from 'react'
import v1 from '../assets/video1.mp4'
import v2 from '../assets/video2.mp4'
import {motion} from 'framer-motion'

export default function Home() {
    const TopVarient = {
        hidden : {opacity : 0 , y:100},
        visible : {opacity : 1,y:0,
            transition : {
                duration : 0.5,
                ease : 'easeOut'
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
            <motion.div className="pt-16 flex flex-col justify-center items-center p-4 bg-dark text-white" initial='hidden' animate='visible' variants={ConVarient} id='home'>

                <motion.h1 className='text-6xl text-center' variants={TopVarient}>VirturalR build tools <span className='text-light'>for <br /> developers</span></motion.h1>
                <motion.p className='text-xl mt-6 text-gray-500 text-center' variants={TopVarient}>Enpower your creativity and bring your VR app ideas to life with our development tools. <br />Get started today and turn your imaginaton into the reality</motion.p>

                <motion.div className="mb-10 text-center"  variants={TopVarient}>
                    <motion.button className='m-6 w-40 h-12 bg-light text-white p-2 rounded-md hover:scale-95' >Start for free</motion.button>
                    <motion.button className='m-6 border border-gray-300 p-2 w-40 h-12 hover:bg-gray-400  rounded-md' >Documentation </motion.button>
                </motion.div>

                <motion.div className="flex flex-col md:flex-row items-center justify-center p-16 gap-4 mt-6" variants={TopVarient}>
                    <motion.video className='w-96 md:w-1/2 rounded-md' muted loop autoPlay>
                        <source src={v1} type='video/mp4'></source>
                    </motion.video>
                    <motion.video className='w-96 md:w-1/2 rounded-md' muted loop autoPlay>
                        <source src={v2} type='video/mp4'></source>
                    </motion.video>
                </motion.div>

            </motion.div>
        </>
    )
}
