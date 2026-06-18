import Image from "next/image";
import EntranceMotion from "./entrance-motion";
import {
  FaPhoneAlt,
  FaChevronRight,
  FaTelegramPlane,
  FaInstagram,
  FaRegClock,
} from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden bg-[url('/images/bakery-background.png')] bg-cover bg-center p-0 text-[#30201a] md:p-5">
      <EntranceMotion />
      <div
        data-motion="fade"
        data-duration="800"
        className="relative flex flex-col overflow-hidden bg-[#f8f0e7]/95 w-full min-h-dvh pb-3 min-[420px]:w-105 min-[420px]:min-h-0 rounded-none min-[420px]:rounded-[28px] shadow-none min-[420px]:shadow-[0_20px_50px_rgba(75,51,34,.24)]"
      >
        <div
          data-motion="drop"
          data-delay="100"
          className="relative z-10 flex flex-col items-center pb-10 rounded-b-[50%] bg-[#f8f0e7] shadow-sm"
        >
          <Image
            data-motion="pop"
            data-delay="220"
            className="w-32.5 h-32.5 mt-2 rounded-full transition-transform duration-300 hover:scale-[1.03]"
            src="/images/logo.png"
            alt="Logo"
            width={130}
            height={130}
            priority
          />
          <h1 className="font-serif text-3xl font-extrabold">
            Niso Bakery Cafe
          </h1>
          <Image
            className="h-auto w-25"
            src="/images/icon.png"
            alt="Icon"
            width={100}
            height={24}
          />
          <p className="">Har bir luqmada mehr va sifat</p>
        </div>
        <div
          data-motion="fade"
          data-delay="120"
          data-duration="1000"
          className="-mt-37"
        >
          <Image
            className="w-full h-55 object-cover"
            src="/images/bakery-hero.png"
            alt="Niso Bakery Cafe tort va pishiriqlari"
            width={430}
            height={220}
            priority
          />
        </div>

        <div className="px-5 relative -mt-12 flex flex-col gap-3">
          <a href="tel:+998930790408">
            <div
              data-motion="rise"
              data-delay="260"
              className="group bg-[#FAF4EE] w-full px-4 py-3 rounded-2xl cursor-pointer shadow-lg flex items-center justify-between transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-6">
                <div className="w-12.5 h-12.5 rounded-full text-white flex items-center justify-center bg-linear-to-br from-[#E6C99A] via-[#D9B074] to-[#C99852] transition-transform duration-300">
                  <FaPhoneAlt size={20} />
                </div>
                <div className="">
                  <p className="font-bold">Telefon</p>
                  <p className="text-[#d9a972] text-sm">+998 90 123 45 67</p>
                  <p className="text-[10px]">Qo'ng'iroq qilish</p>
                </div>
              </div>

              <FaChevronRight
                className="text-[#d9a972] transition-transform duration-300 group-hover:translate-x-1"
                size={24}
              />
            </div>
          </a>
          <a
            href="https://t.me/bbarotovv1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              data-motion="rise"
              data-delay="360"
              className="group bg-[#FAF4EE] w-full px-4 py-3 rounded-2xl cursor-pointer shadow-lg flex items-center justify-between transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-6">
                <div className="w-12.5 h-12.5 rounded-full text-white flex items-center justify-center bg-linear-to-br from-[#E6C99A] via-[#D9B074] to-[#C99852] transition-transform duration-300">
                  <FaTelegramPlane size={20} />
                </div>
                <div className="">
                  <p className="font-bold">Telegram</p>
                  <p className="text-[#d9a972] text-sm">@nisobakery</p>
                  <p className="text-[10px]">Telegram kanal</p>
                </div>
              </div>

              <FaChevronRight
                className="text-[#d9a972] transition-transform duration-300 group-hover:translate-x-1"
                size={24}
              />
            </div>
          </a>
          <a
            href="https://instagram.com/nisobakery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              data-motion="rise"
              data-delay="460"
              className="group bg-[#FAF4EE] w-full px-4 py-3 rounded-2xl cursor-pointer shadow-lg flex items-center justify-between transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-6">
                <div className="w-12.5 h-12.5 rounded-full text-white flex items-center justify-center bg-linear-to-br from-[#E6C99A] via-[#D9B074] to-[#C99852] transition-transform duration-300">
                  <FaInstagram size={20} />
                </div>
                <div className="">
                  <p className="font-bold">Instagram</p>
                  <p className="text-[#d9a972] text-sm">@nisobakerycafe</p>
                  <p className="text-[10px]">Instagram sahifamiz</p>
                </div>
              </div>

              <FaChevronRight
                className="text-[#d9a972] transition-transform duration-300 group-hover:translate-x-1"
                size={24}
              />
            </div>
          </a>

          <div
            data-motion="rise"
            data-delay="560"
            className="bg-[#FAF4EE] w-full px-4 py-2 mt-5 rounded-2xl shadow-lg flex items-center justify-center gap-6"
          >
            <div className="flex flex-col items-center text-sm border-r border-[#d9a972] pr-5 min-[408px]:pr-10">
              <FaRegClock className="text-[#d9a972] mb-1" size={20} />
              <p className="font-bold">Ish vaqti</p>
              <p className="text-[#d9a972] flex items-center gap-1">
                08:00 <FiMinus /> 23:00
              </p>
              <p className="text-gray-700">Har kuni</p>
            </div>
            <a
              href="https://maps.google.com/?q=39.755611,64.408083"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center text-sm">
                <IoLocationSharp className="text-[#d9a972] mb-1" size={20} />
                <p className="font-bold">Manzil</p>
                <p className="text-[#d9a972]">Buxoro shahri</p>
                <p className="text-[#d9a972]">Q. Murtazoyev ko'chasi, 210</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
