import { motion } from "framer-motion"

export default function Clouds() {
   return <>
      <motion.div className='cloud'
         initial={{ x: "-60vw", y: "25vh" }}
         animate={{ x: "100vw", y: "25vh" }}
         transition={{ ease: "linear", duration: 84, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "-45vw", y: "-25vh", scale: 0.8 }}
         animate={{ x: "100vw", y: "-25vh", scale: 0.8 }}
         transition={{ ease: "linear", duration: 81, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "50vw", y: "0vh", scale: 0.4 }}
         animate={{ x: "-100vw", y: "0vh", scale: 0.4 }}
         transition={{ ease: "linear", duration: 69, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "-20vw", y: "30vh", scale: 0.4 }}
         animate={{ x: "150vw", y: "30vh", scale: 0.4 }}
         transition={{ ease: "linear", duration: 73, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "-45vw", y: "30vh", scale: 0.6 }}
         animate={{ x: "100vw", y: "30vh", scale: 0.6 }}
         transition={{ ease: "linear", duration: 67, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "65vw", y: "25vh", scale: 0.6 }}
         animate={{ x: "-100vw", y: "25vh", scale: 0.6 }}
         transition={{ ease: "linear", duration: 74, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "0vw", scale: 0.8 }}
         animate={{ x: "100vw", scale: 0.8 }}
         transition={{ ease: "linear", duration: 80, repeat: Infinity, repeatType: "mirror", }}
      ></motion.div>
      <motion.div className='cloud'
         initial={{ x: "30vw", y: "-35vh", scale: 0.8 }}
         animate={{ x: "-100vw", y: "-35vh", scale: 0.8 }}
         transition={{ ease: "linear", duration: 65, repeat: Infinity, repeatType: "reverse", }}
      ></motion.div>
   </>
}