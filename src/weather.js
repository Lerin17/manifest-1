

import React from 'react'

export default function Weather(props) {
    const [weatherData, setweatherData] = React.useState();
    let weatherdisplay
    let current_display
    let forecast_display


    React.useEffect(() => {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=279708ec7d56411eaf5221141221405&q=abuja&days=5&aqi=no&alerts=no')
        .then(res => res.json())
        .then(data => setweatherData(data))
    }, []);

    // fetch('http://api.weatherapi.com/v1/forecast.json?key=279708ec7d56411eaf5221141221405&q=abuja&days=5&aqi=no&alerts=no')
    // .then(res => res.json())
    // .then(data => console.log(data))

    // console.log(weatherData)
    

    if(weatherData){
        const current_c = weatherData.current.temp_c
        const current_text = weatherData.current.condition.text
        const current_img =  weatherData.current.condition.icon
        console.log(weatherData.current.condition.icon)
       
         current_display = <div className='flex '>
             <img src ={current_img} />

             <div>
                <p>{`${current_c}°C`}</p>
                 <p>{current_text}</p>
             </div>
          
        </div>

    const forecastData = weatherData.forecast.forecastday

    forecast_display = forecastData.map(item => {
        return <div>
            <div className='text-center bg-black'>mon</div>

            <div className='flex'>
            <div>
                <img src= {item.day.condition.icon} alt="" />
            </div>

            <div>
            <p>min-{item.day.maxtemp_c}°C</p>
            <p>max-{item.day.mintemp_c}°C</p>
            <p>{item.day.condition.text}</p>
            </div>      
            </div>

       
        </div>
    })



    // console.log('forecast',weatherData.forecast.forecastday)
    

    // console.log(forecastData[0].day.maxtemp_c)
    // console.log(forecastData[0].day.mintemp_c)
    // console.log(forecastData[0].day.condition.text)
    // console.log(forecastData[0].day.condition.icon)

    }

    
    return(
        <div className="absolute right-3 text-red-500 top-5" > {weatherData?current_display: '...loading'}

        <div className='bg-yellow-400'>
        {weatherData?forecast_display:'...loading'}
        </div>
    
        </div>
    )

}


Weather.defaultProps = {
    name: 'him'
}
