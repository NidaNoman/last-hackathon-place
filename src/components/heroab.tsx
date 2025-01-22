import React from 'react'
import Image from 'next/image'

const Heroab = () => {
  return (
    <div>
        <section className="max-w-[1322px] mx-auto px-[135px] py-16 flex flex-col lg:flex-row items-center gap-8">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-[48px] leading-[56px] font-bold tracking-tight text-gray-800 mb-4">
          ABOUT US
        </h2>
        <p className="text-[18px] leading-[28px] text-gray-600 mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600">
          Get Quote Now
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <Image
          src="/path-to-your-image.jpg"
          alt="Hero Image"
          className="w-full max-w-[550px] rounded-lg"
        />
      </div>

</section>

</div>
  )
}

export default Heroab
