import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


const mark=[{name:"Axis Bank Club Vistara Credit Card" ,image:"./Images/C.jpg" ,bg:"red-500",subhead:"Traval",description:"Elevate your travel experience with the Axis Bank Club Vistara Credit Card, offering exclusive Vistara airline privileges and accelerated rewards on every journey. Seamlessly blend luxury and convenience with a card designed for thediscerning traveler.",rating:"hidden",Annualfee:"500",Joiningfee:"No cost",Creditscore:"hidden",features:"good"},
  {name:"Axis Bank Club Vistara Credit Card" ,image:"./Images/C.jpg" ,bg:"red-500",subhead:"Traval",description:"Elevate your travel experience with the Axis Bank Club Vistara Credit Card, offering exclusive Vistara airline privileges and accelerated rewards on every journey. Seamlessly blend luxury and convenience with a card designed for thediscerning traveler.",rating:"hidden",Annualfee:"hidden",Joiningfee:"hidden",Creditscore:"hidden"},
  {name:"Axis Bank Club Vistara Credit Card" ,image:"./Images/C.jpg" ,bg:"red-500",subhead:"Traval",description:"Elevate your travel experience with the Axis Bank Club Vistara Credit Card, offering exclusive Vistara airline privileges and accelerated rewards on every journey. Seamlessly blend luxury and convenience with a card designed for thediscerning traveler.",rating:"hidden",Annualfee:"hidden",Joiningfee:"hidden",Creditscore:"hidden"},
  {name:"Axis Bank Club Vistara Credit Card" ,image:"./Images/C.jpg" ,bg:"red-500",subhead:"Traval",description:"Elevate your travel experience with the Axis Bank Club Vistara Credit Card, offering exclusive Vistara airline privileges and accelerated rewards on every journey. Seamlessly blend luxury and convenience with a card designed for thediscerning traveler.",rating:"hidden",Annualfee:"hidden",Joiningfee:"hidden",Creditscore:"hidden"},
]

