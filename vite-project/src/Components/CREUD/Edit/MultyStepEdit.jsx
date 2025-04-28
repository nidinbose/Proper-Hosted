import React, { useEffect, useState,useRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { MdOutlineMenuOpen } from "react-icons/md";
import { HiViewList } from "react-icons/hi";
import {useNavigate} from 'react-router-dom'



const MultyStepEdit = () => {
    const {id}=useParams()
  const [form,setForm]=useState({})
  const navigate=useNavigate()
 

  const getUser=async ()=>{
    const res=await axios.get(`http://localhost:3003/api/getCard/${id}`)
     setForm(res.data)
     console.log(res.data);
     if (res.data.cardPhoto) {
      setPreview(res.data.cardPhoto);
    }
    if (res.data.seoPhoto) {
      setSeoPreview(res.data.seoPhoto); 
    }
  }

  const update = async () => {
    try {
      const res = await axios.put(`http://localhost:3003/api/updateCard/${id}`, form); 
  
      console.log(res);
  
      if (res.status === 200) {
        alert("Card updated successfully:");
        navigate(`/dashboard`)
      } else {
        console.error("Unexpected response status:", res.status);
      }
    } catch (error) {
      if (error.response) {
        console.error("API error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request setup error:", error.message);
      }
    }
  };
  
  
  useEffect(()=>{
    getUser()
},[])

 
    const [currentStep,setCurrentStep]=useState(1)
    const [hide,setHide]=useState(false)
    const [preview,setPreview]=useState(null)
    const [seoPreview, setSeoPreview] = useState(null);
    const fileInputRef = useRef(null);
    const seoFileInputRef = useRef(null);

     const toggle=()=>{setHide(prev=>!prev)}
    const next=()=>setCurrentStep(prev=>(prev<5 ? prev +1:5))
    const previous=()=>  setCurrentStep(prev => (prev > 1 ? prev - 1 : 1));
     
      const handleChange=(e)=>{
      setForm((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    const handleCardImageChange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        try {
          const base64Photo = await convert(file);
          setPreview(base64Photo);
          setForm((prev) => ({ ...prev, cardPhoto: base64Photo })); // also set in form
        } catch (error) {
          console.error("Error converting the file to base64", error);
        }
      }
    };

    const handleseoImageChange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        try {
          const base64Photo = await convert(file);
          setSeoPreview(base64Photo);
          setForm((prev) => ({ ...prev, seoPhoto: base64Photo }));
        } catch (error) {
          console.error("Error converting the file to base64", error);
        }
      }
    };
    
    
    const convert = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          reject(new Error("Failed to read the file"));
        };
      });
    };
    
    

        
    // useEffect(()=>{
    //   setForm()
    // },[])

   
  return (
    <div className='flex overflow-x-hidden'>
      
  
      <aside className={`bg-gray-50 border-r border-gray-200 transition-all duration-300 ease-in-out h-screen ${hide ? 'w-64' : 'w-0 overflow-hidden'}`}>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Steps</h2>
          
          {/* Vertical Step Indicator */}
          <div className="space-y-4">
            {[
              { step: 1, title: 'Offer Information' },
              { step: 2, title: 'Criteria' },
              { step: 3, title: 'Description' },
              { step: 4, title: 'SEO Details' },
              { step: 5, title: 'Review' }
            ].map((item) => (
              <div 
                key={item.step}
                onClick={() => setCurrentStep(item.step)}
                className={`flex items-start cursor-pointer p-3 rounded-lg transition-colors
                  ${currentStep === item.step ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-gray-100'}`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5
                  ${currentStep === item.step ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}
                  ${currentStep > item.step ? 'bg-green-500 text-white' : ''}`}>
                  {currentStep > item.step ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    item.step
                  )}
                </div>
                <span className={`font-medium ${currentStep === item.step ? 'text-blue-600' : 'text-gray-600'}`}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>
          <button onClick={previous}>P</button>
     
      {/* step-1 */}
          {currentStep===1&&(
   <div className="w-full p-4">
    <div className='flex gap-12 mb-6'>
    <button className='text-3xl ' onClick={toggle}>{hide ?<MdOutlineMenuOpen/> :<HiViewList/>}</button>
    <h1 className='text-xl font-semibold'>Offer information</h1>
 
    </div>
   <div className="w-full px-4">
     <form action="" className="w-full">

     <div className="relative mb-7">
      <div
        className=" w-80 h-30 border-3 border-dashed border-indigo-900 rounded-md relative"
        onClick={() => fileInputRef.current.click()}
        style={{
          backgroundImage: preview ? `url(${preview})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '180px',
        }}
      >
        <input
          type="file"
          onChange={handleCardImageChange}
          name="cardPhoto"
          accept="image/jpeg,image/png,image/gif"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          ref={fileInputRef}
        />

        {!preview && (
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-gray-500">
            <div>
              <p>Click to upload image</p>
              <p className="text-xs mt-1">JPG, PNG or GIF (Max 500KB)</p>
            </div>
          </div>
        )}

{preview && (
  <div className="absolute inset-0 bg-transparent flex justify-center items-center text-white z-50 bg-cover">
    <p>Image Preview</p>
  </div>
)}
      </div>
    </div>


       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-9 w-full">
     
   {/* fields */}
        
  <div className="w-full">
  <h1 className="mb-2">Card Name <span className="text-rose-400">*</span></h1>
   <input
  type="text"
  onChange={handleChange}
  placeholder="Enter Card Name"
  name="cardName"
  value={form.cardName || ""}
  className="border rounded-sm h-12 p-2 w-full"
/>
   </div>

   <div className="w-full">
  <h1 className="mb-2">Card Slung <span className="text-rose-400">*</span></h1>
   <input
  type="text"
  onChange={handleChange}
  placeholder="Enter Card Slung"
  name="cardSlung"
  value={form.cardSlung || ""}
  className="border rounded-sm h-12 p-2 w-full"
/>
   </div>

   <div className="w-full">
  <h1 className="mb-2">Card Type <span className="text-rose-400">*</span></h1>
  <select
    onChange={handleChange}
    name="cardType"
    value={form.cardType || ""}
    className="border rounded-sm h-12 p-2 w-full"
  >
    <option className='text-rose-400 bg-gray-100' value="">Select Card Type</option>
    <option className='text-rose-400 bg-gray-100' value="HDFC">HDFC</option>
    <option className='text-rose-400 bg-gray-100' value="SBI">SBI</option>
    <option className='text-rose-400 bg-gray-100' value="Fedralbank">Fedralbank</option>
    <option className='text-rose-400 bg-gray-100' value="Canara">Canara</option>
  
  </select>
</div>


<div className="w-full">
  <h1 className="mb-2">Category Name <span className="text-rose-400">*</span></h1>
  <select
    onChange={handleChange}
    name="categoryName"
    value={form.categoryName || ""}
    className="border rounded-sm h-12 p-2 w-full"
  >
    <option className='text-rose-400 bg-gray-100' value="">Select Category</option>
    <option className='text-rose-400 bg-gray-100' value="Traval">Traval</option>
    <option className='text-rose-400 bg-gray-100' value="Fuel">Fuel</option>
    <option className='text-rose-400 bg-gray-100' value="Shopping">Shopping</option>
    <option className='text-rose-400 bg-gray-100' value="Online">Online</option>
  
  </select>
</div>

<div className="w-full">
  <h1 className="mb-2">Provider name <span className="text-rose-400">*</span></h1>
  <select
    onChange={handleChange}
    name="providerName"
    value={form.providerName || ""}
    className="border rounded-sm h-12 p-2 w-full"
  >
    <option className='text-rose-400 bg-gray-100' value="">Select Card Provider</option>
    <option className='text-rose-400 bg-gray-100' value="HDFC">HDFC</option>
    <option className='text-rose-400 bg-gray-100' value="SBI">SBI</option>
    <option className='text-rose-400 bg-gray-100' value="Fedralbank">Fedralbank</option>
    <option className='text-rose-400 bg-gray-100' value="Canara">Canara</option>
  
  </select>
</div>

<div className="w-full">
  <h1 className="mb-2">Service <span className="text-rose-400">*</span></h1>
  <select
    onChange={handleChange}
    name="service"
    value={form.service || ""}
    className="border rounded-sm h-12 p-2 w-full"
  >
    <option className='text-rose-400 bg-gray-100' value="">Select Card Type</option>
    <option className='text-rose-400 bg-gray-100' value="HDFC">HDFC</option>
    <option className='text-rose-400 bg-gray-100' value="SBI">SBI</option>
    <option className='text-rose-400 bg-gray-100' value="Fedralbank">Fedralbank</option>
    <option className='text-rose-400 bg-gray-100' value="Canara">Canara</option>
  
  </select>
</div>

   <div className="w-full">
  <h1 className="mb-2">Payout <span className="text-rose-400">*</span></h1>
   <input
  type="text"
  onChange={handleChange}
  placeholder="Enter Card Name"
  name="payout"
  value={form.payout || ""}
  className="border rounded-sm h-12 p-2 w-full"
/>
   </div>

   <div className="w-full">
  <h1 className="mb-2">Commission <span className="text-rose-400">*</span></h1>
   <input
  type="text"
  onChange={handleChange}
  placeholder="Enter Commission"
  name="commission"
  value={form.commission || ""}
  className="border rounded-sm h-12 p-2 w-full"
/>
   </div>

   <div className="w-full">
  <h1 className="mb-2">Card Link <span className="text-rose-400">*</span></h1>
   <input
  type="text"
  onChange={handleChange}
  placeholder="Enter Card Link"
  name="cardLink"
  value={form.cardLink || ""}
  className="border rounded-sm h-12 p-2 w-full"
/>
   </div>

   <div className="w-full">
  <h1 className="mb-2">Card Status <span className="text-rose-400">*</span></h1>
  <select
    onChange={handleChange}
    name="cardStatus"
    value={form.cardStatus || ""}
    className="border rounded-sm h-12 p-2 w-full"
  >
    <option className='text-rose-400 bg-gray-100' value="">Select Card Type</option>
    <option className='text-rose-400 bg-gray-100' value="Active">Active</option>
    <option className='text-rose-400 bg-gray-100' value="InActive">Inactive</option>
    
  
  </select>
</div>

<div className="w-full">
  <h1 className="mb-2">MoneyBipRating <span className="text-rose-400">*</span></h1>
  <div className="flex items-center space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <label key={star} className="cursor-pointer">
        <input
          type="radio"
          name="rating"
          value={star}
          onChange={handleChange}
          checked={form.rating === star}
          className="hidden"
        />
        <span
          className={`text-4xl ${
            form.rating >= star
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
        >
          ★
        </span>
      </label>
    ))}
  </div>
</div>

   <div className="w-full">
  <h1 className="mb-2">RatingReview Heading <span className="text-rose-400">*</span></h1>
   <input
  type="text"
  onChange={handleChange}
  placeholder="Enter ReviewHeading"
  name="reviewHeading"
  value={form.reviewHeading || ""}
  className="border rounded-sm h-12 p-2 w-full"
/>
   </div>

       </div>
       <div className="w-full mt-7">
  <h1 className="mb-2">Rating Review Description (max 200 letters) <span className="text-rose-400">*</span></h1>
   <input
  type="text"
  onChange={handleChange}
  placeholder="Enter Rating description"
  name="ratingDescription"
  value={form.ratingDescription || ""}
  className="border rounded-sm h-12 p-2 w-full"
/>
   </div>

     </form>
     <div className='flex w-full items-center justify-end mt-3 mb-6'>
     <button className='text-center  text-white font-semibold p-3 w-60 rounded-md bg-cyan-400 ' onClick={next}>Next</button>
     </div>
    
   </div>
 </div>
 
        
          )}
 {/* step-2 */}
          {currentStep===2&&(
             <div className="w-full p-4">
             <div className='flex gap-12 mb-6'>
             <button className='text-3xl ' onClick={toggle}>{hide ?<MdOutlineMenuOpen/> :<HiViewList/>}</button>
             <h1 className='text-xl font-semibold'>Criteria</h1>
          
             </div>
            <div className="w-full px-4">
              <form action="" className="w-full">
         
                   
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-9 w-full">
              
            {/* fields */}
                 
           <div className="w-full">
           <h1 className="mb-2">Annual <span className="text-rose-400">*</span></h1>
            <input
           type="text"
           onChange={handleChange}
           placeholder="Enter Annual Fees"
           name="annualFee"
           value={form.annualFee || ""}
           className="border rounded-sm h-12 p-2 w-full"
         />
            </div>
         
            <div className="w-full">
           <h1 className="mb-2">Joining <span className="text-rose-400">*</span></h1>
            <input
           type="text"
           onChange={handleChange}
           placeholder="Enter Joining fee"
           name="joiningFee"
           value={form.joiningFee || ""}
           className="border rounded-sm h-12 p-2 w-full"
         />
            </div>

            <div className="w-full">
           <h1 className="mb-2">Forign Transaction planning <span className="text-rose-400">*</span></h1>
            <input
           type="text"
           onChange={handleChange}
           placeholder="Enter forignTransactionPlanning"
           name="forignTransactionPlanning"
           value={form.forignTransactionPlanning || ""}
           className="border rounded-sm h-12 p-2 w-full"
         />
            </div>

            <div className="w-full">
           <h1 className="mb-2">Annual persentage rate<span className="text-rose-400">*</span></h1>
            <input
           type="text"
           onChange={handleChange}
           placeholder="Enter annualPersentageRate"
           name="annualPersentageRate"
           value={form.annualPersentageRate || ""}
           className="border rounded-sm h-12 p-2 w-full"
         />
            </div>

           {/* credit score */}
           <div className="w-full">
  <h1 className="mb-2">
    Credit Score <span className="text-rose-400">*</span>
  </h1>

  <div className="flex flex-col md:flex-row gap-4">
    {/* Min Credit Score */}
    <div className="flex items-center gap-4 w-full">
      <label className="w-16">
        Min <span className="text-rose-400">*</span>
      </label>
      <input
        type="number"
        onChange={handleChange}
        placeholder="Min Credit Score"
        name="minCreditScore"
        value={form.minCreditScore || ""}
        className="border rounded-sm h-12 p-2 flex-1"
      />
    </div>

    {/* Max Credit Score */}
    <div className="flex items-center gap-4 w-full">
      <label className="w-16">
        Max <span className="text-rose-400">*</span>
      </label>
      <input
        type="number"
        onChange={handleChange}
        placeholder="Max Credit Score"
        name="maxCreditScore"
        value={form.maxCreditScore || ""}
        className="border rounded-sm h-12 p-2 flex-1"
      />
    </div>
  </div>
</div>

<div className="w-full">
  <h1 className="mb-2">
    User Age Group <span className="text-rose-400">*</span>
  </h1>

  <div className="flex flex-col md:flex-row gap-4">
    {/* Min Credit Score */}
    <div className="flex items-center gap-4 w-full">
      <label className="w-16">
        Min <span className="text-rose-400">*</span>
      </label>
      <input
        type="number"
        onChange={handleChange}
        placeholder="Min Age "
        name="minAge"
        value={form.minAge || ""}
        className="border rounded-sm h-12 p-2 flex-1"
      />
    </div>

    {/* Max Credit Score */}
    <div className="flex items-center gap-4 w-full">
      <label className="w-16">
        Max <span className="text-rose-400">*</span>
      </label>
      <input
        type="number"
        onChange={handleChange}
        placeholder="Max Age"
        name="maxAge"
        value={form.maxAge || ""}
        className="border rounded-sm h-12 p-2 flex-1"
      />
    </div>
  </div>
</div>





<div className="w-full">
           <h1 className="mb-2">min monthly income <span className="text-rose-400">*</span></h1>
            <input
           type="text"
           onChange={handleChange}
           placeholder="Enter min monthly income"
           name="minMonthlyIncome"
           value={form.minMonthlyIncome || ""}
           className="border rounded-sm h-12 p-2 w-full"
         />
            </div>

            <div className="w-full">
           <h1 className="mb-2">Max monthly income <span className="text-rose-400">*</span></h1>
            <input
           type="text"
           onChange={handleChange}
           placeholder="Enter maxMonthlyIncome"
           name="maxMonthlyIncome"
           value={form.maxMonthlyIncome || ""}
           className="border rounded-sm h-12 p-2 w-full"
         />
            </div>


         
            <div className="w-full">
           <h1 className="mb-2">Lounge service <span className="text-rose-400">*</span></h1>
           <select
             onChange={handleChange}
             name="loungeService"
             value={form.loungeService || ""}
             className="border rounded-sm h-12 p-2 w-full"
           >
             <option className='text-rose-400 bg-gray-100' value="">Enter service</option>
             <option className='text-rose-400 bg-gray-100' value="Yes">Yes</option>
             <option className='text-rose-400 bg-gray-100' value="No">No</option>
                      </select>
         </div>
         
         
         <div className="w-full">
           <h1 className="mb-2 ">Fraud Liability <span className="text-rose-400">*</span></h1>
           <select
             onChange={handleChange}
             name="fraudLiability"
             value={form.fraudLiability || ""}
             className="border rounded-sm h-12 p-2 w-full"
           >
             <option className='text-rose-400 bg-gray-100' value="">Select Category</option>
             <option className='text-rose-400 bg-gray-100' value="Yes">Yes</option>
             <option className='text-rose-400 bg-gray-100' value="No">No</option>
           
           
           </select>
         </div>
                           
                </div>
         
         
              </form>
              <div className='flex w-full items-center justify-end mt-3 mb-6 gap-6 mt-12'>
              <button className='text-center  text-white font-semibold p-3 w-60 rounded-md bg-green-400 ' onClick={previous}>previous</button>
              <button className='text-center  text-white font-semibold p-3 w-60 rounded-md bg-cyan-400 ' onClick={next}>Next</button>
              </div>
             
            </div>
          </div>
          )}
 {/* step 3 */}
          {currentStep===3&&(
      <div className="w-full p-4">
      {/* Top bar */}
      <div className="flex items-center gap-6 mb-6">
        <button className="text-3xl" onClick={toggle}>
          {hide ? <MdOutlineMenuOpen /> : <HiViewList />}
        </button>
        <h1 className="text-xl font-semibold">Description</h1>
      </div>
    
      {/* Form */}
      <div className="w-full px-2 md:px-4">
        <form className="w-full space-y-8">
    
          {/* Two main fields */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="w-full">
              <h1 className="mb-2">
                Features <span className="text-rose-400">*</span>
              </h1>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter Features"
                name="features"
                value={form.features || ""}
                className="border rounded-md h-45 p-2 w-full"
              />
            </div>
    
            <div className="w-full">
              <h1 className="mb-2">
                Welcome offers <span className="text-rose-400">*</span>
              </h1>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter welcomeOffers"
                name="welcomeOffers"
                value={form.welcomeOffers || ""}
                className="border rounded-md h-45 p-2 w-full"
              />
            </div>
          </div>
    
          {/* Three smaller fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full">
              <h1 className="mb-2">
              Published by <span className="text-rose-400">*</span>
              </h1>
              <input
                type="text"
                onChange={handleChange}
                placeholder="publishedBy"
                name="publishedBy"
                value={form.publishedBy || ""}
                className="border rounded-md h-12 p-2 w-full"
              />
            </div>
    
            <div className="w-full">
              <h1 className="mb-2">
                Published At <span className="text-rose-400">*</span>
              </h1>
              <input
                type="date"
                onChange={handleChange}
                placeholder="publishedAt"
                name="publishedAt"
                value={form.publishedAt || ""}
                className="border rounded-md h-12 p-2 w-full"
              />
            </div>
    
            <div className="w-full">
              <h1 className="mb-2">
                Payouts <span className="text-rose-400">*</span>
              </h1>
              <input
                type="text"
                onChange={handleChange} 
                placeholder="payouts"
                name="payouts"
                value={form.payouts || ""}
                className="border rounded-md h-12 p-2 w-full"
              />
            </div>
          </div>
        </form>
    
        {/* Bottom buttons */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 mt-12">
          <button
            className="text-center text-white font-semibold p-3 w-full md:w-60 rounded-md bg-green-400"
            onClick={previous}
          >
            Previous
          </button>
          <button
            className="text-center text-white font-semibold p-3 w-full md:w-60 rounded-md bg-cyan-400"
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    
          )}
       {/* current step-4 */}
       {currentStep===4&&(
                        <div className="w-full p-4">
                        <div className='flex gap-12 mb-6'>
                        <button className='text-3xl ' onClick={toggle}>{hide ?<MdOutlineMenuOpen/> :<HiViewList/>}</button>
                        <h1 className='text-xl font-semibold'>Criteria</h1>
                     
                        </div>
                       <div className="w-full px-4">
                         <form action="" className="w-full">
                    
                              
                           <div className="grid grid-cols-1  gap-x-12 gap-y-9 w-full">
                         
                       {/* fields */}
                            
                      <div className="w-full">
                      <h1 className="mb-2">seo title <span className="text-rose-400">*</span></h1>
                       <input
                      type="text"
                      onChange={handleChange}
                      placeholder="Seo title"
                      name="seoTitle"
                      value={form.seoTitle || ""}
                      className="border rounded-sm h-12 p-2 w-full"
                    />
                       </div>
                    
                       <div className="w-full">
                      <h1 className="mb-2"> Seo Keywords <span className="text-rose-400">*</span></h1>
                       <input
                      type="text"
                      onChange={handleChange}
                      placeholder="Enter seo keywords"
                      name="seoKeywords"
                      value={form.seoKeywords || ""}
                      className="border rounded-sm h-12 p-2 w-full"
                    />
                       </div>
           
                       <div className="w-full">
                      <h1 className="mb-2">Seo Description <span className="text-rose-400">*</span></h1>
                       <input
                      type="text"
                      onChange={handleChange}
                      placeholder="Seo Description"
                      name="seoDescription"
                      value={form.seoDescription || ""}
                      className="border rounded-sm h-60 p-2 w-full"
                    />
                       </div>

           
           
                       <div className="relative mb-7">
  <div
    className="w-80 h-30 border-3 border-dashed border-indigo-900 rounded-md relative"
    onClick={() => seoFileInputRef.current.click()}
    style={{
      backgroundImage: seoPreview ? `url(${seoPreview})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '180px',
    }}
  >
    <input
      type="file"
      onChange={handleseoImageChange}
      name="seoPhoto"
      accept="image/jpeg,image/png,image/gif"
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      ref={seoFileInputRef} 
    />

    {!seoPreview && (
      <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-gray-500">
        <div>
          <p>Click to upload SEO image</p>
          <p className="text-xs mt-1">JPG, PNG or GIF (Max 500KB)</p>
        </div>
      </div>
    )}

    {seoPreview && (
      <div className="absolute inset-0 bg-transparent flex justify-center items-center text-white z-50">
        <p>SEO Image Preview</p>
      </div>
    )}
  </div>
</div>

           
                        
                                      
                           </div>
                    
                    
                         </form>
                         <div className='flex w-full items-center justify-end mt-3 mb-6 gap-6 mt-12'>
                         <button className='text-center  text-white font-semibold p-3 w-60 rounded-md bg-green-400 ' onClick={previous}>previous</button>
                         <button className='text-center  text-white font-semibold p-3 w-60 rounded-md bg-cyan-400 ' onClick={next}>Next</button>
                         </div>
                        
                       </div>
                     </div>
          )}
          {currentStep===5&&(
          <div className='w-full'>
               <div className='flex gap-12 mb-6'>
                          <button className='text-3xl ' onClick={toggle}>{hide ?<MdOutlineMenuOpen/> :<HiViewList/>}</button>
                          <h1 className='text-xl font-semibold'>Criteria</h1>
                       
                          </div>
        
    <div className="space-y-8 p-7">
      {/* Two-column section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Card Information</h2>
          <p className="text-gray-500 mb-4">Please check out given information</p>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Category Name:</span>
              <span className="font-medium">{form.categoryName || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Provider Name:</span>
              <span className="font-medium">{form.providerName || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Network Name:</span>
              <span className="font-medium">{form.service || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Credit Card Name:</span>
              <span className="font-medium">{form.cardName || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Credit Card Status:</span>
              <span className="font-medium">{form.cardStatus ? "Active" : "Inactive"}</span>
            </div>
          </div>
        </div>
  
        {/* Criteria */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Criteria</h2>
          <p className="text-gray-500 mb-4">Please check out given information</p>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Annual Fee:</span>
              <span className="font-medium">{form.annualFee || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Joining Fee:</span>
              <span className="font-medium">{form.joiningFee || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Annual Percentage Rate:</span>
              <span className="font-medium">{form.annualPersentageRate || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Credit Score min:</span>
              <span className="font-medium">{form.minCreditScore || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Credit Score max:</span>
              <span className="font-medium">{form.maxCreditScore || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">User Age Group min:</span>
              <span className="font-medium">{form.minAge || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">User Age Group max:</span>
              <span className="font-medium">{form.maxAge || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
  
      {/* Description Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Description</h2>
        </div>
        <p className="text-gray-500 mb-4">Please check out given information</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-1">Features:</h3>
            <p className="text-gray-600">{form.features || "No features provided"}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">Welcome Offers:</h3>
            <p className="text-gray-600">{form.welcomeOffers || "No welcome offers provided"}</p>
          </div>
        </div>
      </div>
  
      {/* SEO Information Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">SEO Information</h2>
        </div>
        <p className="text-gray-500 mb-4">Please check out given information</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-1">SEO Title:</h3>
            <p className="text-gray-600">{form.seoTitle || "No SEO title provided"}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">SEO Keywords:</h3>
            <p className="text-gray-600">{form.seoKeywords || "No SEO keywords provided"}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">SEO Description:</h3>
            <p className="text-gray-600">{form.seoDescription || "No SEO description provided"}</p>
          </div>
        </div>
      </div>
  
   
      <div className="flex justify-end gap-6">
      <button 
          onClick={previous}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Pravious
        </button>
        <button 
          onClick={update}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
    </div>
          )}
          {/* <button onClick={next}>N</button> */}
    </div>
  )
}

export default MultyStepEdit