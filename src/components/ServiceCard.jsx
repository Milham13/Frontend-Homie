import React from 'react';
import Card1 from '../assets/image11.jpg'
import Card2 from '../assets/image10.jpg'
import Card3 from '../assets/image12.jpg'

function ServiceCard() {
    return (
    <>
    <div className="flex flex-col px-5">
      <div className="self-center text-5xl font-bold text-center leading-[52.2px] text-blue-500 max-md:text-4xl">
        LAYANAN
      </div>
      <div className="flex overflow-x-auto gap-5 justify-between mt-20 ml-8 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col pb-3 w-full rounded-xl shadow-sm bg-blue-500">
          <img src={Card1} alt=""/>
            <div className="flex gap-5 justify-between self-start mt-2.5 ml-7 max-md:ml-2.5">
              <div className="flex flex-col">
                <div className="text-2xl font-bold leading-7 text-white">
                  Laundry Kiloan
                </div>
                <div className="text-xs tracking-wide leading-4 text-blue-500 underline">
                  Selengkapnya
                </div>
              </div>
              <div className="text-xs tracking-wide leading-4 text-white">
                Kami memberikan pelayanan dalam jasa cuci kiloan dengan ragam
                layanan
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col pb-3 w-full rounded-xl shadow-sm bg-blue-500">
          <img src={Card2} alt=""/>
            <div className="flex gap-5 justify-between self-start mt-2.5 ml-7 max-md:ml-2.5">
              <div className="flex flex-col">
                <div className="text-2xl font-bold leading-7 text-white">
                  Cuci Sepatu
                </div>
                <div className="text-xs tracking-wide leading-4 text-blue-500 underline">
                  Selengkapnya
                </div>
              </div>
              <div className="text-xs tracking-wide leading-4 text-white">
                Kami memberikan pelayanan dalam jasa cuci sepatu agar sepatu
                seperti baru kembali
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col pb-3 w-full rounded-xl shadow-sm bg-blue-500">
          <img src={Card3} alt=""/>
            <div className="flex gap-5 justify-between self-start mt-2.5 ml-7 max-md:ml-2.5">
              <div className="flex flex-col">
                <div className="text-2xl font-bold leading-7 text-white">
                  Cuci Helm
                </div>
                <div className="text-xs tracking-wide leading-4 text-blue-500">
                  Selengkapnya
                </div>
              </div>
              <div className="text-xs tracking-wide leading-4 text-white">
                Kami memberikan pelayanan dalam jasa cuci helm agar helm bersih
                dan wangi
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center" />
        <div className="flex flex-col justify-center" />
        <div className="flex flex-col justify-center" />
      </div>
      <div className="flex relative flex-col mt-5 h-[389px]" />
    </div>
      </>
    );
  }

export default ServiceCard;