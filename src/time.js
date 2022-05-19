import React from "react";
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

return (
    <h1 className= {props.style.style1}>{currenthour}:{currentmin}:{currentsec}</h1>
)


    
}