import React from 'react'

const Hero = () => {
       


  return (
 
       
    

    <div className=' w-[1440px] h-[900px] flex items-center justify-between bg-[#FBEBB5]'>
             {/* text */}

             
            <div className='  w-[640px] h-[292px]'>
           

            <h1 className=' text-[54px] font-[poppins]  flex items-center justify-center 
             color-[#000000] ' > Rocket Single <br/>Seater</h1>



            <button className='text-[24px] font-[poppins] pl-[150px]  '>Shop Now</button>
            </div>

            <div className=' mx-auto w-[853px] h-[1000px] left-[1440px]  rotation-180'>
                 <img width={853} height={1000}  src='/Rocket single seater 1.png' ></img>
             <div className='bg-yellow=500 drop shadow   x-0 y-28 color-[#000000] '/>
             </div>
          <div> 
       </div>  
     </div> 
 )
}

export default Hero