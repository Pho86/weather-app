import { motion } from "framer-motion"

export default function Clouds() {
   return <>
      <motion.div className='cloud'
         initial={{ x: "-60vw", y: "25vh" }}
         animate={{ x: "100vw", y: "25vh" }}
         transition={{ ease: "linear", duration: 60, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "-45vw", y: "-25vh", scale: 0.8 }}
         animate={{ x: "100vw", y: "-25vh", scale: 0.8 }}
         transition={{ ease: "linear", duration: 45, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "10vw", y: "0vh", scale: 0.4 }}
         animate={{ x: "150vw", y: "0vh", scale: 0.4 }}
         transition={{ ease: "linear", duration: 56, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "-20vw", y: "30vh", scale: 0.4 }}
         animate={{ x: "150vw", y: "30vh", scale: 0.4 }}
         transition={{ ease: "linear", duration: 65, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "-45vw", y: "30vh", scale: 0.6 }}
         animate={{ x: "100vw", y: "30vh", scale: 0.6 }}
         transition={{ ease: "linear", duration: 46, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "-65vw", y: "25vh", scale: 0.6 }}
         animate={{ x: "100vw", y: "25vh", scale: 0.6 }}
         transition={{ ease: "linear", duration: 55, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "0vw", scale: 0.8 }}
         animate={{ x: "100vw", scale: 0.8 }}
         transition={{ ease: "linear", duration: 50, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
   </>
}