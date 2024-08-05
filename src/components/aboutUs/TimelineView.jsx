"use client";

import React from "react";

let totalMsg = 0;
const timelineData = [
  {
    year: "2014",
    description:
      ["After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all."],
  },
  {
    year: "2015",
    description:
     [ "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)"],
  },
  {
    year: "2016",
    description:
     [ "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors"],
  },
  {
    year: "2017",
    description:
     [ "Better expands into the real estate market with Better Real Estate."],
  },
  {
    year: "2018",
    description:
     [ "Better Mortgage partners with Ally Bank to build Ally powered by Better."],
  },
  {
    year: "2019",
    description:
     [ "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers."],
  },
  {
    year: "2021",
    description:
     [ "Better acquires Trussle — The UK’s most innovative online mortgage broker."],
  },
  {
    year: "2022",
    description:
     [ "Better Mortgage becomes the first fintech to fund $100B home loans entirely online"],
  },
  {
    year: "2023",
    description:
     [ "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.","Better Mortgage launches the fully digital 3-day HELOC².","Better Mortgage launches One Day Verified Approval Letter."],
  },
  {
    year: "Today",
    description:
     [ "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers."],
  },
];

function TimelineView() {
  return (
    <div className="container mx-auto p-4 ">
      <div className="relative">
        <div
          className="border-r-4 border-gray-300 absolute h-full top-0"
          style={{ left: "50%" }}
        ></div>
        <div className="flex flex-col items-center justify-center">
          {timelineData.map((item, index) => (
            <div key={index} className="w-full relative">
              <div className="absolute left-1/2 -translate-x-1/2 z-10 px-6 py-2 bg-green-700 font-semibold text-2xl text-white rounded-full">{item.year}</div>
             {item.description.map((msg,idx)=>{
              ++totalMsg;
              return  <div key={totalMsg}
              className={`w-full md:w-[80%] mx-auto flex  ${
                totalMsg % 2 !== 0 ? "justify-start" : "justify-end"
              } items-center`}
            >
              <div className="w-[49%] p-4 mt-12">
                <div className="bg-slate-200 text-slate-600 p-8 rounded shadow">
                  <p>{msg}</p>
                  {item.year === "Today" && <button className="mt-5 px-3 md:px-6 py-1 md:py-3 bg-green-700 rounded-md text-white font-semibold">Get Started</button>}
                </div>
              </div>
            </div>
             })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimelineView;
