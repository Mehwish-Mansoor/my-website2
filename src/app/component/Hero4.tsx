import Card from "./Card"
export default function Hero4(){

    return( 
        <div className="max-w-[1440px] mx-auto h-[944px] ">

        <div className=" mx-auto w-[479px] h-[91px] top-[3163px] left-[480px]  justify-center items-center ">

            <h1 className=" mx-auto w-[174px] h-[54px] top-[3163px] left-[633px] text-[36px] md:text-[30px] lg:text-[40px] font-[poppins] text-[#000000]    leading-12.5 ">our blogs</h1>


            
            <p className=" w-470px] h-[24px] top-[3230px] left-[480px] text-[6px] md:text-[11px] lg:text-[16px] font-[poppins] text-center leading-6 text-[#9F9F9F] py-4">Find a bright ideal to suit your taste with our great selection</p>
        
        </div>

        <div className="w-[1240px] h-[555px] top-[3319px]left-[100px] ml-[50px] ">
        <div className="grid grid-cols-3 gap-10 py-[20px] px-[20px]">
            <div>
              <img className="w-[350px]"  src="/Rectangle 13.png"  alt="" /> 
              <h1 className="py-4 mx-auto"> Going all-in with millennial design</h1> 
              <p className="w-[130px] h-[36px] top-[3785px] left-[231px] font-[poppins] text-[24px] leading-9 text-[#000000] px-2">Read More</p>
              <hr className="w-[115px] top-[3831px] left-[242px] border-[2px] align items-center border-black " />
            </div>
            <div>
              <img className="w-[350px]"  src="/Rectangle 14.png"  alt="image" /> 
              <h1 className=" py-4 mx-auto">Going all-in with millennial design</h1> 
              <p className="w-[130px] h-[36px] top-[3785px] left-[231px] font-[poppins] text-[24px] leading-9 text-[#000000] px-2">Read More</p>
          <hr className="w-[115px] top-[3831px] left-[242px] border-[2px] align items-center border-black " />
            </div>

            <div px-6 py-8 gap-10 border-2px>
              <img className="w-[350px]"  src="/Rectangle 15.png"  alt="image" /> 

              <h1 className="py-4 mx-auto items-center">Going all-in with millennial design</h1>

              <p className="  w-[130px] h-[36px] top-[3785px] left-[231px] font-[poppins] text-[24px] leading-9 text-[#000000] px-2">Read More</p>
              <hr className="w-[115px] top-[3831px] left-[242px] border-[2px] align items-center border-black " />
            </div>

        </div>

        <div className=" mx-auto w-[126px] h-[49px] top-[3949px] left-[657px] mt-[70px]">
          <h2 className=" mx-auto w-[126px] h-[30px] top-[3949px] left-[657px] font-[poppins] text-[20px] leading-7.5 font-weight-500">View All Post</h2>
          <hr className="w-[115px] top-[3998px] left-[663px]  border-[#000000]  mt-[10px]"/>
        </div>
</div>
        </div>
            
        

            )
      }