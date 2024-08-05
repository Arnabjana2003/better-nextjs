import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  const betterData = [
    {
      title: "Mortgage",
      des: "We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.",
    },
    {
      title: "Real Estate",
      des: "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.",
    },
    {
      title: "Cover",
      des: "Shop, bundle, and save on insurance coverage for home, auto, life, and more.",
    },
    {
      title: "Settlement Services",
      des: "Get transparent rates when you shop for title insurance all in one convenient place.",
    },
  ];

  const resourceAndCompany = [
    {
        title:"Resources",
        data:["Home affordability calculator","Mortgage calculator","Free mortgage calculator","Mortgage calculator with taxes","Mortgage calculator with PMI","Rent vs buy calculator","HELOC payment calculator","HELOC vs cash-out refinance calculator","Buy a home","Sell a home","Get home inspection"]
    },
    {
        title:"Company",
        data:["About Us","Careers","Media","Partner With Us","Learning center","FAQs","Investor Relations"]
    }
  ]

  const contact = ["hello@better.com","415-523-8837","FAQ","Glossary"]
  const legal = ["NMLS Consumer Access","Privacy Policy","Terms of Use","Disclosures & Licensing","Affiliated Business",'Browser Disclaimer']

  const topFooterTexts = [
"1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.",
"2Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.",
" 3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value."
  ]
  const bottomFooterText  = [
    "© 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.",
    "Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access",
    "Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.",
    "New York State Fair Housing Notice",
    "New York Standard Operating Procedures",
    "Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice",
    "Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.",
    "Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC."
  ]
  return (
    <footer className="border-t-2 p-5 lg:p-10 lg:mx-10">
      <div>
        <h1 className="text-3xl font-bold text-green-700 my-5">Better</h1>
      </div>
      <div className="lg:flex gap-10">
        <div className="w-full lg:w-[40%]">
          <p className="text-slate-800">
            Better is a family of companies serving all your homeownership
            needs.
          </p>
          {betterData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex gap-3 my-2 items-center">
                <h4 className="text-xl font-bold text-green-700">Better</h4>
                <p className="text-xl font-semibold text-slate-400">
                  {item.title}
                </p>
              </div>
              <p className="text-wrap text-slate-800">{item.des}</p>
            </div>
          ))}
        </div>
        <div className="lg:flex gap-20">
            {resourceAndCompany.map(item=><div className="w-56">
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h4>
                {item.data.map((ele,index)=><p key={index} className="text-wrap text-slate-800 my-5 text-base transition-all duration-100 hover:underline underline-offset-2">{ele}</p>)}
            </div>)}
        </div>
        <div className="w-56">
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Contact Us</h4>
            {contact.map(item=><p key={item} className="text-wrap text-slate-800 my-5 text-base transition-all duration-100 hover:underline underline-offset-2">{item}</p>)}
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Legal</h4>
            {legal.map(item=><p key={item} className="text-wrap text-slate-800 my-5 text-base transition-all duration-100 hover:underline underline-offset-2">{item}</p>)}
        </div>
      </div>

      <div className="mt-48">
        <div className="flex gap-3">
            <FiFacebook size={25}/>
            <FaInstagram size={25}/>
            <FiLinkedin size={25}/>
        </div>

        <div className="mt-16">
            {topFooterTexts.map((text,index)=><p key={index} className="text-sm mb-5 font-light">{text}</p>)}
        </div>

        <hr/>
        <div className="mt-16">
            {bottomFooterText.map((text,index)=><p key={index} className="text-sm mb-5 font-light">{text}</p>)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
