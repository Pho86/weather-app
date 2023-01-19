# Simple Weather Web Application
This web application will display information based off the city location, such as the current temperature (in celsius), what it feels like, the gust speed, the name.

The api used for the web application is [OpenWeatherMapApi](https://openweathermap.org/).

Technologies used in the web application: 
* Next JS
* React
* Tailwindcss
* Axios
* Framer Motion

## How to run the application
1. `git clone https://github.com/Pho86/weather.git` to clone the repository.

2. `cd ./weather` in a terminal to open the directory in terminal.

3. `npm install` or `yarn install` or any other package installer to install the required packages.

4. Add environment variables from [OpenWeatherMapApi](https://openweathermap.org/) and then place in `.env.local` by following the `.env.example` file.
> The key in the file should be added to a variable named `NEXT_PUBLIC_WEATHER_API_KEY`.

5. Run the app with `npm run dev` or `yarn dev` to run the app.

6. You can run the app now 🙊.