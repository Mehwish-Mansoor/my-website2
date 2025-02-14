import image from "next/image"
import React from 'react'

interface propsType {
  title:string;
  desc:string;
  img:string;
}
<img className="w-[1440px] h-[316px] top-[100px]" src="/Rectangle 13.png" alt="image" />
const Card:React.FC<propsType> = ({ title, desc, img}) => {
  return (
  
    <div className=' w-180 sm:w-[230] h-[290px] bg-green-500'>
     <div>
      <img  className='w-180 sm:w-230 h-230 bg-pink-500 mb-[10px] ml-[10pc]'
      src={img}
      width={180}
      height={240}
      alt='title'
      
      />
      </div> 

<div className='p-4 space-y-4 bg-yellow-300'>

  <div className=' text-extralight  font-4xl'>{title}</div>
  <div>{desc}</div>
  
</div>

    </div>
  )
}

export default Card