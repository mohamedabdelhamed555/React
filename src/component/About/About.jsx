import React from 'react'

export default function About() {
  return (
    <>
      <section className="bg-[#1abc9c] flex flex-col justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="uppercase text-white text-3xl font-bold">about component</h1>

          <div className="flex justify-center items-center mt-3 pb-4">
            <div className="w-[25%] h-1 bg-white"></div>
            <i className="fa-solid fa-star mx-3 text-white text-xl"></i>
            <div className="w-[25%] h-1 bg-white"></div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 px-10 text-white">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes <br />
            the complete source files including HTML, CSS, and JavaScript as well <br />
            as optional SASS stylesheets for easy customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes <br />
            the complete source files including HTML, CSS, and JavaScript as well <br />
            as optional SASS stylesheets for easy customization.
          </p>
        </div>
      </section>
    </>
  )
}
