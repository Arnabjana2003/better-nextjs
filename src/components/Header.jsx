"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";

const DropDown = ({item}) => {
    const [showDropDown,setDropDown] = useState(false)
  return (
    <li className="my-6">
      <div className="flex justify-between">
        <p>{item?.title || "title"}</p>
        <span onClick={()=>setDropDown(prev=>!prev)} className={`${showDropDown?"rotate-180":"rotate-0"} transition-all duration-500`}>
          <FaCaretDown size={20} />
        </span>
      </div>
      {showDropDown &&  <div>
        <ul className="ml-8">
            {item.subItems.map((subItem,index)=><li key={index} className="my-5"><Link href={subItem?.to}>{subItem?.label}</Link></li>)}
            
        </ul>
      </div>}
     
    </li>
  );
};

const navItems = [
  {
    title: "Buy",
    subItems: [
      {
        label: "Apply",
        to: "/apply",
      },
      {
        label: "Purchase Rates",
        to: "/purchase-rates",
      },
      {
        label: "Affordability calculator",
        to: "/affordability-calculator",
      },
      {
        label: "Mortgage calculator",
        to: "/mortgage-calculator",
      },
      {
        label: "Rent vs Buy calculator",
        to: "/mortgage-calculator",
      },
      {
        label: "Find an agent",
        to: "/mortgage-calculator",
      },
      {
        label: "Learning center",
        to: "/mortgage-calculator",
      },
    ],
  },
  {
    title: "Refinance",
    subItems: [
      {
        label: "Apply Now",
        to: "/apply-now",
      },
      {
        label: "Refinance Rates",
        to: "/apply-now",
      },
      {
        label: "Cash-out refinance calculator",
        to: "/apply-now",
      },
      {
        label: "Learing center",
        to: "/apply-now",
      },
    ],
  },
  {
    title: "HELOC",
    subItems: [
      {
        label: "Apply Now",
        to: "/apply-now",
      },
      {
        label: "Calculate your cash",
        to: "/apply-now",
      },
      {
        label: "HELOC vs cash-out refinance",
        to: "/apply-now",
      },
      {
        label: "Learning center",
        to: "/apply-now",
      },
    ],
  },
  {
    title: "Rates",
    subItems: [
      {
        label: "Purchase mortgage rates",
        to: "/apply-now",
      },
      {
        label: "Refinance rate",
        to: "/apply-now",
      },
      {
        label: "Refinance cash-out",
        to: "/apply-now",
      },
      {
        label: "HELOC rate",
        to: "/apply-now",
      },
      {
        label: "Purchase VA rate",
        to: "/apply-now",
      },
    ],
  },
  {
    title: "Better+",
    subItems: [
      {
        label: "Get Insurance",
        to: "/apply-now",
      },
      {
        label: "Title and Closing",
        to: "/apply-now",
      },
      {
        label: "Better  Attorney match",
        to: "/apply-now",
      },
      {
        label: "Learning Center",
        to: "/apply-now",
      },
    ],
  },
];
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [headerBg, setHeaderBg] = useState('bg-white');
  const pathname = usePathname();

  console.log(pathname)

  useEffect(() => {
    if (pathname === '/' || pathname === "/home") {
        setHeaderBg("bg-[#004733]")
        const handleScroll = () => {
            const targetSection = document.getElementById('stories');
            if (targetSection) {
              const sectionTop = targetSection.offsetTop;
              const scrollY = window.scrollY;
              if (scrollY >= sectionTop-30) {
                setHeaderBg('bg-white');
              } else {
                setHeaderBg('bg-[#004733]');
              }
            }
          };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setHeaderBg('bg-white');
    }
  }, [pathname]);
  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };
  const handleMouseLeave = (index) => {
    setActiveDropdown(null);
  };

  if(pathname == "/start"){
    return (
      <header className="bg-white">
       <div className="mx-16 ">
       <div className="flex justify-between items-center p-8">
          <Link href={"/"}>
            <h1 className="font-bold text-lg text-green-600 inline">Better</h1>
            <p className="text-slate-600">Mortgage</p>
          </Link>

          <div className="flex gap-3 items-center">
            <div className="p-2 rounded-full bg-green-200">
            <FaPhoneAlt size={20} color="green"/>
            </div>
            <p className="hidden lg:block">Need help? Call (415) 523 8837</p>
          </div>
        </div>


        <div className="w-full h-1 bg-slate-200 rounded-full relative">
          <Image src={"https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg"} width={216} height={216} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"/>
        </div>
       </div>
        </header>
    )
  }








  return (
    <div>
      <header className={`sticky top-0 z-20 transition-all ease-in-out duration-300 py-6 flex justify-between items-center ${headerBg.includes("white")?"text-black":"text-white"} px-2 md:px-5 ${headerBg}`}>
        <nav className="m-auto flex max-w-screen-2xl justify-between flex-grow">
          <ul className="flex items-center">
            <li className="text-2xl font-bold"><Link href={"/"}>Better</Link></li>
            {navItems.map((item, index) => (
              <li key={index} className="mx-5 hidden xl:block">
                <div
                  className="relative cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <p className="hover:bg-slate-100 hover:text-black py-3 px-4 rounded-3xl">
                    {item.title}
                  </p>
                  {activeDropdown == index && (
                    <div className="bg-white absolute top-full left-0 mt-1 w-72 rounded-md p-3 shadow-sm">
                      <ul>
                        {item.subItems.map((subItem) => (
                          <li
                            key={subItem}
                            className="p-3 hover:bg-slate-100 text-black rounded-md my-2"
                          >
                            <Link href={subItem.to} className="flex justify-between items-center"><p>{subItem.label}</p> <div className=""><FaArrowRight color="grey"/></div></Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-5 flex items-center gap-4">
          <button className="rounded-3xl border border-white p-2 md:p-3  hover:border-black hover:bg-slate-100 hover:text-black">
            <FaPhoneAlt size={20} />
          </button>
          <button className="hidden md:block hover:bg-slate-100 hover:text-black py-3 px-4 rounded-3xl">
            Sign in
          </button>
          <button className="lg:hidden" onClick={()=>setIsMenuOpen(true)}>
            <GiHamburgerMenu size={22} />
          </button>
        </div>
      </header>








      <div className={`w-screen h-screen fixed bg-white text-black z-30 top-0 right-0 bottom-0 p-10 transition-all duration-500 ${!isMenuOpen?"right-full":"right-0"}`}>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Better</h2>
          <span onClick={()=>setIsMenuOpen(false)}><RxCross2 size={30} /></span>
        </div>
        <div>
          <ul className="text-lg">
            {navItems.map((item,index)=><div key={index}><DropDown item={item}/></div>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
