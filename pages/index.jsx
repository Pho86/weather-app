import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import { useState } from 'react';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import WeatherCard from '@/components/WeatherCard';
import WeatherState from '@/components/WeatherState';

export default function Home() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const [allData, setAllData] = useState([]);
  const [weatherClass, setWeatherClass] = useState('from-sky-50  to-sky-100');

  let apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  let lang = "en";
  let units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}&lang=${lang}`;
  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        setData({})
        const response = await axios.get(url);
        const resdata = await response.data;
        setData(resdata)
        allData.unshift(resdata)
        setErrorMessage("")
      }
      catch (error) {
        console.log(error);
        setErrorMessage("Please enter a valid location 🙉");
        setData({});
      }
      setLocation('');
    }
  }

  return (
    <>
      <Head>
        <title>Weather Application</title>
        <meta name="description" content="This web application will display information based off the city location, such as the current temperature (in celsius), what it feels like, the gust speed, the name." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} bg-gradient-to-t ${weatherClass}`}>
        <Header />

        {data.weather && <WeatherState data={data} />}
        <div className='h-screen mt-10 flex flex-col items-center' >
          <div className="flex flex-col items-center">
            <input className="px-6 py-4 outline-none border-slate-400 min-w-[30vw] border-2 rounded-xl bg-gradient-to-t from-neutral-100 to-zinc-50 z-50 hover:drop-shadow-md" type="text" value={location} onChange={event => setLocation(event.target.value)} placeholder="Enter location" onKeyDown={searchLocation} />
            {errorMessage && <motion.span initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className='text-red-500 font-bold text-2xl mt-5'>{errorMessage}</motion.span>}
            {data.name && <WeatherCard data={data} />}
          </div>
        </div>
      </main>
    </>
  )
}
