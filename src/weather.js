// http://api.weatherapi.com/v1
// API Key: 279708ec7d56411eaf5221141221405

{/* <link href="https://fonts.googleapis.com/css2?family=El+Messiri&display=swap" rel="stylesheet"></link> */}

export default function Weather(props) {
    const [weatherData, setweatherData] = React.useState();


    React.useEffect(() => {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=279708ec7d56411eaf5221141221405&q=abuja&days=5&aqi=no&alerts=no')
        .then(res => res.json())
        .then(data => setweatherData(data))
    }, []);

    // fetch('http://api.weatherapi.com/v1/forecast.json?key=279708ec7d56411eaf5221141221405&q=abuja&days=5&aqi=no&alerts=no')
    // .then(res => res.json())
    // .then(data => console.log(data))

    console.log(weatherData)

    
    return(
        <p className="absolute right-3 text-red-500 top-5" >{props.name}</p>
    )

}


Weather.defaultProps = {
    name: 'him'
}
