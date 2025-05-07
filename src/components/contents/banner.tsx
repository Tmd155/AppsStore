import Image from 'next/image';
import { ShieldCheck, Lock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="w-full bg-cover bg-center py-12 text-white"
      style={{
        backgroundImage: "url('/images/green.png')", 
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Welcome to <span className="text-white">Apps Store</span>
        </h1>

        <div className="bg-[#2b0f0f] bg-opacity-90 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="">
            <h2 className="text-3xl font-extrabold mb-2">Get +20% more!</h2>
            <p className="mb-4 text-gray-300">
              Offer extra discount to players on Web Shop purchases.
            </p>

            <div className="flex items-center gap-4 mb-6 text-sm font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck size={16} /> Official Store
              </span>
              <span className="flex items-center gap-1">
                <Lock size={16} /> Secure Payments
              </span>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md">
              VIEW OFFERS
            </button>
          </div>

          {/* Right image */}
          
        </div>
        
      </div>
      <div className="absolute right-100 top-40">
          <Image
            src="/images/spell.png" 
            alt="Promo Items"
            width={192}
            height={376}
            // layout="fill"
            // objectFit="contain"
            // className="w-full h-full"
          />
      </div>
    </section>
  );
}