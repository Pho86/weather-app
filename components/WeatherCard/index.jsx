import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import RainAnimation from "@/public/rain.json";
import SunAnimation from "@/public/sunny.json";
import SunCloudyAnimation from "@/public/suncloudy.json";
import CloudyAnimation from "@/public/cloudy.json";
import SnowAnimation from "@/public/snowing.json"
import MistAnimation from "@/public/mist.json"
import ThunderAnimation from "@/public/Thunderstorm.json"

export default function WeatherCard({
   data = {},
}) {

   return (
      <>
         <motion.div className='bg-gradient-to-t from-neutral-100 to-zinc-50 border-2 rounded-lg px-10 py-6 flex flex-col gap-2 drop-shadow-md transition duration-100 hover:drop-shadow-xl cursor-pointer mt-16'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .2 }}
            whileHover={{
               scale: 1.05,
               transition: { duration: .15 },
            }}
            drag={true}
            dragConstraints={{ left: -200, right: 200, top: -20, bottom: 200 }}
            dragElastic={false}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 50 }}
         >

            <div className='flex justify-between gap-3'>
               <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .2 }} className='font-bold text-5xl'>{data.name.length > 20 ? data.name.subtring(0, 1) : data.name} </motion.h1>
               <h2 className=''>{data.sys.country}</h2>
            </div>

            <div className='flex justify-between gap-6'>
               <div className='flex flex-col gap-2 justify-between'>
                  <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .35 }}>
                     <p>Temperature</p><p className='text-2xl'><span className='font-bold text-4xl'>{data.main.temp}</span>℃</p>
                  </motion.div>
                  <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .5 }}>
                     <p>Feels like</p><p className='text-2xl'><span className='font-bold text-4xl'>{data.main.feels_like}</span>℃</p>
                  </motion.div>
                  <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .65 }}>
                     <p>Wind gust is</p><p className='text-2xl'><span className='font-bold text-4xl'>{data.wind.gust ? data.wind.gust : data.wind.speed}</span>m/s</p>
                  </motion.div>
               </div>

               <div className=''>
                  {
                     (() => {
                        if (data.weather) {
                           for (let i = 0; i < data.weather.length; i++) {
                              if (data.weather[i].main == "Snow" || data.snow) {
                                 return <Lottie animationData={SnowAnimation} loop={true} style={{ width: 200 }} />
                              }
                              if (data.weather[i].main == "Mist") {
                                 return <Lottie animationData={MistAnimation} loop={true} style={{ width: 200 }} />
                              }
                              if (data.weather[i].main == "Thunderstorm") {
                                 return <Lottie animationData={ThunderAnimation} loop={true} style={{ width: 200 }} />
                              }
                           }
                           if (data.rain) {
                              return <Lottie animationData={RainAnimation} loop={true} style={{ width: 200 }} />
                           }
                           if (data.clouds.all >= 20 && data.clouds.all < 50) {
                              return <Lottie animationData={SunCloudyAnimation} loop={true} style={{ width: 200 }} />
                           }
                           else if (data.clouds.all > 50) {
                              return <Lottie animationData={CloudyAnimation} loop={true} style={{ width: 200 }} />
                           }
                           else {
                              return <Lottie animationData={SunAnimation} loop={true} style={{ width: 200 }} />
                           }
                        }
                     })()
                  }

                  {
                     data.weather && data.weather.map((w, i) => {
                        return <motion.div key={i} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .25, delay: .8 }}>
                           <div className='capitalize text-right font-medium'>{w.main} &#x2022; {w.description}</div>
                        </motion.div>
                     })
                  }
               </div>
            </div>
         </motion.div>
      </>
   )
}