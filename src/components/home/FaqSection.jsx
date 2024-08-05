"use client"

import React, { useState } from "react";
import SquarCard from "./SquarCard";
import RectangleCard from "./RectangleCard";
import Link from "next/link";

function FaqSection() {
  const [activeTab, setActiveTab] = useState(0);
  const data = [
    [
      {
        squarCard: {
          link: "/",
          title: "Buying your first home with Better",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/first-home.webp",
        },
        rectangleCard: {
          link: "/",
          title: "One Day Mortgage",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis, error libero enim dicta alias amet quas quisquam necessitatibus fugit.",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp",
        },
      },
      {
        squarCard: {
          link: "/",
          title: "Insurance",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/insurance.webp",
        },
        rectangleCard: {
          link: "/",
          title: "Better HELOC",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis, error libero enim dicta alias amet quas quisquam necessitatibus fugit.",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/better-heloc.webp",
        },
      },
    ],
    [
      {
        squarCard: {
          link: "/",
          title: "Mortgage Calculator",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp",
        },
        rectangleCard: {
          link: "/",
          title: "Affordability calculator",
          description:
            "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp",
        },
      },
      {
        squarCard: {
          link: "/",
          title: "Fixed-rate loan comparison calculator",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp",
        },
        rectangleCard: {
          link: "/",
          title: "HELOC calculator",
          description:
            "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/heloc-calculator.webp",
        },
      },
    ],
    [
      {
        squarCard: {
          link: "/",
          title: "What is good debt-to-income ratio for a home loan ?",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/good-dti.webp",
        },
        rectangleCard: {
          link: "/",
          title: "Buy a house without realtor",
          description:
            "Thinking about buying a house without a real estate agent? Read this first.",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/buy-house-without-realtor.webp",
        },
      },
      {
        squarCard: {
          link: "/",
          title: "Conventional loan requirements",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp",
        },
        rectangleCard: {
          link: "/",
          title: "Timeline for homebuying process",
          description:
            "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
          imageLink:
            "https://media.better.com/better-com/homepage/learning-center/loan-timeline.webp",
        },
      },
    ],
  ];
  return (
    <section className="mt-1 p-10">
      <div className="md:flex justify-between items-end">
        <h2 className="text-5xl font-semibold">
          Got questions?
          <br />
          We've got answers
        </h2>
        <div className="flex gap-5">
          <button
            className={`md:px-6 md:py-3 border rounded-3xl hover:border-green-800 hover:border-4 transition-all duration-150  ${
              activeTab === 0 ? "border-4 border-green-900 " : "border-slate-300 hover:px-5 hover:py-2"
            }`}
            onClick={() => setActiveTab(0)}
          >
            Our products
          </button>
          <button
            className={`md:px-6 md:py-3 border rounded-3xl hover:border-green-800 hover:border-4 transition-all duration-150  ${
              activeTab === 1 ? "border-4 border-green-900 " : "border-slate-300 hover:px-5 hover:py-2"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Calculators
          </button>
          <button
            className={`md:px-6 md:py-3 border rounded-3xl hover:border-green-800 hover:border-4 transition-all duration-150  ${
              activeTab === 2 ? "border-4 border-green-900 " : "border-slate-300 hover:px-5 hover:py-2"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Guide & FAQs
          </button>
        </div>
      </div>

      <div className="mt-16">
        <div className="w-full flex flex-col md:flex-row  gap-5 items-center h-auto md:h-[22rem] my-8">
          <Link
            href={data[activeTab][0].squarCard.link}
            className="w-full md:w-1/3 h-full "
          >
            <SquarCard data={data[activeTab][0].squarCard} />
          </Link>
          <Link
            href={data[activeTab][0].rectangleCard.link}
            className="w-full md:w-2/3 h-full"
          >
            <RectangleCard
              flex="md:flex-row"
              data={data[activeTab][0].rectangleCard}
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center h-auto md:h-[22rem] my-8">
          <Link
            href={data[activeTab][0].rectangleCard.link}
            className="w-full md:w-2/3 h-full"
          >
            <RectangleCard
              flex="md:flex-row-reverse"
              data={data[activeTab][1].rectangleCard}
            />
          </Link>
          <Link
            href={data[activeTab][0].squarCard.link}
            className="w-full md:w-1/3 h-full"
          >
            <SquarCard data={data[activeTab][1].squarCard} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
