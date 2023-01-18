import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import RainAnimation from "@/public/rain.json"

export default function WeatherCard({
   data = {},
}) {

   return (
      <>
         <motion.div className='bg-zinc-50 border-2 rounded-lg px-10 pb-5 pt-5 flex flex-col gap-2'>
            {data.name && <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .2 }} className='font-bold text-5xl'>{data.name}</motion.h1>}
            {data.main && <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .35 }}><p>Temperature</p><p><span className='font-bold text-4xl'>{data.main.temp}</span>℃</p></motion.div>}
            {data.main && <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .5 }}><p>Feels like</p><p><span className='font-bold text-4xl'>{data.main.feels_like}</span>℃</p></motion.div>}
            {data.main && <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .65 }}><p>Wind speed is</p><p><span className='font-bold text-4xl'>{data.wind.speed}</span>m/s</p></motion.div>}

            {/* {data.main && <motion.p initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .35 }}>Temperature {data.main.temp}℃</motion.p>} */}
            {/* {data.main && <motion.p initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .5 }}> {data.main.feels_like}℃</motion.p>} */}
            {/* {data.main && <motion.p initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .65 }}>Wind speed is {data.wind.speed}m/s</motion.p>} */}
            <Lottie animationData={RainAnimation} loop={true} style={{ width: 200 }} />
            {
               data.weather && data.weather.map((w, i) => {
                  return <motion.div key={i} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .8 }}>
                     <div className='capitalize'>{w.main} &#x2022; {w.description}</div>
                  </motion.div>
               })
            }
         </motion.div>
      </>
   )
}