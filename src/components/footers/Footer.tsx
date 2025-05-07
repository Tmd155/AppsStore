import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* ORDER */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-3 text-2xl">ORDER</h3>
          <ul className="space-y-1 text-xl text-gray-300">
            <li><a href="#">Return & Refund Policy</a></li>
            <li><a href="#">Cancellation/Order Change</a></li>
            <li><a href="#">DMCA</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-3 text-2xl">RESOURCES</h3>
          <ul className="space-y-1 text-xl text-gray-300">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* CUSTOMERS */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-3 text-2xl">CUSTOMERS</h3>
          <ul className="space-y-1 text-xl text-gray-300">
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Store Examples</a></li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="col-span-2 md:col-span-1">
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 mb-3">
            CONTACT US
          </button>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">X</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-8">
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <Image src="/images/store_logo.png" alt="Logo" width={268} height={78} />
        </div>
        <p>© 2025 HABB<span className="tracking-tight">Y</span> PTE. LTD. All Rights Reserved. 
          <span className="ml-2 underline"><a href="#">Privacy Policy</a></span> | 
          <span className="ml-1 underline"><a href="#">Cookie Settings</a></span>
        </p>
      </div>
    </footer>
  );
}
