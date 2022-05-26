

import React from 'react'
import Cloud from './svg/cloudsearch';
import cloudx from './image/iconmonstr-cloud-31-240.png'

export default function Weather(props) {
    const [weatherData, setweatherData] = React.useState();
    let weatherdisplay
    let current_display
    let forecast_display
    let dam

    let location = ''
    let jam = false
    // let islocation = false
    const [islocation, setislocation] = React.useState(false);

    const [locationx, setlocationx] = React.useState('');
    const [Formdata, setFormdata] = React.useState('');

    
    if(locationx){
        localStorage.setItem('locationLS', locationx)
    }


    React.useEffect(() => {
        if(localStorage.getItem('locationLS')){
            const prevlocationx = localStorage.getItem('locationLS')
            setlocationx(prevlocationx)
        }
    }, []);

 

    // console.log('location', localStorage.getItem('locationLS'))


    // React.useEffect(() => {
    //     setlocationx()
    // }, []);


    function inputlocation(params) {
   setislocation(prev => !prev)     
    }

    function updateFormData(event) {
        setFormdata(event.target.value)     
    }

    function setLocation(){
        setlocationx(Formdata)
    }

    function resetlocation(){
        console.log('damn gina')
        localStorage.clear()
        setlocationx('')
    }

    // console.log(Formdata)


    React.useEffect((props) => {
        if(locationx){
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=279708ec7d56411eaf5221141221405&q=${locationx}&days=5&aqi=no&alerts=no`)
            .then(res => res.json())
            .then(data => setweatherData(data))
        }
       

        console.log('weather',weatherData)
    }, [locationx]);

    // fetch('http://api.weatherapi.com/v1/forecast.json?key=279708ec7d56411eaf5221141221405&q=abuja&days=5&aqi=no&alerts=no')
    // .then(res => res.json())
    // .then(data => console.log(data))

    // console.log(weatherData)

    let current_c 
    let current_text
    let current_img



        if(weatherData){
             current_c = weatherData.current.temp_c
             current_text = weatherData.current.condition.text
             current_img =  weatherData.current.condition.icon
            console.log(weatherData.current.condition.icon)
    
            console.log('currentimg',current_img)
            console.log('currenttext',current_text)
            console.log('currentc',current_c)
    
    
          dam = <p>{current_text}</p>
    
           
             current_display =  <div className='flex'>
                 <img src ={current_img} />
    
                 <div>
                    <p>{`${current_c}°C`}</p>
                     <p>{current_text}</p>
                 </div>
              
            </div>
    
        const forecastData = weatherData.forecast.forecastday
    
        forecast_display = forecastData.map(item => {
            return <div>
                <div className='text-center bg-black text-lg font-EL'>MON</div>
    
                <div className='flex'>
                <div>
                    <img src= {item.day.condition.icon} alt="" />
                </div>
    
                <div className='pr-2'>
                <p>min-{item.day.maxtemp_c}°C</p>
                <p>max-{item.day.mintemp_c}°C</p>
                <p>{item.day.condition.text}</p>
                </div>      
                </div>
    
           
            </div>
        })
    
        console.log('forecast',weatherData.forecast.forecastday)
        }

   

   

    // console.log('forecast-display',forecast_display)

   


    // return (

    //     <div>
    //          {/* <div className='absolute right-3 text-red-500 top-5'>{weatherData && dam}</div> */}
         
    //     <div className="absolute right-3 text-red-500 top-5" onMouseEnter={props.openforecast} onMouseLeave = {props.closeforecast}> {weatherData?current_display: '...loading'}
    //     </div>

    //     <div className= {props.style.style1}>
    //     {weatherData?forecast_display:'...loading'}
    //     </div>    
    //     </div>
    // )
    
    return(
  
        locationx?
         
        <div onMouseEnter={props.openforecast} onMouseLeave = {props.closeforecast}>
{/* 
        <button className='absolute right-10 top-16 bg-white' >reset location</button>     */}
        
        <div className="absolute right-10 text-red-500 top-5" onDoubleClick={resetlocation} > {weatherData?current_display: '...loading'}
        </div>

        <div className= {props.style.style1}>
        {weatherData?forecast_display:'...loading'}
        </div>    
        </div>: 
        
        <div>

        {!islocation && <div onClick={inputlocation} className='w-20 h-20 absolute right-3 text-red-500 top-5  opacity-50 hover:opacity-100'> <img  src={cloudx} alt="" />      
        </div> }
      

         {islocation && <div className='absolute top-10 right-4 rounded-r'> <div className='flex'>
            <button className='bg-red-600 hover:bg-red-700 w-4 text-white font-bold text-center' onClick={inputlocation} >X</button>
            <input className='bg-gray-300   ' type="text" name="" id=""
            onChange={updateFormData} />
            </div> 
            <button className='bg-green-500 w-full text-white hover:bg-green-600' onClick={setLocation}>enter value</button>
            </div> }
        
        </div>   
    )

}


Weather.defaultProps = {
    name: 'him'
}
