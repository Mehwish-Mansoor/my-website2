import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link"

export default function Navebar(){

    // const Navebar =(props:any) =>{
    return(
        <div className="w-[1360px] h-[100px]   flex justify-between py-6 sticky top-0">


        {/* left side icon */}

<ul className="flex  spece-x-6 justify-between max-w-screen-xl mx-auto py-6 px-2 w-[247px] h-[28px] top[36px] left-[1093px] ">

<Link href={"/"}> <li>Home</li> </Link>
<Link href={"/Shop"}><li>Shop</li></Link>
<Link href={"/Contact"}><li>Contact</li></Link>
<Link href={"About"}><li>About</li></Link>
</ul>
   {/* right side  */}

<div className="w-[247px] h-[28px] top-[36px] left-[1093px] flex items-center justify-between mt-[30px]">
<div className="w-[28px] h-[28px]top-[36px] left-[px1312px] px-2 gap-6">
    <div className="w-[24.53px] h-[22.06px] t0p-[3.55px] left-[1.67px]">
    <  FaRegUser />
    </div>
   

 

</div>
<div className="w-[28px] h-[28px] top-[36px] left-[1312px] flex gap-6">
    <div className="w-[24.53px] h-[22.06] top-[3.55px]left-[1.67px] color-[#000000]">
    <IoSearch />
    </div>
     </div>
    <div className="w-[28px] h-[28px] top-[36px] left-[1312px]flex gap-6">
    <div className="w-[24.53px] h-[22.06] top-[3.55px]left-[1.67px] color-[#000000]">
      < FaRegHeart  />    
    </div>
    </div>


    <div className="w-[28px] h-[28px] top-[36px] left-[1312px] gap-6 ">
    <div className="w-[24.53px] h-[22.06] top-[3.55px]left-[1.67px] color-[#000000]">
<Link href={"/cart"}>< IoCartOutline  />

</Link>
    {/* < IoCartOutline  /> */}


    {/* < BsCart  onClick={() =>router.push("/cart")}className= " w-[120px] h-[50px] mb-10 bg-blue-400  text-[#000000]  hover:bg-red-700 hover:text-[#e5e5e5] rounded-full  checkout">checkout/> */}
    </div>
</div>
</div>

        </div>
    )
}
