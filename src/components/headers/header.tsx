import { Search, HelpCircle, Ticket, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black text-white flex items-center justify-between px-4 py-2 shadow-md">
      {/* Logo + Title */}
      <div className="flex items-center space-x-2">
        <Image src="/images/store_logo.png" alt="Logo" width={151} height={44} />
        {/* Menu items */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <div className="flex items-center space-x-1">
            <Smartphone size={16} />
            <span>Direct Top up</span>
          </div>
          <div className="flex items-center space-x-1">
            <Ticket size={16} />
            <span>Voucher</span>
          </div>
          <div className="flex items-center space-x-1">
            <HelpCircle size={16} />
            <span>Support</span>
          </div>
        </nav>
      </div>

      {/* Search + Login */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center bg-white rounded-md px-2 py-1">
          <input
            type="text"
            placeholder="Fortnight: Sabrina"
            className="outline-none text-black placeholder-gray-400 px-2 bg-transparent"
          />
          <Search size={18} className="text-black" />
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm font-semibold">
          Log in
        </button>

        <Image src="/images/Country.png" alt="English" width={24} height={16} />
      </div>
    </header>
  );
}
