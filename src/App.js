import logo from './logo.svg';
import './App.css';
import React from 'react';
import Background from './background';
import Time from './time';
import Coin from './coins';
import Weather from './weather';
import Dropdown from './dropdown';
import Drop from './drop';


function App() {

const timestyle = {
style1: 'absolute top-1/2 left-1/2  font-EL text-6xl text-green-400 -translate-y-1/2 -translate-x-1/2',
style2: 'absolute top-4 bg-green-400'
}

const [currentcoin, setcurrentcoin] = React.useState('bitcoin');

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
  menustyle: ' bg-gray-300 absolute top-28 left-4 -mt-4 hidden flex justify-between',
  changemenu: 'border w-16  flex items-center justify-center px-1',
  altcoinstyle: 'absolute flex top-16 bg-red hidden'
 

});

// function updatecoinstyle(params) {
//   setcoinstyle(prev => {
//     return {...prev, menustyle: 'hidden'}
//   })
  
// }

// changemenu:'border w-full mx-auto  flex items-center justify-center  text-xl text-red-500'

function openchangemenu(params) {
  setcoinstyle(prev => {
    return {...prev, changemenu: 'border w-16  flex items-center justify-center px-1', menustyle: 'absolute top-28 left-4  pt-4 flex text-sm',
  altcoinstyle: 'absolute flex top-8 bg-red  pt-4'}
  })

  console.log('yam')
}

function closechangemenu(params) {
setcoinstyle(prev => {
  return {
    ...prev,   menustyle: ' bg-gray-300 absolute top-28 left-4 -mt-4 hidden flex justify-between',
    changemenu: 'border w-16  flex items-center justify-center px-1',
    altcoinstyle: 'absolute flex top-16 bg-red hidden'
  }
})  
}



function changestyle() {
  setcoinsvg(
<svg className='w-4 h-4 fill-current text-red-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>  )

setcoinstyle(prev => {
  return {...prev, menustyle: ' absolute top-28 left-4 -mt-4  pt-8 flex',
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


function replacecoin(event) {
  console.log('click')
  console.log(event.target.dataset.name)
  const name = event.target.dataset.name

  setcurrentcoin(name)
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
       closechangemenu = {closechangemenu}
       coinsvg ={coinsvg}
       replacecoin = {replacecoin}
       currentcoin = {currentcoin}/>
       <Weather/>
    </div>

  );
}

export default App;
