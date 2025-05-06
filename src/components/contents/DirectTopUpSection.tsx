import Image from "next/image";

const topupItems = [
  {
    name: "Small Pack",
    icon: "/images/gem-small.png",
    amount: 20,
    price: "$9.99",
  },
  {
    name: "Medium Pack",
    icon: "/images/gem-medium.png",
    amount: 20,
    price: "$9.99",
  },
  {
    name: "Giant Pack",
    icon: "/images/gem-giant.png",
    amount: 20,
    price: "$9.99",
  },
  {
    name: "Enormous Pack",
    icon: "/images/gem-bag.png",
    amount: 20,
    price: "$9.99",
  },
];

export default function DirectTopUpSection() {
  return (
    <section
      className="w-full bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: "url('/images/cold.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-6">Direct Top-up</h2>

        {/* Promo Badge */}
        <div className="flex justify-center mb-10">
          <span className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm shadow-md">
            <span className="font-bold">+200%</span> &nbsp; Triple the value of the first purchase!
          </span>
        </div>

        {/* Pack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {topupItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2b0f0f] bg-opacity-90 rounded-2xl overflow-hidden border border-white/10 shadow-lg text-center py-6 flex flex-col items-center"
            >
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-4">{item.name}</h3>

              <div className="w-full px-6">
                <div className="flex justify-between items-center text-sm bg-[#3e2a2a] text-white rounded px-3 py-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Image src="/images/gem-icon.png" alt="Gem" width={16} height={16} />
                    <span>Gem</span>
                  </div>
                  <span>{item.amount}</span>
                </div>

                <div className="bg-red-600 rounded text-white text-sm font-semibold py-2 flex justify-between px-4 items-center">
                  <span>{item.price}</span>
                  <Image src="/images/globe-icon.png" alt="Buy" width={16} height={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
