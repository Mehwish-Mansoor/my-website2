import Image from "next/image"
export default function Insta(){
return(

<main
className="reletive flex items-center justify-center h-[430px] w-[1363px] bg-instagram-section bg-cover bg-center"
style={{backgroundImage:"url('/Rectangle 17.png')"}}
>
<div className="text-center">
<h1 className="texy-[60px] font-bold leading-[90px] font-[poppins] text-black">Our Instagram</h1>

<p className="text-lg text-black mt-2">Follow our store on Instagram</p>


<button className="mt-4 px-6 py-2 bg-white text-black font-semi-bold rounded-full shadow-md hover:bg-gray-100">Follow Us</button>

</div>

</main>
)
}






