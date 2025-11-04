import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration :1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}  
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Transform Thoughts Into Stunning Visuals</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1} alt="" />
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>AI-Driven Image Generation from Text, Made Easy</h2>
            <p className='text-gray-600 mb-4'>Turn your ideas into visuals effortlessly with our free AI image generator. From striking graphics to unique illustrations, our tool transforms your words into captivating images instantly. Imagine it, type it, and see it come alive in seconds. </p>
            <p className='text-gray-600 '>Enter a text prompt, and our AI instantly creates high-quality images. From characters and products to completely new concepts, anything you imagine can be visualized effortlessly. Unleash your creativity — the possibilities are endless!</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
