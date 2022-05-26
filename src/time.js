import React from "react";
import uparrow from './image/iconmonstr-arrow-up-thin-240.png'
import downarrow from './image/iconmonstr-arrow-down-thin-240.png'
export default function Time(props) {
    let startdate = new Date()
const [currentdate, setcurrentdate] = React.useState(new Date());

function getcurrentdate(){
    setcurrentdate(new Date())  
}

const currenthour = currentdate.getHours()
const currentmin = currentdate.getMinutes()
const currentsec = currentdate.getSeconds() 

setInterval(getcurrentdate, 1000 )

const [isfontselection, setisfontselection] =React.useState(false);

function openfontselection(){
    setisfontselection(prev => !prev)
}



const fontstyle = [{ currentfontobj: 'font-EL text-8xl text-green-400 hover:text-green-600 mt-3 mb-3 select-none'}, 
{ currentfontobj: 'font-mono text-8xl text-green-400 hover:text-green-600 mt-3 mb-3 select-none'}, 
{ currentfontobj: 'font-sans text-8xl text-green-400 hover:text-green-600 mt-3 mb-3 select-none'}]
    // el: '',
    // mono: '',
    // sans: ''


const currentfont = [{ currentfontobj: 'font-EL text-8xl text-green-400 hover:text-green-600 mt-3 mb-3 select-none'}]


const [n, setn] = React.useState(0);

// console.log(currentfont)

function changefontup(){
   
    if(currentfont.length > 0){
         currentfont.pop()
     }
     
    currentfont.push(fontstyle[n])

    setn(prev => prev + 1)
    if(n === 2){
        setn(0)  
    }

    console.log(currentfont)
}

return (
    <div className= {props.style.style1}>

        
        {isfontselection && <button onClick={changefontup} className="w-8 self-center" > <img src= {uparrow} alt="" /> </button>}

        <div className= {currentfont[0].currentfontobj} onDoubleClick ={openfontselection}>
        <h1 >{currenthour}:{currentmin}:{currentsec}</h1>
        </div>

        {isfontselection && <button className="w-8 self-center" > <img src= {downarrow} alt="" /> </button>}
         
    </div>
)


    
}