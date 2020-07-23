Next.js application which shows on-demand taxis in the area

# Link to the deployed live version

I've used Vercel service to deploy the live version of application
[https://yevhen-splyt-challenge.vercel.app/](https://yevhen-splyt-challenge.vercel.app/)

# Setup and run the project locally

Clone the project to your local machine <br />
`git clone https://github.com/yevhensydorov/splyt-challenge.git` <br />
<br />
Go to the project directory <br />
`cd splyt-challenge` <br />
<br />
Install project dependencies <br />
`npm install` <br />
<br />
In the project directory, you need to create `.env` file with next values: <br />

```js
API_SERVER=https://qa-interview-test.splytech.dev
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=GOOGLE_MAP_API_KEY_PROVIDED_IN_THE_EMAIL
```

<br />
Run the project <br />
`npm run dev` <br />
It'll run server side rendered application in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Tests

I've created `setupTests.js` file in the root directory to add handy assertions to Jest. `jest.config.js` file need to be presented at the root as well. All tests located in the `__tests__` directory. There are three basic tests which are checking if elements are existing on the main page and one test which checks error handling. <br />

To run the tests you can use command <br />
`npm run test` <br />
It'll launch the test runner in the interactive watch mode.<br />

# Third-party dependencies

The list of dependencies that I've used to build Splyt challenge app

## NEXT.js

[https://nextjs.org/](https://nextjs.org/) <br />
The core of project is a Next.js. Next.js is a React framework which also helps to build Express like API. So, to build the whole full-stack application I've choosed Next.js. Main feature of the Next is an easy server-side rendering. Quite a lot of big companies use Next.js to build production apps: Netflix, Tiktok, Twitch, Nike, Ticketmaster, etc. <br />

### CORS

I've created small proxy server in the next `pages/api` folder for fetching data from your API. I built that proxy because of the **CORS** issue from the Splyt testing API.

## Google Map React

[https://github.com/google-map-react/google-map-react](https://github.com/google-map-react/google-map-react) <br />

Google Map React is a small project which allows to render any React component on the Google Map. It uses [Google Map API](https://developers.google.com/maps/) under the hood. <br />
The main reason for choosing this package was that we are using it on the our company website for more than one year. It was a great chance to update the knowledge about this project. **Google Map React** has been updated 4 month ago, in March, it has more than 610k downloads per month and 5k stars on github. I'd say that **Google Map React** is a great choice to integrate google maps into the React application. It looks like simple and reliable package. <br />
I would probably avoided using the third-party package by intergating plain Google maps api, if I had more time.

## svgr/webpack

[https://react-svgr.com/](https://react-svgr.com/) <br />

This package helped me to transform SVG images into React components and use them. I had to install the package itself and change `next.config.js` file so the webpack loader will handle SVGs.

```js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
```

## styled-jsx

[https://nextjs.org/blog/styling-next-with-styled-jsx](https://nextjs.org/blog/styling-next-with-styled-jsx) <br />
Styled JSX is a CSS-in-JS library that allows you to write encapsulated and scoped CSS to style your components. The styles you introduce for one component won't affect other components, allowing you to add, change and delete styles without worrying about unintended side effects. <br />
It helped me to write component isolated styles. I usually use **styled-components** to write styles in React applications, but this time I wanted to use default Next.js package for the sake of time.

# Fetching data and application structure

The core of the application lives in the `/pages` folder.

## Backend

I needed to tackle the CORS issue somehow. Creating proxy server was the first idea in my mind (apart of using browser CORS plugins). <br />
Next.js can create API routes and their handlers in the fast way. You need just create `pages/api/ROUTE_PATH.js` file. In my case it was `pages/api/drivers.js` file, which would handle `/api/drivers` route. <br />
I've created `handle` function which helped me to allow CORS, get query parameters from the front end side and return JSON response.

```js
const { latitude, longitude, count } = req.query;
await cors(req, res);

const results = await fetch(
  `${API_SERVER_URL}/api/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`
);
const json = await results.json();

res.statusCode = 200;
res.json(json);
```

## Front-end

Front-end core lives in the `pages/index.js` file. I fetch the initial data there, render Head of the HTML document and render child components.

### Fetching data

I use React hooks to create 4 peaces of the state and manage them. State variables are: count (manage the number of drivers), result (data from the backend/your API), error (variable for the error handling), isLoading (loading state handler variable). <br />
For fetching data I've used `useEffect` hook, which uses browser **fetch** and sets state variable depending on the response from API. <br />
To handle getting drivers count value from the range input I've created **handleSubmit** function here. When user is submitting the range value by clicking the `SHOW NUMBER DRIVERS` button, handleSubmit function receives the value from the input and sets it to the **count** variable.

### Map display states

Depending on these 4 varibles (_count_, _result_, _error_, _isLoading_) I was able to handle diferent responses from the API and render the right components to the user. <br />
For example, if response is still loading the user will see Splyt logo and message `Data is loading...`. <br />
If there is a result already, Map component will be render and show Google map centered by the Splyt office coordinates. <br />
If something went wrong with response, user will see a simple div element with the `There is an error fetching drivers` text.

### SliderForm component

**Form is fully accessible and user can interact with it with a keyboard only**.
SliderForm component renders the form with one input and one submit button. Input has a label to display a message to the user. Input also has a range min and max values on sides. User can see current value of the range input in the button's text. User can see different button text depending on the `driversCount` value (_Show NUMBER driver or drivers_)<br>
SliderForm receives two props, which help to send the value of the input range and to display default number of drivers. <br />
SliderForm is a tipical controlled component with handleChange and handleSubmit functions. <br />
OnFocus state of the input and button definetely needs style improvements.

### Map and TaxiMarker components

Map component renders the div which has to have _height_ and _width_ style values. It's Google Maps API requirements. The div itself has a _GoogleMapReact_ component which receives prop values such as default center, zoom, api keys, etc. <br />
Map component receives _driversList_ props from the parent. Those props helped me to render _TaxiMarker_ component, which is a child to the Map. <br />
_TaxiMarker_ component renders a driver's marker on the map (SVG icon). When user hover over the marker, there will be a title with the driver's id. In the real world app, we will be able to display proper driver's info.

# Future improvements

If I had more time I'd create next features/improvements:

1. Mock Tests for fetch and update elements on the map
2. Add loading state handling component
3. Better error handling to display an exact message which comes from the API
4. App definitely needs styles to add
5. Better map interaction and animation
6. Design and style improvements
