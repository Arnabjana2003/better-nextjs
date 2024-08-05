"use client";

import React, { useEffect, useState } from "react";
import InputRange from "@/components/InputRange";
import { FaCaretDown } from "react-icons/fa";
import PaymentBreakDown from "@/components/calculator/PaymentBreakDown";
import Image from "next/image";
import { calculateEMI } from "@/helperFunctions";

const Heading = ({ text }) => {
  return (
    <h4 className="mt-5 text-2xl md:text-3xl font-semibold text-slate-800 my-5">
      {text}
    </h4>
  );
};

const DescText = ({ text }) => {
  return <p className="text-slate-500 my-5 leading-normal">{text}</p>;
};

function Calculator() {
  const [pricingData,setPricingData] = useState({
    homePrice:160000,
    downPayment: 50000,
    interestRate:6.5,
    length:30,
    zipCode:700001,
  })
  const [actualEmi,setActualEmi] = useState(0)
  useEffect(()=>{
    const emi = calculateEMI({principal:pricingData.homePrice - pricingData.downPayment,annualInterestRate:pricingData.interestRate,tenureInYears:pricingData.length})
    console.log({emi})
    setActualEmi(emi)
  },[pricingData])
  const [showLengthOption,setShowLengthOption] = useState(false)
  const [monthlyData,setMonthlyData] = useState({
  
    "Property taxes": {
      value: 55,
      color: "#6e4cf6",
      des: "loremfdfsf gsfd wrtrty etebr vrvyteryr rbtyv",
    },
    "Homeowners insurance": {
      value: 132,
      color: "#8e8eeb",
      des: "loremfdfsf gsfd wrtrty etebr vrvyteryr rbtyv",
    },
    "HOA fees": {
      value: 132,
      color: "#ffd566",
      des: "loremfdfsf gsfd wrtrty etebr vrvyteryr rbtyv",
    },
    Utilities: {
      value: 100,
      color: "#fe8b72",
      des: "loremfdfsf gsfd wrtrty etebr vrvyteryr rbtyv",
    },
  })

  const [monthlyEMI,setMonthlyEMI] = useState(0)
  useEffect(()=>{
    let totalEmi = 0;
    Object.values(monthlyData).forEach((obj,index)=>{
      totalEmi += Number(obj.value)
    })
    setMonthlyEMI(totalEmi + actualEmi)
  },[monthlyData,actualEmi])
  return (
    <div>
      {/* =========first part-------------- */}
      <div className="bg-slate-100 p-8 md:p-16 text-slate-800">
        <div className="md:w-[60%]">
          <h1 className="text-3xl md:text-5xl font-semibold my-8">
            Mortgage calculator
          </h1>
          <p className="">
            Use our mortgage calculator built directly into it! Get accurate
            estimates for your monthly mortgage payments if you will be required
            to have private mortgage insurance (PMI) Also learn why
          </p>
        </div>

        <div className="mt-10 flex items-end justify-between">
          <div className="">
            <p className="font-bold mb-5">Home Price</p>
            <div className="relative hover:border-green-700 transition-all border border-slate-500 hover:border-4 p-1 hover:p-0 rounded-lg">
              <input
                id="price"
                type="number"
                onChange={(e)=>setPricingData({...pricingData,homePrice:Number(e.target.value)})}
                value={pricingData.homePrice}
                className="w-40 md:w-64 text-xl md:text-3xl p-3 pl-10 rounded-xl font-bold outline-none bg-transparent"
              />
              <span className="absolute top-1/2 left-2 text-4xl font-semibold -translate-y-1/2">
                $
              </span>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 md:mb-5 lg:mb-7">Monthly Payment</p>
            <p className="text-2xl mdtext-3xl lg:text-5xl font-semibold my-6">${Math.floor(monthlyEMI)}/mo</p>
          </div>

          <div className="hidden md:block">
            <button className="px-6 md:px-8 py-3 md:py-5 font-medium rounded-lg bg-green-800 text-white">
              Get Pre-approved
            </button>
          </div>
        </div>

{/* ==========range========= */}
        <div className="my-10 ">
          <InputRange onChange={(val) => setPricingData({...pricingData,homePrice:Number(val)})} value={pricingData.homePrice} />
        </div>

        <div className="md:hidden">
            <button className="w-full h-16 font-medium rounded-lg bg-green-800 text-white">
              Get Pre-approved
            </button>
          </div>

        <div className="hidden md:block lg:flex flex-wrap justify-between">
          <div className="flex gap-6 mb-5">
            <div className="w-64">
              <div className="relative bg-white p-2 hover:border-green-700 transition-all border border-slate-500 hover:border-4 hover:p-1 rounded-lg">
                <p className="text-xs text-slate-400">ZIP Code</p>
                <input
                  id="price"
                  type="number"
                  value={pricingData.zipCode}
                  onChange={e=>setPricingData({...pricingData,zipCode:e.target.value})}
                  className="w-40 md:w-64 text-lg rounded-lg outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex">
              <div className="w-44 relative bg-white p-2 hover:border-green-700 transition-all border border-slate-500 hover:border-4 hover:p-1 rounded-lg rounded-e-none">
                <p className="text-xs text-slate-400">Down payment</p>
                <input
                  type="number"
                  onChange={e=>setPricingData({...pricingData,downPayment:Number(e.target.value)})}
                  value={pricingData.downPayment}
                  className="w-full text-lg rounded-lg outline-none bg-transparent pl-5"
                />
                <span className="text-lg font-bold absolute top-1/2 -translate-y-[20%] left-2">
                  $
                </span>
              </div>
              <div className="w-28 rounded-s-none rounded-lg hover:border-green-700 hover:border-4 transition-all border border-s-0 bg-white relative border-slate-500">
                <input
                  type="number"
                  onChange={e=>setPricingData({...pricingData,downPayment:pricingData.downPayment*Number(e.target.value)/100})}
                  value={Math.floor(pricingData.downPayment*100/pricingData.homePrice)}
                  max={99}
                  min={1}
                  className="w-full text-lg rounded-lg rounded-s-none outline-none bg-transparent pl-5 border h-full text-start"
                />
                <span className="absolute text-lg top-1/2 -translate-y-1/2 right-5 font-bold">
                  %
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mb-5">

            <div className="w-64">
              <div className="relative bg-white p-2 hover:border-green-700 transition-all border border-slate-500 hover:border-4 hover:p-1 rounded-lg">
                <p className="text-xs text-slate-400">Interest rate</p>
                <input
                  onChange={e=>setPricingData({...pricingData,interestRate:Number(e.target.value)})}
                  value={pricingData.interestRate}
                  type="number"
                  className="w-40 md:w-64 text-lg rounded-lg outline-none bg-transparent px-2 text-black "
                />
                <span className="text-xl font-bold top-1/2 -translate-y-[20%] right-3 absolute">
                  %
                </span>
              </div>
            </div>

            <div className="w-64 relative bg-white p-2 hover:border-green-700 transition-all border border-slate-500 hover:border-4 hover:p-1 rounded-lg">
              <p className="text-xs text-slate-400">Length of loan</p>
              <p className="font-semibold" onClick={()=>setShowLengthOption(prev=>!prev)}>{pricingData.length} years</p>
              <span className="absolute top-1/2 -translate-y-1/2 right-2" onClick={()=>setShowLengthOption(prev=>!prev)}>
                <FaCaretDown />
              </span>

              {showLengthOption && <div className="absolute top-full mt-2 left-0 right-0 shadow-md rounded w-full bg-white">
                <p className="p-1 hover:bg-blue-500 hover:text-white" style={{backgroundColor:pricingData.length == 30 ? "skyblue":null}} onClick={()=>{setPricingData({...pricingData,length:30}); setShowLengthOption(false)}}>
                  30 years
                </p>
                <p className="p-1 hover:bg-blue-500 hover:text-white" style={{backgroundColor:pricingData.length == 20 ? "skyblue":null}} onClick={()=>{setPricingData({...pricingData,length:20}); setShowLengthOption(false)}}>
                  20 years
                </p>
                <p className="p-1 hover:bg-blue-500 hover:text-white" style={{backgroundColor:pricingData.length == 15 ? "skyblue":null}} onClick={()=>{setPricingData({...pricingData,length:15}); setShowLengthOption(false)}}>
                  15 years
                </p>
              </div>}
            </div>
          </div>
        </div>
      </div>

      {/* ------------payment breakdown------------- */}
      <section className="p-5">
        <div className="md:flex">
          <div className="w-full md:w-[45%]">
            <PaymentBreakDown
              data={{"Principal & interest":{value:actualEmi,color:"#017848",des:"dggfd"},...monthlyData}}
            />
          </div>

          <div className="flex-grow mt-4 p-4">
          <div
                className="flex justify-between items-center my-5"
              >
                 <div className="flex gap-2">
                  <div
                    className="w-2 h-4 rounded-full bg-[#017848]"
                  ></div>
                  <h6>Principal & interest</h6>
                </div>
          <p className="font-semibold text-lg mb-5">$ {actualEmi}</p>
              </div>
            {Object.keys(monthlyData).map((elem, index) => (
              <div
                key={index}
                className="flex justify-between items-center my-5"
              >
                <div className="flex gap-2">
                  <div
                    className="w-2 h-4 rounded-full"
                    style={{ backgroundColor: monthlyData[elem].color }}
                  ></div>
                  <h6>{elem}</h6>
                </div>
                <div>
                    <div className="w-44 relative bg-white p-2 hover:border-green-700 transition-all border border-slate-500 hover:border-4 hover:p-1 rounded-lg font-semibold ">
                      <input
                        type="number"
                        onChange={(e)=>{setMonthlyData({...monthlyData,[elem]:{...monthlyData[elem],value:Number(e.target.value)}});console.log({...monthlyData,[elem]:{...monthlyData[elem],value:Number(e.target.value)}},{monthlyEMI}); }}
                        value={monthlyData[elem].value}
                        className="w-full text-lg rounded-lg outline-none bg-transparent pl-5 text-end p-2"
                      />
                      <span className="text-lg absolute top-1/2 -translate-y-1/2 left-2">
                        $
                      </span>
                    </div>
                </div>
              </div>
            ))}

            <button className="px-10 py-5 font-medium rounded-md bg-slate-200">
              Copy estimate link
            </button>
          </div>
        </div>
      </section>

      {/* ========================== */}

      <section className="p-14">
        <hr />
        <div className="mt-8">
          <Heading text={"How does a mortgage calculator help me?"} />
          <DescText
            text={
              "Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers."
            }
          />
          <Heading text={"Formula for calculating monthly mortgage payments"} />
          <DescText
            text={
              "The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:"
            }
          />
          <div className="mx-auto w-full md:w-[65%] text-slate-800">
            <Image
              src={
                "https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-formula.jpg"
              }
              width={400}
              height={80}
              className="w-full my-2"
            />
            <p>Where:</p>
            <ol className="px-8 list-disc w-full md:w-[70%]">
              <li className="my-5">
                <b>M</b> is monthly mortgage payments
              </li>
              <li className="my-5">
                <b>P</b> is the principal loan amount (the amount you borrow)
              </li>
              <li className="my-5">
                <b>r</b> is the monthly interest rate (annual interest rate
                divided by 12 and expressed as a decimal) For example: if the
                annual interest rate is 5%, the monthly rate would be 0.05/12 =
                .00417, or .417%
              </li>
              <li className="my-5">
                <b>n</b> is the total number of payments in months For example:
                for a 30-year loan, n = 30×12 = 360 months
              </li>
            </ol>
            <p>Here’s a simple example:</p>
            <Image
              src={
                "https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-example.jpg"
              }
              width={400}
              height={80}
              className="w-full my-2"
            />
          </div>
          <DescText
            text={
              "This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable."
            }
          />
          <hr />
          <Heading text={"How to use this mortgage calculator?"} />
          <DescText
            text={
              "Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees."
            }
          />
          <DescText
            text={
              "The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator."
            }
          />

          <Heading text={"Do you know your property tax rate?"} />
          <DescText
            text={
              "While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from Forbes breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:"
            }
          />
{/* --------table----------- */}
          <div className="my-10">
            <div
              class="relative pointer group w-full h-full overflow-scroll"
              tabindex="0"
            >
              <table class="min-w-full border border-successAccent table-auto clip-inset-round">
                <thead class="">
                  <tr>
                    <th class="border border-strokeInverseBorder text-center bg-[#017848] px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-white font-bold">
                        State
                      </p>
                    </th>
                    <th class="border border-strokeInverseBorder text-center bg-[#017848] px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-white font-bold">
                        Median Effective Property Tax Rate
                      </p>
                    </th>
                    <th class="border border-strokeInverseBorder text-center bg-[#017848] px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-white font-bold">
                        Mean Effective Property Tax Rate
                      </p>
                    </th>
                    <th class="border border-strokeInverseBorder text-center bg-[#017848] px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-white font-bold">
                        Median Home Value
                      </p>
                    </th>
                    <th class="border border-strokeInverseBorder text-center bg-[#017848] px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-white font-bold">
                        Median Property Taxes Paid
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="even:bg-successBackground">
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AL
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.41%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.40%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $157,100
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $646
                      </p>
                    </td>
                  </tr>
                  <tr class="even:bg-successBackground">
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AK
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        1.23%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        1.04%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $282,800
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $3,464
                      </p>
                    </td>
                  </tr>
                  <tr class="even:bg-successBackground">
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AZ
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.62%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.63%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $265,600
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $1,648
                      </p>
                    </td>
                  </tr>
                  <tr class="even:bg-successBackground">
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AR
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.62%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.64%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $142,100
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $878
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="hidden md:group-hover:block absolute w-full h-full bg-black opacity-25 top-0 left-0"></div>
              <button class="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-xl h-3xl w-auto hidden md:group-hover:block left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 absolute">
                See all
              </button>
            </div>
          </div>

          <hr/>
          <Heading text={"How is Better’s mortgage calculator different?"}/>
          <DescText text={"The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority."}/>
          <DescText text={"Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed."}/>
          <DescText text={"Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator."}/>
      <Heading text={"This mortgage calculator shows your mortgage costs with PMI"}/>
          <DescText text={"PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator."}/>
          <DescText text={"Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989."}/>
      <Heading text={"This mortgage calculator includes HOA fees"}/>
          <DescText text={"Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs."}/>
          <DescText text={"Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time."}/>
        </div>
      </section>
    </div>
  );
}

export default Calculator;
