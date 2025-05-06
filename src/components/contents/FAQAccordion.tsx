"use client";
import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const faqData = [
  {
    question: "How does purchasing on Apps Store benefit your players?",
    answer:
      "In Apps Store, players can purchase game items at lower prices, find some special offers, and claim free rewards. Moreover, there’s a variety of payment options available, allowing your players to choose the most convenient one for their purchases.",
  },
  {
    question: "Is it safe to purchase on Apps Store?",
    answer:
      "Web Store which refers to the highest level of compliance with the Payment Card Industry Data Security Standard. Therefore, all payments made on Web Shop are completely secure.",
  },
  {
    question: "What payment methods does Apps Store support?",
    answer:
      "Web Store currently accepts payments via most popular credit/debit card brands and digital wallets. All available payment options can be viewed on the payment page.",
  },
  {
    question: "Who can help your players with purchase issues?",
    answer: "Who can help your players with purchase issues?",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: "url('/images/green.png')" }}
    >
      <div className="py-12 px-4 text-white max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-700 mb-4 bg-[#2f0b06] p-4"
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center text-left text-lg font-semibold ${
                openIndex === index ? "text-white" : "text-gray-300"
              }`}
            >
              <span>{item.question}</span>
              <ChevronUpIcon
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm text-gray-300">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
