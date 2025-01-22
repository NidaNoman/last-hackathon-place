import Image from 'next/image';

const NeuralUniverse = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 sm:p-8 md:p-12 lg:p-16">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/uni.jpg" // Change to the correct path
          alt="Couple in a plaid scarf"
          width={704}
          height={682}
          className="rounded-lg object-cover w-full h-auto sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-4 sm:px-6 md:px-8">
        <p className="text-gray-500 uppercase tracking-wide text-xs sm:text-sm lg:text-base mb-2">
          Summer 2020
        </p>
        <h1 className="text-[40px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#252b42] mb-4 leading-[50px]">
          Part of the Neural Universe
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#737373] mb-6 text-[20px] leading-[30px]">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded hover:bg-green-600">
            Buy Now
          </button>
          <button className="border border-green-500 text-green-500 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded hover:bg-green-100">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeuralUniverse;
