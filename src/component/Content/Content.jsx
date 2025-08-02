import React from 'react'

export default function Content() {
  return (
    <>
      <section className="h-[90vh] mb-4">
        <div className="text-center pt-4">
          <h1 className="uppercase text-[#2c3e50] font-bold text-3xl">Contact Section</h1>

          <div className="flex justify-center items-center mt-4">
            <div className="h-1 w-[5%] bg-[#2c3e50]"></div>
            <i className="fa-solid fa-star mx-3 text-[#2c3e50] text-xl"></i>
            <div className="h-1 w-[5%] bg-[#2c3e50]"></div>
          </div>

          <div className="flex flex-col items-center py-5 mt-5 w-full">
            <input
              type="text"
              placeholder="userName"
              className="w-1/2 mb-3 px-3 py-2 border-b border-[#e0dddd] text-base focus:outline-none"
            />
            <input
              type="number"
              placeholder="userAge"
              className="w-1/2 mb-3 px-3 py-2 border-b border-[#e0dddd] text-base focus:outline-none"
            />
            <input
              type="email"
              placeholder="userEmail"
              className="w-1/2 mb-3 px-3 py-2 border-b border-[#e0dddd] text-base focus:outline-none"
            />
            <input
              type="password"
              placeholder="userPassword"
              className="w-1/2 mb-3 px-3 py-2 border-b border-[#e0dddd] text-base focus:outline-none"
            />

            <div className="w-1/2 flex justify-start">
              <button className="mt-3 py-2 px-4 bg-[#1abc9c] text-white rounded-md text-base hover:opacity-90 transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
