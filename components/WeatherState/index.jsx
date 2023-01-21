import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import RainyAnimation from "@/public/rainy.json";
import BigSunAnimation from "@/public/bigSun.json";
import SnowAnimation from "@/public/snowingfall.json"
import Clouds from '../Clouds';
export default function WeatherState({
   data = {},
}) {
   
   return (
      <div className='fixed pointer-events-none w-screen h-screen flex items-center flex-col'>
         {
            (() => {
               if (data.weather) {
                  for (let i = 0; i < data.weather.length; i++) {
                     if (data.weather[i].main == "Snow" || data.snow) {
                        background = 'red'
                        return <Lottie animationData={SnowAnimation} loop={true} style={{ width: "100vw", height: "100vh" }} />
                     }
                  }
                  if (data.rain) {
                     return <Lottie animationData={RainyAnimation} loop={true} style={{ width: "100vw" }} />
                  }
                  if (data.clouds.all >= 20) {
                     return <Clouds />
                  }
                  else {
                     return <motion.div
                        initial={{ y: 50 }}
                        animate={{ y: -50 }}
                        transition={{ ease: "easeInOut", duration: 10, repeat: Infinity, repeatType:"reverse", repeatDelay: 1 }}
                     >
                        <Lottie animationData={BigSunAnimation} loop={true} style={{ width: 1200, marginTop: -100 }} />
                     </motion.div>
                  }
               }
            })()
         }

      </div>
   )
}