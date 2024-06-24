import * as React from "react";
import Navbar from "../components/Navbar";
import mesin from "../assets/mesin.png"
import mob from "../assets/mob.png"
import web from "../assets/web.png"
import aai from "../assets/aai.png"
import faq from "../assets/faq.png"
import Footer from "../components/Footer";

function Tentang() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center px-5">
      <div className="text-5xl font-bold text-center leading-[52.2px] text-blue-500 max-md:text-4xl pt-24">
        TENTANG
      </div>
      <div className="mt-20 w-full max-w-[1273px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <img src={mesin} alt=""/>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-10 text-base leading-6 text-blue-500 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-bold leading-[52.2px] max-md:max-w-full max-md:text-4xl">
                Homie Laundry
              </div>
              <div className="mt-11 tracking-wide max-md:mt-10 max-md:max-w-full">
                Laundry di Pekanbaru menyediakan layanan cuci dan setrika
                pakaian dengan kualitas terbaik, memastikan pakaian bersih dan
                segar untuk pelanggan setia di kota ini.
              </div>
              <div className="mt-5 tracking-wide max-md:max-w-full">
                Laundry pekanbaru didirikan oleh sepasang suami istri yang
                sedang mencari penghasilan tambahan untuk keperluan sehari-hari.
                Berdiri sejak 2017, laundry sudah memiliki omzet hingga
                200jt/bln.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 text-6xl font-bold text-center text-black max-md:mt-10 max-md:text-4xl">
        Temui Kami
      </div>
      <div className="mt-7 text-2xl font-medium leading-7 text-center text-black">
        Trisula Force
      </div>
      <div className="mt-8 text-base leading-7 text-center text-black w-[1003px] max-md:max-w-full">
        &quot;Trisula Force&quot; mewakili kolaborasi yang kokoh antara ketiga
        program yakni Advance AI, Web Development, dan Mobile Development dalam
        menghadirkan inovasi yang membangkitkan martabat bangsa Indonesia
        melalui kecerdasan buatan. Trisula, yang berarti tombak bermata tiga
        sebagai simbol keseimbangan dan harmoni, merefleksikan perpaduan
        keahlian yang beragam namun saling melengkapi untuk mencapai tujuan
        bersama. Force, sebagai kekuatan dan tekad yang bulat, menggambarkan
        semangat untuk menghadirkan solusi-solusi teknologi yang canggih dan
        berdaya saing tinggi di Pekanbaru, dan akan berguna bagi kemajuan UMKM
        Indonesia.{" "}
      </div>
      <img src={mob} alt=""/>
      <img src={web} alt=""/>
      <img src={aai} alt=""/>
      <div className="justify-center items-center self-stretch px-16 py-12 w-full text-3xl font-bold text-white whitespace-nowrap bg-blue-500 max-md:px-5 max-md:max-w-full">
        FAQ
      </div>
      <div className="flex flex-col px-5 pt-10 mt-12 w-full bg-white rounded-3xl shadow-sm max-w-[1060px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center text-4xl font-semibold text-stone-800 max-md:max-w-full">
          Pertanyaan yang sering ditanyakan
        </div>
        <div className="px-2.5 pt-2.5 pb-4 mt-10 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
            <img src={faq} alt=""/>
            </div>
            <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-5 pb-3 text-black max-md:mt-10 max-md:max-w-full">
                <div className="justify-center px-5 py-5 text-xl font-bold bg-white rounded shadow-sm text-stone-800 max-md:max-w-full">
                  Bagaimana cara menyampaikan keluhan atau masukan?
                </div>
                <div className="justify-center px-5 py-5 mt-4 text-xl font-bold bg-white rounded shadow-sm max-md:max-w-full">
                  Apa tidak akan ada opsi untuk pembayaran online?
                </div>
                <div className="flex flex-col px-4 py-6 mt-4 bg-white rounded-sm shadow-sm max-md:max-w-full">
                  <div className="flex gap-5 text-xl font-bold max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto max-md:max-w-full">
                      Bagaimana cara mengetahui ongkos kirim laundry?
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6795b5c0b35965416dbfb85df0573dbe3ea0f6e8ffef74f8fb96c405ef3758b0?"
                      className="shrink-0 self-start mt-2 aspect-[1.79] fill-black w-[18px]"
                    />
                  </div>
                  <div className="mt-5 text-base max-md:max-w-full">
                    Ongkos kirim laundry dapat Anda hitung dengan memasukkan
                    berat cucian dan alamat tujuan pada halaman pemesanan kami.
                    Biaya pengiriman akan kami kirimkan kepada anda.
                  </div>
                </div>
                <div className="justify-center px-5 py-5 mt-4 text-xl font-bold bg-white rounded shadow-sm max-md:max-w-full">
                  Apakah ada asuransi untuk pakaian kami jika mengalami
                  kehilangan?
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

export default Tentang