import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewOffer = () => {
    const [data,setData]=useState({})
    const {id}=useParams()

    const getCard=async ()=>{
        const res=await axios.get(`http://localhost:3003/api/getCard/${id}`)
        setData(res.data)
    }

    useEffect(()=>{
        getCard()
    },[])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="bg-white w-full lg:w-64 px-4 py-6 hidden lg:block">
        <nav className="space-y-2">
          <div className="text-xs font-semibold text-gray-400 mb-2">Menu</div>
          <a href="#" className="flex items-center px-3 py-2 rounded bg-blue-50 text-blue-600 font-medium">
            <span className="mr-2">📦</span> Mapped Offers
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
            <span className="mr-2">📄</span> Requests
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
            <span className="mr-2">💳</span> Payout Accounts
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
            <span className="mr-2">📊</span> Activity Log
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
            <span className="mr-2">⚙️</span> Settings
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
            <span className="mr-2">📝</span> Release Notes
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
            <span className="mr-2">📚</span> Documentation
          </a>
        </nav>
        <button className="mt-8 w-full text-left text-gray-400 text-sm">Logout</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">Home &gt; Listing Offers &gt; View Offer</div>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">View Offer</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded font-semibold hover:bg-blue-200 transition">Edit Offer</button>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="rounded-full w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Offer Card */}
        <section className="flex-1 p-4 flex justify-center items-start w-full">
          <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg p-6">
            {/* Card Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 mb-4">
              <div className="flex items-center flex-col md:flex-row space-x-4">
                <img src={data.cardPhoto} alt="Axis Bank Neo" className="w-80 h-50 rounded-lg bg-cover border" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{data.cardName}</h2>
                  <div className="text-sm text-gray-500">{data.cardSlung}</div>
                  <div className="text-xs text-gray-400 mt-1">Last Updated: 1 day ago</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <span className="inline-flex items-center bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Active</span>
              </div>
            </div>

            {/* Card Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4 border rounded-md p-6">
                <div className="text-sm text-gray-700 flex justify-between items-start"><span className="font-semibold">Card Type:</span>                          {data.cardType}</div>
                <div className="text-sm text-gray-700 flex justify-between items-start"><span className="font-semibold">Category Name:</span> {data.categoryName}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Provider Name:</span> HDFC</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Service:</span> {data.service}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Payout:</span> {data.payout}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Commission:</span> {data.commission}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Card URL:</span> <a href={data.cardLink} className="text-blue-600 underline">{data.cardLink}</a></div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Card Status:</span> {data.cardStatus}</div>
              </div>
              {/* Right Column */}
              <div className="space-y-4 border rounded-md p-6">
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Annual Fee:</span> {data.annualFee}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Joining Fee:</span> {data.joiningFee}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Foreign Transaction Fee:</span> {data.forignTransactionPlanning}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Annual Percentage Rate:</span> {data.annualPersentageRate}%</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Credit Score (Min - Max):</span> {data.minCreditScore} - {data.maxCreditScore}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Age Limit (Min - Max):</span> {data.minAge} - {data.maxAge}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Monthly Income (Min - Max):</span> {data.minMonthlyIncome} - {data.maxMonthlyIncome}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Lounge Service:</span> {data.loungeService}</div>
                <div className="text-sm text-gray-700 flex justify-between"><span className="font-semibold">Fraud Liability:</span> {data.fraudLiability}</div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 border p-6 rounded-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
              <div className="bg-gray-50 rounded p-6 text-sm text-gray-700 space-y-4">
                <div><span className="font-semibold">Features:</span> {data.features}</div>
                <div><span className="font-semibold">Welcome Offers:</span> {data.welcomeOffers}</div>
                <div><span className="font-semibold">Published By:</span> {data.publishedBy}</div>
                <div><span className="font-semibold">Published At:</span> {data.publishedAt}</div>
                <div><span className="font-semibold">Payouts:</span> {data.payouts}</div>
              </div>
            </div>

            {/* SEO Details */}
            <div className="mt-6 border p-6 rounded-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="bg-gray-50 rounded p-6 space-y-4">
                  <div><span className="font-semibold">SEO Title:</span> {data.seoTitle}</div>
                  <div><span className="font-semibold">SEO Description:</span> {data.seoDescription}</div>
                  <div><span className="font-semibold">SEO Image:</span> <img src={data.seoPhoto} alt="SEO" className="w-44 h-25 rounded mt-2" /></div>
                </div>
                <div className="bg-gray-50 rounded p-6 space-y-4">
                  <div><span className="font-semibold">SEO Keywords:</span> {data.seoKeywords}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ViewOffer;