import Image from 'next/image';

const vouchers = [
  {
    title: 'VNG Games Sales',
    description: 'Using Apps Store coin to buy VNG with half price',
    originalPrice: '$23',
    salePrice: '$12.44',
    image: '/images/voucher1.png',
  },
  {
    title: 'Pokemon Scarlet/Violet',
    description: 'Receive Koraidon/Miraidon when buying by Apps Store',
    originalPrice: '$23',
    salePrice: '$12.44',
    image: '/images/voucher2.png',
  },
  {
    title: 'Sleep Pokemon',
    description: 'Using Apps Store coin to buy VNG with half price',
    originalPrice: '$23',
    salePrice: '$12.44',
    image: '/images/voucher3.png',
  },
];

export default function VoucherSection() {
  return (
    <section
      className="w-full bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: "url('/images/rock.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-6">Voucher</h2>

        {/* Promo badge */}
        <div className="flex justify-center items-center mb-10">
          <span className="bg-red-600 text-white font-semibold px-4 py-2 rounded-2xl text-sm shadow-md flex items-center">
            <div className="flex items-center">
            <span className="text-black font-bold bg-[#FFFFFF] rounded-xl text-xs p-2 flex items-center">+200%</span> &nbsp; Triple the value of the first purchase!
            </div>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vouchers.map((v, idx) => (
            <div
              key={idx}
              className="bg-[#2b0f0f] bg-opacity-90 rounded-2xl overflow-hidden border border-white/10 shadow-lg px-4 py-2"
            >
              <div className="relative w-full h-48">
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-1">{v.title}</h3>
                <p className="text-gray-300 text-xl mb-4">{v.description}</p>
                <div className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md text-center text-sm">
                  <span className="line-through mr-2 text-base">{v.originalPrice}</span>
                  <span className="mr-2 text-base">{v.salePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
