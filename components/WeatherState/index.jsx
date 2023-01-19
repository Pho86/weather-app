import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import RainyAnimation from "@/public/rainy.json";
import SunAnimation from "@/public/sunny.json";
import SunCloudyAnimation from "@/public/suncloudy.json";
import CloudyAnimation from "@/public/cloudy.json";
import SnowAnimation from "@/public/snowingfall.json"
import MistAnimation from "@/public/mist.json"
import ThunderAnimation from "@/public/Thunderstorm.json"

export default function WeatherState({
   data = {},
}) {

   return (
      <div className='fixed pointer-events-none w-screen h-screen'>
         {
            (() => {
               if (data.weather) {
                  for (let i = 0; i < data.weather.length; i++) {
                     if (data.weather[i].main == "Snow" || data.snow) {
                        return <Lottie animationData={SnowAnimation} loop={true} style={{ width: "100vw", height: "100vh" }} />
                     }
                     // if (data.weather[i].main == "Mist") {
                     //    return <Lottie animationData={MistAnimation} loop={true} style={{ width: 0 }} />
                     // }
                     // if (data.weather[i].main == "Thunderstorm") {
                     //    return <Lottie animationData={ThunderAnimation} loop={true} style={{ width: 0 }} />
                     // }
                  }
                  if (data.rain) {
                     return <Lottie animationData={RainyAnimation} loop={true} style={{ width: "100vw" }} />
                  }
                  // if (data.clouds.all >= 20 && data.clouds.all < 50) {
                  //    return <Lottie animationData={SunCloudyAnimation} loop={true} style={{ width: 0 }} />
                  // }
                  // else if (data.clouds.all > 50) {
                  //    return <Lottie animationData={CloudyAnimation} loop={true} style={{ width: 0 }} />
                  // }
                  // else {
                  //    return <Lottie animationData={SunAnimation} loop={true} style={{ width: 0 }} />
                  // }
               }
            })()
         }

      </div>
   )
}