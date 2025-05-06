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
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between rounded-3xl bg-gradient-to-r from-[#4827d1] to-[#7443ff] p-8">
        {/* Text + Input */}
        <div className="flex-1 text-white space-y-4">
          <p className="text-sm font-semibold">Redeem code</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Grant discounts and in-game bonuses to your players
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pt-2">
            <input
              type="text"
              placeholder="Enter promo code"
              className="px-4 py-2 rounded text-black w-full sm:w-64"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded w-full sm:w-auto">
              Redeem Code
            </button>
          </div>
        </div>

        {/* Gift image */}
        <div className="mt-6 md:mt-0 md:ml-6">
          <Image
            src="/images/gift.png"
            alt="Gift"
            width={200}
            height={200}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}
