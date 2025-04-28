import React ,{useEffect, useState}from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { ChevronRight } from "lucide-react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import axios from 'axios';


  const questions = [
    "What are the requirements to submit a loan?",
    "What amount could I get?",
    "How much time does it take?",
    "What is the cost?",
  ];

const Landing = () => {

  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
      try {
        const res=await axios.get(`http://localhost:3003/api/getCards`)
        setData(res.data)
        console.log(res.data);
        
      } catch (error) {
        
      }

    }

    getData()
  },[])


  const [providerExpanded, setProviderExpanded] = useState(true);
  const [moreProviders, setMoreProviders] = useState(false);

  const toggleProviderExpand = () => setProviderExpanded(!providerExpanded);
  const toggleMoreProviders = () => setMoreProviders(!moreProviders);
  return (
    <div>
        <div className='container mx-auto bg-gray-100 mt-3'>
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
         <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 mx-auto py-2 gap-4 xl:gap-4 p-6 xl:p-0 xl:py-3 text-sm md:text-md mb-12'>
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
            
         <div className="bg-white shadow-md md:col-span-2 lg:col-span-2 xl:col-span-3 md:h-1/3 lg:h-1/2   rounded-xl p-4">
      {/* Filters Title */}
      <h2 className="text-lg font-bold text-blue-900 mb-4">Filters</h2>
      <hr className="border-gray-300 mb-4" />

      {/* Provider's Name Section */}
      <div className="mb-4">
        <div 
          className="flex justify-between items-center cursor-pointer" 
          onClick={toggleProviderExpand}
        >
          <h3 className={`text-sm font-semibold ${providerExpanded ? 'text-red-600' : 'text-blue-900'}`}>
            Provider’s Name
          </h3>
          {providerExpanded ? <FaChevronUp className="text-red-600" /> : <FaChevronDown />}
        </div>

        {providerExpanded && (
          <div className="mt-3 space-y-3 text-sm">
            {/* List of Banks */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" checked className="accent-blue-600" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbfIpyyiV6_oHBh9VEsaLjHU1MlA0DFCjEA&s" alt=""  className='w-10 h-8'/>
              <span>Yes Bank</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <img src="https://vmediadatav2.s3.ap-south-1.amazonaws.com/GALLERY/896998876/c519ce6928def.png?id=1745557366690" alt=""  className='w-10 h-8'/>
              <span className=''>ICICI Bank</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVywBpgVIfo5rePUD5rAnrXbOzBbYFaQgsDg&s" alt=""  className='w-10 h-8'/>
              <span>Bank Of Baroda</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zAbKhIggRs8aVN2TWlP-nF38Jlm78p9KOA&s" alt=""  className='w-10 h-8'/>
              <span>IDFC Bank</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91g86GYPEmouJD3LiPGSYtYYW9XycFIu4pA&s" alt=""  className='w-10 h-8'/>
              <span>HDFC Bank</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyPGj3pLge_vgbQ9xZh74ws-jA_w5FInObw&s" alt=""  className='w-10 h-8'/>
              <span>Axis Bank</span>
            </div>

            {moreProviders && (
              <>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <img src="https://vmediadatav2.s3.ap-south-1.amazonaws.com/GALLERY/896998876/c519ce6928def.png?id=1745557366690" alt=""  className='w-10 h-8'/>
                  <span>HSBC Bank</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <img src="https://vmediadatav2.s3.ap-south-1.amazonaws.com/GALLERY/896998876/c519ce6928def.png?id=1745557366690" alt=""  className='w-10 h-8'/>
                  <span>Kotak Mahindra Bank</span>
                </div>
              </>
            )}

            {/* See More */}
            <button 
              className="text-blue-600 text-xs flex items-center space-x-1 mt-1"
              onClick={toggleMoreProviders}
            >
              <span>{moreProviders ? 'See Less' : 'See More'}</span>
              <FaChevronDown className={`${moreProviders ? 'rotate-180' : ''} transition-transform duration-300`} />
            </button>
          </div>
        )}
      </div>

      <hr className="border-gray-300 mb-4" />

      {/* Other Filters */}
      {['Provider’s Name', 'APR%', 'Annual Fee', 'Credit Score', 'Rating', 'Card Benefits'].map((item, index) => (
        <div key={index} className="flex justify-between items-center py-2 cursor-pointer text-sm font-semibold text-blue-900 border-b border-gray-300">
          <span>{item}</span>
          <FaChevronDown />
        </div>
      ))}
    </div>



              <div className=' md:col-span-3 lg:col-span-5 xl:col-span-9 space-y-10 '>
               {data.map((item,index)=>(
                <div className=' h-auto rounded-xl text-center p-5 xl:p-8 bg-white shadow-md' key={index}>
                  <div className='flex  flex-wrap items-start text-start justify-center lg:justify-between gap-3'>
                  {/* image */}
                  <div>
                    <img src={item.cardPhoto} alt="" className='w-60 xl:w-70 h-auto' />
                   
                  </div>
                  {/* text */}
                  <div className='flex flex-col justify-center items-center lg:items-start lg:justify-start'>
                  <h1 className=' text-md md::text-lg xl:text-2xl font-bold text-indigo-900'>{item.cardName}</h1>
                  <h2 className='text-md md:text-lg xl:text-xl font-medium text-indigo-900 mt-1'>{item.cardSlung}</h2>
                  <p className='text-xs max-w-xs xl:max-w-md text-indigo-900 mt-2 font-medium'>{item.seoDescription}</p>
                  <div className='flex gap-3 text-sm mt-2'>
                    <button className='bg-indigo-900 text-white p-3 rounded-md mt-2 font-medium'>Apply Now</button>
                    <button className='bg-indigo-900 text-white p-2 rounded-md mt-2 font-medium'>Check Eligibility</button>
                  </div>
                  </div>
                  {/* rating */}
                  <div className='flex flex-wrap flex-col items-center justify-center lg:items-start justify-start space-y-3'>
                    <h1 className='font-bold text-sm  xl:text-lg text-indigo-900'>MoneyBIP Rating</h1>
                    <div>
                    <div className="flex">
  {[...Array(5)].map((_, index) => (
    <svg
      key={index}
      className={`w-4 h-4 ${index < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.388 2.463c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.609 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
    </svg>
  ))}
</div>

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
                            <h2 className='font-bold text-lg mb-2'> {item.annualFee}./</h2>
                            <hr />
                          </div>
                          <div>
                            <h1 className='text-md font-bold mt-2'>Joining Fees</h1>
                            <h2 className='text-lg font-bold mb-2'>{item.joiningFee}</h2>
                            <hr />
                          </div>
                          <div>
                            <h1 className='font-bold text-md mt-2'>Recomented Credit Score</h1>
                            <h2 className='font-bold text-lg'>{item.minCreditScore}</h2>
                            <p className='text-blue-400'>Check your credit score</p>
                          </div>
                       </div>
                   </div>
                   <hr className='mt-3'/>
                   {/* third */}
                   <div className='text-start'>
                      <h1 className='font-bold text-xl mb-5'>Welcome offers</h1>
                   
                      <ul className='list-disc list-inside'>
                        <li className='text-sm px-4'>   <p>{item.welcomeOffers}</p></li>
                      </ul>
                   </div>
                </div>
               ))}
              </div>
             
         </div>


         <div>

         </div>
          {/* pink */}
          <div className="bg-[#e04e68] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 w-full mt-12 mb-12">
  {/* Left side: Image + Text */}
  <div className="flex items-center gap-4">
    <img
      src="./Images/l2.png"
      alt="Thinking Man"
      className="h-20 w-auto md:h-24"
    />
    <h1 className="text-white font-bold text-xl md:text-2xl">
      Having Trouble Choosing A Product?
    </h1>
  </div>

  {/* Right side: Button */}
  <button className="flex items-center gap-2 bg-[#5b0013] hover:bg-[#72001a] text-white text-sm font-semibold rounded-md px-5 py-2">
    Contact Us
    <span>→</span>
  </button>
</div>



    {/* descriptions */}
       <h1 className='font-bold text-3xl mb-12'>Best Credit Cards In India: All You Need To Know</h1>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>
     <div className='flex flex-col flex-wrap p-5'>
       <h1 className='text-lg font-semibold mb-4'>What is a Credit Card?</h1>
       <p className='text-xs font-medium'>A credit card is a rectangular piece of plastic or metal issued by a financial institution, usually a bank or a credit union. This card serves as a financial tool that allows you to borrow funds up to a certain amount, known as your credit limit, to make purchases, pay for services, or even withdraw cash.
       Unlike a debit card, which directly deducts money from your bank account, a credit card gives you the flexibility to spend money that you don't currently possess. You are then required to pay this borrowed amount back, typically on a monthly basis. Timely and responsible usage of a credit card can help you establish a good credit score, which is crucial for future financial endeavours like securing loans or mortgages.</p>
     </div>

       
     {/* grid */}

     <div className="bg-gray-100 p-8">
      <h2 className="text-xl font-bold mb-6">More ways to browse service</h2>

      <h3 className="text-lg font-semibold mb-4">Bank accounts details</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {[
          "HDFC Bank Current Account",
          "IDFC Bank Current Account",
          "Kotak Mahindra Bank Savings Account",
          "HDFC Bank Saving Account",
          "Yes Bank Saving Account",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md text-center shadow-sm hover:shadow-md transition"
          >
            {item}
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4">Bank accounts details</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[
          "Yes Bank Prosperity Credit Cards",
          "Axis Bank Club Vistara Credit Cards",
          "IDFC Bank Rewards Credit Cards",
          "Credit Cards For Students",
          "Business Credit Cards",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md text-center shadow-sm hover:shadow-md transition"
          >
            {item}
          </div>
        ))}
      </div>


      <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-white flex justify-between items-center p-4 rounded-md shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <span className="text-gray-800">{question}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
    </div>

        

        </div>
     
           </div>
  )
}

export default Landing