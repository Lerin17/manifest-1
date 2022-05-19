import testimg from './image/testimage.jpg'
import React from 'react';

export default function Background () {
    let accesskey = 'MV2T40qqh1hR6aaaygACynw9MdjXDpsHqexCKqfqgyw'
    const [unsplashdata, setunsplashdata] = React.useState();
   
   
    React.useEffect(() => {
     fetch(`https://api.unsplash.com/photos/random/?client_id=${accesskey}&orientation=landscape&query=snow`)
     .then(res => res.json())
     .then(data => {setunsplashdata(data.urls) 
     })
    }, []);


if(unsplashdata){
    const currentimg = unsplashdata.full
    console.log( currentimg)
    return (
        <div >
            {/* <h1 className="bg-green-300" 
             >start</h1> */}
             <img className="w-screen h-screen" src= {currentimg} alt="" />
        </div>
    
    )
} else{
    return (
        <div >
            {/* <h1 className="bg-green-300" 
             >start</h1> */}
             <img className="w-screen h-screen" src= {testimg} alt="" />
        </div>
    
    )
} 





 
}