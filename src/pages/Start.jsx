import { sgvs } from "@/components/start/sgvs";
import React from "react";
import { AiOutlineDollar } from "react-icons/ai"
import { FaMobileAlt } from "react-icons/fa";

function Start() {
  return (
    <div className="mt-10 p-5 text-slate-800">
      <div>
        <h3 className="text-3xl font-semibold text-center mt-16">
          Hi, I'm Betty!
          <br />
          What can I help you with?
        </h3>
      </div>


      <div className="w-full max-w-[33rem] mt-8 mx-auto">
        <div className="font-medium hover:text-[#017848] flex gap-5 items-center py-4 px-10 border border-slate-500 hover:border-4 hover:py-3 hover:px-9 hover:border-[#017848] rounded-md my-5">
            {sgvs.sgv1}
            <p>Buying a home</p>
        </div>
        <div className="font-medium hover:text-[#017848] flex gap-5 items-center py-4 px-10 border border-slate-500 hover:border-4 hover:py-3 hover:px-9 hover:border-[#017848] rounded-md my-5">
            {sgvs.sgv2}
            <p>Refinance my mortgage</p>
        </div>
        <div className="font-medium hover:text-[#017848] flex gap-5 items-center py-4 px-10 border border-slate-500 hover:border-4 hover:py-3 hover:px-9 hover:border-[#017848] rounded-md my-5">
            {sgvs.sgv3}
            <p>Get cash from my home</p>
        </div>

        <div className="flex gap-8 mt-16">
        <div className="w-1/2 text-center">
                <p className="text-2xl md:text-3xl font-semibold my-4">$100B</p>
                <p className="text-slate-600">home loans funded entirely online</p>
        </div>
        <div className="w-1/2 text-center">
                <p className="text-2xl md:text-3xl font-semibold my-4">400K</p>
                <p className="text-slate-600">Customers who chose a Better Mortgage</p>
        </div>
        </div>

        <div className="text-center w-full rounded-md bg-slate-100 mt-20 p-2 md:p-5 mb-36">
            <p>After a few questions, you'll unlock:</p>
            <div className="mx-auto w-1/2 mt-2 text-slate-700">
            <p className="flex items-center gap-4 my-3">{sgvs.svg4}Custom mortgage rates</p>
            <p className="flex items-center gap-4 my-3">{<AiOutlineDollar size={20} color="green"/>}Exclusive offers</p>
            <p className="flex items-center gap-4 my-3">{<FaMobileAlt size={20} color="green"/>}A personalized dashboard</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
