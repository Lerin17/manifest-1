import logo from './logo.svg';
import './App.css';
import React from 'react';
import Background from './background';
import Time from './time';
import Coin from './coins';
import Dropdown from './dropdown';
import Drop from './drop';


function App() {

const timestyle = {
style1: 'absolute top-1/2 right-1/2 bg-red-300',
style2: 'absolute top-4 bg-green-400'
}

const [coinsvg, setcoinsvg] = React.useState( <svg
  className="fill-current bg-red-300 transform group-hover:-rotate-180
  transition duration-150 ease-in-out"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20">
  <path
  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
  />
  </svg>);

const [coinstyle, setcoinstyle] = React.useState({
  style1: 'absolute top-4 text-blue-400 border rounded mx-3 p-2 flex hover:bg-black hover:text-white hover:border-black', 
  style2: 'absolute top-4 border-4 rounded mx-3',
  svgstyle: 'self-center h-4 w-4',
  menustyle: 'border bg-gray-300 absolute top-28 left-4 -mt-4 hidden flex justify-between',
  changemenu: 'border w-16  flex items-center justify-center px-1',
 

});

// function updatecoinstyle(params) {
//   setcoinstyle(prev => {
//     return {...prev, menustyle: 'hidden'}
//   })
  
// }

function displayinput(params) {
  
}

function openchangemenu(params) {
  setcoinstyle(prev => {
    return {...prev, changemenu: 'border w-full mx-auto  flex items-center justify-center  text-xl text-red-500', menustyle: 'absolute top-28 left-4 -mt-4 pt-4'}
  })

  console.log('yam')
}

function closechangemenu(params) {
setcoinstyle(prev => {
  return {
    ...prev,   menustyle: 'border bg-gray-300 absolute top-28 left-4 -mt-4 hidden flex justify-between',
    changemenu: 'border w-16  flex items-center justify-center px-1'
  }
})  
}


console.log(coinsvg.arrowup)

function changestyle() {
  setcoinsvg(
<svg className='w-4 h-4 fill-current text-red-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>  )

setcoinstyle(prev => {
  return {...prev, menustyle: ' absolute top-28 left-4 -mt-4 pt-4 flex',
  changemenu: 'border w-16  flex items-center justify-center px-1'
}
})

}


function changeback(){
  setcoinsvg (
    <svg
    className="fill-current  transform group-hover:-rotate-180
    transition duration-150 ease-in-out"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20">
    <path
    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
    />
    </svg>
  )
  setcoinstyle(prev => {
    return {...prev, menustyle: 'border bg-gray-300 absolute top-28 left-4 -mt-1 hidden' }
  })
}


  return (
    <div>
       <Background/>
       <Time
       style = {timestyle}/>
       <Coin
       style = {coinstyle}
       changestyle = {changestyle}
       changeback = {changeback}
       openchangemenu = {openchangemenu}
       coinsvg ={coinsvg}/>
    </div>

  );
}

export default App;