const Landing = () => {
  return (
    <div>
        <div className='container mx-auto '>
     {/* icons */}
          <div className='flex items-center justify-start gap-5 text-indigo-900 p-6 xl:p-0'>
            <div className='flex items-center gap-4 text-xl md:text-2xl'>
            <FaHome />
            <IoIosArrowForward />
            </div>
             <h1 className='text-xl md:text-2xl font-semibold'>Credit cards</h1>
         </div>
         {/* image */}
         <div className='py-4 px-6 xl:px-0'>
            <img src="./Images/T1.png" alt=""  className='rounded-md h-43 md:h-60 lg:h-full bg-cover w-full'/>
         </div>
         {/* cards */}
         <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 mx-auto py-2 gap-4 xl:gap-4 p-6 xl:p-0 xl:py-3 text-sm md:text-md'>
            <button className='border p-2 border-indigo-900 text-indigo-900  rounded-lg font-medium'>Shopping</button>
            <button className='border p-2 border-indigo-900 text-indigo-900  rounded-lg font-medium'>Rewards</button>
            <button className='border p-2 border-indigo-900 text-indigo-900  rounded-lg font-medium'>Traval</button>
            <button className='border p-2 border-indigo-900 text-indigo-900  rounded-lg font-medium'>Lifetime fee</button>
            <button className='border p-2 border-indigo-900 text-indigo-900  rounded-lg font-medium'>Cashback</button>
            <button className='border p-2 border-indigo-900 text-indigo-900  rounded-lg font-medium'>Dine in</button>
            <button className='border p-2 border-indigo-900 text-indigo-900  rounded-lg font-medium'>Lifestyle</button>
            <button className='border p-2 border-indigo-900 text-indigo-900  rounded-lg font-medium'>Fuel</button>
            <button className='border p-2 border-indigo-900 text-indigo-900  rounded-lg font-medium'>Movies</button>
         </div>
         {/* card display */}
       
         <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-12 gap-6 p-7 xl:p-0'>
            
            <div className='border  md:col-span-2 lg:col-span-2 xl:col-span-3 h-96 rounded-xl '>
              left
            </div>
              <div className=' md:col-span-3 lg:col-span-5 xl:col-span-9 space-y-10 '>
               {mark.map((item,index)=>(
                <div className='border h-auto rounded-xl text-center p-5 xl:p-8' key={index}>
                  <div className='flex  flex-wrap items-start text-start justify-center lg:justify-between gap-3'>
                  {/* image */}
                  <div>
                    <img src={item.image} alt="" className='w-60 xl:w-70 h-auto' />
                   
                  </div>
                  {/* text */}
                  <div className='flex flex-col justify-center items-center lg:items-start lg:justify-start'>
                  <h1 className=' text-md md::text-lg xl:text-2xl font-bold text-indigo-900'>{item.name}</h1>
                  <h2 className='text-md md:text-lg xl:text-xl font-medium text-indigo-900 mt-1'>{item.subhead}</h2>
                  <p className='text-xs max-w-xs xl:max-w-md text-indigo-900 mt-2 font-medium'>{item.description}</p>
                  <div className='flex gap-3 text-sm mt-2'>
                    <button className='bg-indigo-900 text-white p-3 rounded-md mt-2 font-medium'>Apply Now</button>
                    <button className='bg-indigo-900 text-white p-2 rounded-md mt-2 font-medium'>Check Eligibility</button>
                  </div>
                  </div>
                  {/* rating */}
                  <div className='flex flex-wrap flex-col items-center justify-center lg:items-start justify-start'>
                    <h1 className='font-bold text-sm  xl:text-lg text-indigo-900'>MoneyBIP Rating</h1>
                    <div>
                     <p className='text-lg'> stars</p>
                    </div>
                                    
                    <div className='flex gap-3'>
                    <input type="checkbox" />
                    <p className='text-xl lg:text-sm xl:text-lg font-bold text-indigo-900'>Add to compare</p>
                    </div>
                  
                  </div>
                </div>
                <hr className='mt-4'/>

                {/* second section */}
                   <div className='grid grid-cols-1  gap-6 mt-2  xl:grid-cols-12'>
                       <div className='col-span-8  h-full'>
                        <h1 className='text-start text-xl font-bold text-black'>Features</h1>
                        <ul className='list-disc list-inside text-start mt-3'>
                          <li>{item.features}</li>
                        </ul>
                       </div>
                       <div className='col-span-8   xl:col-span-4 border-l h-full text-start px-6'>
                          <div>
                            <h1 className='font-bold text-md'>Annual Fees</h1>
                            <h2 className='font-bold text-lg mb-2'> R{item.Annualfee}./</h2>
                            <hr />
                          </div>
                          <div>
                            <h1 className='text-md font-bold mt-2'>Joining Fees</h1>
                            <h2 className='text-lg font-bold mb-2'>{item.Joiningfee}</h2>
                            <hr />
                          </div>
                          <div>
                            <h1 className='font-bold text-md mt-2'>Recomented Credit Score</h1>
                            <h2 className='font-bold text-lg'>{item.Creditscore}</h2>
                            <p className='text-blue-400'>Check your credit score</p>
                          </div>
                       </div>
                   </div>
                   <hr className='mt-3'/>
                   {/* third */}
                   <div className='text-start'>
                      <h1 className='font-bold text-xl mb-5'>Welcome offers</h1>
                      <p>hello</p>
                      <ul className='list-disc list-inside'>
                        <li className='text-sm px-4'>{item.description}</li>
                      </ul>
                   </div>
                </div>
               ))}
              </div>
             
         </div>


         <div>

         </div>
          {/* pink */}
          <div className='relative'>
          <div className='h-36 w-full mt-[12vh] rounded-xl bg-rose-400 '>
            <div>
              <img src="./Images/l2.png" alt="" className='absolute w-auto h-46 top-0 '/>
              <h1 className='text-white font-bold text-4xl'>Having Trouble Choosing A Products?</h1>
              <button></button>
            </div>
          </div>
          </div>
        

        </div>
     
           </div>
  )
}

export default Landing