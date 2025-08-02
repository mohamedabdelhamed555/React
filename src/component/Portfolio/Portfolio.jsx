import React, { useState } from 'react'

export default function Portfolio() {
  const [modalImage, setModalImage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (imgSrc) => {
    setModalImage(imgSrc)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImage('')
  }

  const images = [
    "/src/assets/images/poert1.png",
    "/src/assets/images/port2.png",
    "/src/assets/images/port3.png",
    "/src/assets/images/poert1.png",
    "/src/assets/images/port2.png",
    "/src/assets/images/port3.png",
  ]

  return (
    <>
      <section className="pt-12 pb-8 bg-gray-100">
        <div className="text-center">
          <h1 className="uppercase text-3xl font-bold text-gray-800">
            Portfolio component
          </h1>
          <div className="flex justify-center items-center mt-4">
            <div className="h-1 w-[5%] bg-[#2c3e50]"></div>
            <i className="fa-solid fa-star mx-4 text-[#2c3e50] text-xl"></i>
            <div className="h-1 w-[5%] bg-[#2c3e50]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={img}
                  alt="portfolio item"
                  className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  onClick={() => openModal(img)}
                  className="absolute inset-0 bg-[#1abc9c] bg-opacity-0 group-hover:bg-opacity-100 opacity-0 group-hover:opacity-100 transition-all duration-700 flex justify-center items-center"
                >
                  <i className="fa-solid fa-plus text-white text-6xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-transparent rounded-xl max-w-3xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt="Modal" className="w-full rounded-xl" />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}
