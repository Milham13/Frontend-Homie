import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import kiloan from "../assets/kiloan.png"
import sepatu from "../assets/sepatu.png"
import helmet from "../assets/helmet.png"
import keperluan from "../assets/keperluan.jpg"
import jaket from "../assets/jaket.jpg"
import gorden from "../assets/gorden.jpg"
import set from "../assets/set.jpg"
import karpet from "../assets/karpet.jpg"
import tas from "../assets/tas.jpg"

function Layanan() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col pt-24 px-5">
      <div className="self-center text-5xl font-bold text-center leading-[52.2px] text-blue-500 max-md:max-w-full max-md:text-4xl">
        LAYANAN LAUNDRY
      </div>
      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-3 mx-auto w-full bg-blue-500 rounded-xl shadow-sm max-md:mt-10">
            <img src={kiloan} alt=""/>
              <div className="flex gap-5 justify-between self-start mt-4 ml-7 max-md:ml-2.5">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold leading-7 text-white">
                    Laundry Kiloan
                  </div>
                  <div className="mt-3 text-xs tracking-wide leading-4 text-orange-300 underline">
                    Selengkapnya
                  </div>
                </div>
                <div className="my-auto text-xs tracking-wide leading-4 text-white">
                  Kami memberikan pelayanan dalam jasa cuci kiloan dengan ragam
                  layanan
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-3 mx-auto w-full bg-blue-500 rounded-xl shadow-sm max-md:mt-10">
            <img src={sepatu} alt=""/>
              <div className="flex gap-5 justify-between mt-3.5 ml-7 max-w-full w-[306px] max-md:ml-2.5">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold leading-7 text-white">
                    Cuci Sepatu
                  </div>
                  <div className="mt-1.5 text-xs tracking-wide leading-4 text-orange-300 underline">
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
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-3 mx-auto w-full bg-blue-500 rounded-xl shadow-sm max-md:mt-10">
            <img src={helmet} alt=""/>
              <div className="flex gap-5 justify-between mt-3.5 ml-7 max-w-full w-[284px] max-md:ml-2.5">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold leading-7 text-white">
                    Cuci Helm
                  </div>
                  <div className="mt-3 text-xs tracking-wide leading-4 text-orange-300">
                    Selengkapnya
                  </div>
                </div>
                <div className="text-xs tracking-wide leading-4 text-white">
                  Kami memberikan pelayanan dalam jasa cuci helm agar helm
                  bersih dan wangi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-3 mx-auto w-full bg-blue-500 rounded-xl shadow-sm max-md:mt-10">
            <img src={keperluan} alt=""/>
              <div className="flex gap-5 justify-between self-start mt-4 ml-7 max-md:ml-2.5">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold leading-7 text-white">
                    Keperluan rumah
                  </div>
                  <div className="mt-3 text-xs tracking-wide leading-4 text-orange-300 underline">
                    Selengkapnya
                  </div>
                </div>
                <div className="my-auto text-xs tracking-wide leading-4 text-white">
                  Kami memberikan pelayanan dalam jasa cuci seperti sprei,
                  selimut, dll
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-3 mx-auto w-full bg-blue-500 rounded-xl shadow-sm max-md:mt-10">
            <img src={jaket} alt=""/>
              <div className="flex gap-5 justify-between mt-4 ml-7 max-w-full w-[284px] max-md:ml-2.5">
                <div className="flex flex-col whitespace-nowrap">
                  <div className="text-2xl font-bold leading-7 text-white">
                    Jaket
                  </div>
                  <div className="mt-10 text-xs tracking-wide leading-4 text-orange-300 underline">
                    Selengkapnya
                  </div>
                </div>
                <div className="my-auto text-xs tracking-wide leading-4 text-white">
                  Kami memberikan pelayanan dalam jasa cuci berbagai macam jenis
                  jaket
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-3 mx-auto w-full bg-blue-500 rounded-xl shadow-sm max-md:mt-10">
            <img src={gorden} alt=""/>
              <div className="flex gap-5 justify-between mt-4 ml-7 max-w-full w-[284px] max-md:ml-2.5">
                <div className="flex flex-col whitespace-nowrap">
                  <div className="text-2xl font-bold leading-7 text-white">
                    Gorden
                  </div>
                  <div className="mt-10 text-xs tracking-wide leading-4 text-orange-300">
                    Selengkapnya
                  </div>
                </div>
                <div className="my-auto text-xs tracking-wide leading-4 text-white">
                  Kami memberikan pelayanan dalam jasa cuci gorden anda dirumah{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-3 mx-auto w-full bg-blue-500 rounded-xl shadow-sm max-md:mt-10">
            <img src={set} alt=""/>
              <div className="flex gap-5 justify-between mt-3.5 ml-7 max-w-full w-[306px] max-md:ml-2.5">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold leading-7 text-white">
                    Pakaian set
                  </div>
                  <div className="mt-3 text-xs tracking-wide leading-4 text-orange-300 underline">
                    Selengkapnya
                  </div>
                </div>
                <div className="text-xs tracking-wide leading-4 text-white">
                  Kami memberikan pelayanan dalam jasa cuci kiloan maupun satuan
                  untuk pakaian set
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-3 mx-auto w-full bg-blue-500 rounded-xl shadow-sm max-md:mt-10">
            <img src={karpet} alt=""/>
              <div className="flex gap-5 justify-between mt-4 ml-7 max-w-full w-[284px] max-md:ml-2.5">
                <div className="flex flex-col whitespace-nowrap">
                  <div className="text-2xl font-bold leading-7 text-white">
                    Karpet
                  </div>
                  <div className="mt-8 text-xs tracking-wide leading-4 text-orange-300 underline">
                    Selengkapnya
                  </div>
                </div>
                <div className="my-auto text-xs tracking-wide leading-4 text-white">
                  Kami memberikan pelayanan dalam jasa cuci berbagai karpet anda
                  segera
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-3 mx-auto w-full bg-blue-500 rounded-xl shadow-sm max-md:mt-10">
            <img src={tas} alt=""/>
              <div className="flex gap-5 justify-between mt-4 ml-7 max-w-full w-[284px] max-md:ml-2.5">
                <div className="flex flex-col whitespace-nowrap">
                  <div className="text-2xl font-bold leading-7 text-white">
                    Tas
                  </div>
                  <div className="mt-10 text-xs tracking-wide leading-4 text-orange-300">
                    Selengkapnya
                  </div>
                </div>
                <div className="text-xs tracking-wide leading-4 text-white">
                  Kami memberikan pelayanan dalam jasa cuci untuk menjaga
                  kebersihan tas mu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Layanan
