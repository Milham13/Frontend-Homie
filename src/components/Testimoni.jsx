import React from 'react'
import pp from '../assets/pptesti.jpg'
import bintang from '../assets/bintang.png'
import waktu from '../assets/time.png'
import rating from '../assets/ratings.png'

const Testimoni = () => {
  return (
    <div className="flex flex-col px-5">
    <div className="self-center text-5xl font-bold text-center leading-[52.2px] text-blue-500 max-md:text-4xl">
      TESTIMONI
    </div>
    <div className="flex flex-col px-20 pt-12 mt-2.5 w-full bg-blue-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
        <div className="self-start text-5xl font-bold text-white w-[351px]">
          Customer Reviews
        </div>
        <div className="flex gap-5 self-end mt-10 max-md:mt-10" />
      </div>
      <div className="mt-9 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-11 mx-auto w-full bg-white rounded max-md:mt-4">
              <div className="flex gap-5 justify-between w-full">
                <div className="flex gap-2 items-start text-base leading-5 text-amber-500">
                <img src={pp} alt=""/>
                  <div className="shrink-0 w-0.5 bg-amber-500 h-[50px]" />
                  <div className="mt-3">
                    <span className="text-lg font-semibold text-slate-950">
                      Siti putri
                    </span>
                    <span className="text-amber-500"> Surabaya</span>
                  </div>
                </div>
                <div className="flex flex-col self-start mt-2.5 text-base leading-5 text-black">
                <img src={bintang} alt=""/>
                  <div className="flex gap-3">
                  <img src={waktu} alt=""/>
                    <div className="flex-auto">24th April 2024</div>
                  </div>
                </div>
              </div>
              <div className="mt-11 text-base leading-7 text-black max-md:mt-10">
                Saya sudah beberapa kali memesan di laundry ini dan menurut
                saya pihak dari laundry memperhatikan kuantiti daripada
                kualitas
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-11 mx-auto w-full bg-white rounded max-md:mt-4">
              <div className="flex gap-5 justify-between w-full">
                <div className="flex gap-2 items-start text-base leading-5 text-amber-500">
                <img src={pp} alt=""/>
                  <div className="shrink-0 w-0.5 bg-amber-500 h-[50px]" />
                  <div className="mt-3">
                    <span className="text-lg font-semibold text-slate-950">
                      Siti putri
                    </span>
                    <span className="text-amber-500"> Surabaya</span>
                  </div>
                </div>
                <div className="flex flex-col self-start mt-2.5 text-base leading-5 text-black">
                <img src={bintang} alt=""/>
                  <div className="flex gap-3">
                  <img src={waktu} alt=""/>
                    <div className="flex-auto">24th April 2024</div>
                  </div>
                </div>
              </div>
              <div className="mt-11 text-base leading-7 text-black max-md:mt-10">
                Saya sudah beberapa kali memesan di laundry ini dan menurut
                saya pihak dari laundry memperhatikan kuantiti daripada
                kualitas
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-11 mx-auto w-full bg-white rounded max-md:mt-4">
              <div className="flex gap-5 justify-between w-full">
                <div className="flex gap-2 items-start text-base leading-5 text-amber-500">
                <img src={pp} alt=""/>
                  <div className="shrink-0 w-0.5 bg-amber-500 h-[50px]" />
                  <div className="mt-3">
                    <span className="text-lg font-semibold text-slate-950">
                      Siti putri
                    </span>
                    <span className="text-amber-500"> Surabaya</span>
                  </div>
                </div>
                <div className="flex flex-col self-start mt-2.5 text-base leading-5 text-black">
                <img src={bintang} alt=""/>
                  <div className="flex gap-3">
                  <img src={waktu} alt=""/>
                    <div className="flex-auto">24th April 2024</div>
                  </div>
                </div>
              </div>
              <div className="mt-11 text-base leading-7 text-black max-md:mt-10">
                Saya sudah beberapa kali memesan di laundry ini dan menurut
                saya pihak dari laundry memperhatikan kuantiti daripada
                kualitas
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={rating} alt="" className="z-10 self-center mt-10 mb-0 max-w-full aspect-[0.81] w-[127px] max-md:mb-2.5"/>
    </div>
  </div>
  )
}

export default Testimoni
