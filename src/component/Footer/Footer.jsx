import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="flex flex-col md:flex-row justify-around text-center py-10 px-4">
          <div className="py-5">
            <h2 className="uppercase mb-3 text-xl font-bold">Location</h2>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p className="mb-0">Clark, MO 65243</p>
          </div>

          <div className="py-5">
            <h2 className="uppercase mb-3 text-xl font-bold">Around Web</h2>
            <div className="flex justify-center items-center">
  <i className="fa-brands fa-facebook mx-2 text-sm border border-white rounded-full p-2 text-white"></i>
  <i className="fa-brands fa-twitter mx-2 text-sm border border-white rounded-full p-2 text-white"></i>
  <i className="fa-brands fa-linkedin-in mx-2 text-sm border border-white rounded-full p-2 text-white"></i>
  <i className="fa-solid fa-globe mx-2 text-sm border border-white rounded-full p-2 text-white"></i>
</div>

          </div>

          <div className="py-5">
            <h2 className="uppercase mb-3 text-xl font-bold">About Freelancer</h2>
            <p className="mb-0">Freelance is a free to use, licensed Bootstrap theme created</p>
            <p className="mb-0">by Route</p>
          </div>
        </div>

        <div className="bg-neutral-900 text-center py-4">
          <p className="mb-0 text-white text-sm">
            Copyright © Your Website 2021
          </p>
        </div>
      </footer>
    </>
  )
}
