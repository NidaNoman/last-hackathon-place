



import Navbar from "@/components/allnavbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Navbar />
      {/* About Us Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-12 lg:px-[195px] pb-[112px] gap-8 lg:gap-[80px]">
        <div>
          <h3 className="text-[16px] leading-[24px] font-bold text-[#252B42] uppercase">
            About Company
          </h3>
          <h1 className="text-[28px] sm:text-[58px] leading-[40px] sm:leading-[80px] text-[#252B42] mt-[30px] mb-[30px]">
            ABOUT US
          </h1>
          <p className="text-[16px] sm:text-[20px] text-[#737373] leading-[24px] sm:leading-[30px] mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 text-lg font-medium hover:bg-blue-600 rounded">
            Get Quote Now
          </button>
        </div>
        <div className="relative">
          <div className="absolute bg-pink-100 rounded-full w-[250px] sm:w-[415px] h-[250px] sm:h-[415px] -z-10"></div>
          <Image
            src="/shopping.png"
            alt="Shopping Woman"
            width={400}
            height={400}
            className="relative"
          />
        </div>
      </section>

      {/* Problems Section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-12 lg:px-[212px]">
        <div>
          <h4 className="text-[14px] leading-[20px] text-red-500 uppercase mb-2">
            Problems trying
          </h4>
          <h2 className="text-2xl font-semibold text-[#252B42] mb-4 text-[24px] leading-[32px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <p className="text-[#737373] mt-[25px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </section>

      {/* Statistics Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[50px] text-center px-4 sm:px-8 lg:px-[195px]">
        {[
          { value: "15K", label: "Happy Customers" },
          { value: "150K", label: "Monthly Visitors" },
          { value: "15", label: "Countries Worldwide" },
          { value: "100+", label: "Partners" },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:items-start lg:items-center"
          >
            <h3 className="text-[30px] sm:text-[40px] leading-[40px] sm:leading-[80px] font-bold text-[#252B42]">
              {stat.value}
            </h3>
            <p className="text-[#737373] mt-2 text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Video Section */}
      <section className="h-auto pt-[112px] px-4 sm:px-12 lg:px-[195px] flex justify-center">
        <div className="relative w-full max-w-[1050px]">
          <Image
            src="/mount.png"
            alt="Mountain Video Preview"
            width={898}
            height={540}
            className="rounded-md w-full"
          />
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="text-center px-4 sm:px-12 lg:px-[195px] pb-[112px]">
        <h2 className="font-bold mb-6 text-[28px] sm:text-[50px] text-[#252B42]">
          Meet Our Team
        </h2>
        <p className="text-[#737373] mb-12 text-[14px] sm:text-[16px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="text-center">
              <Image
                src={`/team${index + 1}.jpg`}
                alt={`Team Member ${index + 1}`}
                className="mx-auto w-40 h-40 object-cover mb-2"
                width={316}
                height={383}
              />
              <h3 className="text-lg font-semibold">Username</h3>
              <p className="text-gray-500">Profession</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <FaFacebookF size={20} />
                </Link>
                <Link href="#" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={20} />
                </Link>
                <Link href="#" className="text-pink-500 hover:text-pink-700">
                  <FaInstagram size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big Companies Section */}
      <section className="py-8 sm:py-12 lg:py-16 text-center bg-gray-100 px-4 sm:px-12 lg:px-[195px]">
        <h2 className="text-[28px] sm:text-[50px] font-bold mb-6 sm:mb-8 text-[#252B42]">
          Big Companies Are Here
        </h2>
        <p className="text-[#737373] mb-8 sm:mb-12">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {["logo1", "logo2", "logo3", "logo4", "logo5"].map((logo, index) => (
            <div key={index} className="h-12 flex items-center justify-center">
              <Image
                src={`/${logo}.png`}
                alt={logo}
                className=""
                width={76}
                height={72}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-500 text-white px-4 sm:px-12 lg:px-[195px] py-8 sm:py-12 lg:py-16 gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="font-bold text-[28px] sm:text-[40px] mb-4">
            Now Lets Grow Yours
          </h2>
          <p className="mb-6 text-[14px] sm:text-[16px]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th century
          </p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded font-semibold hover:bg-gray-200">
            Button
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/work.png"
            alt="Work With Us"
            className="rounded-md object-cover"
            width={590}
            height={640}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
