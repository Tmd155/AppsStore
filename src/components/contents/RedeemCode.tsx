"use client";
import Image from "next/image";

export default function RedeemCode() {
  return (
    <section
      className="w-full bg-cover bg-center flex justify-center py-12 text-white"
      style={{
        backgroundImage: "url('/images/rock.png')", 
      }}
    >
      <div className="w-full max-w-7xl h-80 flex flex-col md:flex-row items-center justify-between rounded-3xl bg-gradient-to-r from-[#4827d1] to-[#7443ff] p-8">
        {/* Text + Input */}
        <div className="flex-1 text-white space-y-4">
          <p className="text-sm font-semibold">Redeem code</p>
          <h2 className="text-4xl md:text-4xl font-bold leading-snug">
            Grant discounts and in-game bonuses to your players
          </h2>

          <div className="flex flex-row sm:flex-col items-start sm:items-right gap-4 pt-2">
            <input
              type="text"
              placeholder="Enter promo code"
              className="px-4 py-2 rounded text-black w-full sm:w-64 bg-[#CDCDCD]"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded w-full sm:w-64">
              Redeem Code
            </button>
          </div>
        </div>

        {/* Gift image */}
        <div className="w-96 mt-6 md:mt-0 md:ml-6">
          <Image
            src="/images/gift.png"
            alt="Gift"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
