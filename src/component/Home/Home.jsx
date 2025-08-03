import React from 'react'

export default function Home() {
  return (
    <>
      <section className="bg-[#1abc9c] flex flex-col justify-center pt-20 min-h-screen">
        <div className="text-center">
          <img
            src="public/images/avataaars.svg"
            alt="home image"
            width={250}
            className="py-4 mx-auto"
          />
        </div>

        <div className="text-center mt-3">
          <h1 className="uppercase text-white text-4xl font-bold">start framework</h1>

          <div className="flex justify-center items-center mt-4">
            <div className="h-1 w-[5%] bg-white"></div>
            <i className="fa-solid fa-star mx-3 text-white text-xl"></i>
            <div className="h-1 w-[5%] bg-white"></div>
          </div>

          <p className="pt-3 pb-10 mb-10 text-white text-lg">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </section>
    </>
  )
}
