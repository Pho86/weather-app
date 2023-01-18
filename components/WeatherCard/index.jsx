import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import RainAnimation from "@/public/rain.json";
import SunAnimation from "@/public/sunny.json";
import CloudyAnimation from "@/public/suncloudy.json";
import SnowAnimation from "@/public/snowing.json"

export default function WeatherCard({
   data = {},
}) {

   return (
      <>
         <motion.div className='bg-slate-100 border-2 rounded-lg px-10 pb-5 pt-5 flex flex-col gap-2' initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .2 }}>
            <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .2 }} className='font-bold text-5xl'>{data.name}</motion.h1>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .35 }}>
               <p>Temperature</p><p><span className='font-bold text-4xl'>{data.main.temp}</span>℃</p>
            </motion.div>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .5 }}>
               <p>Feels like</p><p><span className='font-bold text-4xl'>{data.main.feels_like}</span>℃</p>
            </motion.div>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .65 }}>
               <p>Wind speed is</p><p><span className='font-bold text-4xl'>{data.wind.speed}</span>m/s</p>
            </motion.div>

            {
               data.weather && data.weather.map((w, i) => {
                  return <motion.div key={i} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .8 }}>
                     <div className='capitalize'>{w.main} &#x2022; {w.description}</div>
                  </motion.div>
               })
            }
            {
               (() => {
                  if (data.rain) {
                     return <Lottie animationData={RainAnimation} loop={true} style={{ width: 200 }} />
                  }
                  else if (data.snow) {
                     return <Lottie animationData={SnowAnimation} loop={true} style={{ width: 200 }} />
                  }
                  else if (data.clouds.all > 50) {
                     return <Lottie animationData={CloudyAnimation} loop={true} style={{ width: 200 }} />
                  }
                  else {
                     return <Lottie animationData={SunAnimation} loop={true} style={{ width: 200 }} />
                  }
               })()
            }

         </motion.div>
      </>
   )
}