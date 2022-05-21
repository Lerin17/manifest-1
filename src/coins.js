import { render } from "@testing-library/react";
import PreviousMap from "postcss/lib/previous-map";
import React from "react";


export default function Coin(props) {
    const [coinslist, setcoinslist] = React.useState(['bitcoin', 'ethereum','tether', 'tron']);

    const numcoins = 4

    const currentcoin = props.currentcoin
    // console.log('current coin',props.currentcoin)
    

    const [rawcoindata, setrawcoindata] = React.useState([]);
    const [alldata, setalldata] = React.useState([]);
    const currentcoindata = []
    const altcoindata = []
    const currentcoinx = []
    

    console.log('ddd')

    React.useEffect(() => {
            coinslist.map(coin => {
               
               return fetch( `https://api.coingecko.com/api/v3/coins/${coin}?localization=t&market_data=true`)
                .then(res => res.json())
                .then(data => {setrawcoindata(prev => {
                return [...prev, data]
                }
                    
                )}) 
               
            }) 
    }, [coinslist]);


    console.log(rawcoindata)
    
 

rawcoindata.map(item => {
       if(item.id === currentcoin){

        currentcoindata.push(
            <div className= {props.style.style1}>
                <div className="flex flex-col">
                    <div className="bg-blue-30">
                    <div className="flex item-center justify-center">
                         <img className="w-8 " src= {item.image.small} alt="" />
                    </div>
                    
                    <h1 className="mb-3">{item.id}</h1> 
                    </div>
               
                    <div className= {props.style.svgstyle} onMouseEnter = {props.changestyle} onMouseLeave = {props.changeback}>
                        {props.coinsvg}
        
                    </div>
                </div>

                <div className="flex flex-col  ml-3 text-blue-400">
                    <div className="flex" >Market price: <span>{item.market_data.current_price.usd}</span> </div>
                    <div className="flex  justify-between">price: <span>{item.market_data.high_24h.usd}</span> </div>
                    <div className="flex justify-between">Other Info:  <span>{item.market_data.low_24h.usd}</span> </div>
                </div>  
             
        </div>
        )     
       }else {
           altcoindata.push(
               <div data-name = {item.id} className="border p-1 w-20 flex flex-col items-center justify-center" onClick={props.replacecoin} onMouseEnter = {props.registername}>
                   <div>
                       <img className="w-8" src = {item.image.small} alt="" />
                   </div>
                   <div className="text-sm">
                        <h1>{item.id}</h1> 
                    </div>
               </div>
           )


       }
   })

   console.log('altcoindata',altcoindata)

 const  datamenu = <div> 
     <div onMouseEnter={props.changestyle} onMouseLeave = {props.changeback} className= {props.style.menustyle}>
    <div className= {props.style.changemenu}>
        <h1 className="text-align">menu</h1>
        <div>
        <svg onMouseEnter={props.openchangemenu} onMouseLeave = {props.closechangemenu}
        className="fill-current w-4  transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <path
        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
        </svg>
        </div>

            
    </div>

    <div>
     <div className="border ml-5 px-1 ">
         <h1>enter new coin</h1>
     </div>
    </div>

            <div className= {props.style.altcoinstyle} onMouseEnter ={props.openchangemenu} onMouseLeave = {props.closechangemenu}>
                {altcoindata}
            </div>
         
 </div>

            

 </div>



   console.log(currentcoindata)
   

    return(
        <div>
         {currentcoindata}
         {datamenu}
        </div>
        
    )
}