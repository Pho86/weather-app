# Simple Weather Web Application
This web application will display information based off an inputted city location, such as the current temperature (in celsius), what it feels like, the gust speed, and the weather. It also will display a small animation based off of what the current weather is.

The api used for the web application is [OpenWeatherMapApi](https://openweathermap.org/).

## Technologies used in the web application: 
* Next JS, React
* Tailwindcss
* Axios
* Framer Motion
* Lottie React

## How to run the application
1. In the terminal, `git clone https://github.com/Pho86/weather.git` to clone the repository.

2. `cd ./weather` in a terminal to open the directory in terminal.

3. Install the packages with any package installer, common ones are either with npm or yarn, run those by running `npm install` or `yarn install` in the terminal.

4. Add the environment variable's api key from [OpenWeatherMapApi](https://openweathermap.org/) and then make and place in `.env.local` or `.env` by following the `.env.example` file.
> The key in the env file should be added to a variable named `NEXT_PUBLIC_WEATHER_API_KEY`.

5. Run the app with `npm run dev` or `yarn dev` to run the app.

6. You can run the app now 🙊. Visit the url provided in the terminal, example: `http://localhost:3000/`.
