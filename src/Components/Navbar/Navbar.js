import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { GiFlamedLeaf } from "react-icons/gi";
// import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
    const Menubar = () => {
      setIsOpen(!isOpen);
    };
    let Links =[
      {name:"Home",link:"#Home"},
      {name:"About",link:"#About"},
      {name:"OurMenu",link:"#Menu"},
      {name:"Reviews",link:"#Reviews"},
      {name:"Contact",link:"#Contact"},
    ];
  
    return (
      <div className=" grid place-items-center">
        <nav className=" bg-black bg-opacity-50 z-50 md:flex items-center justify-between rounded-2xl  text-white top-0 mt-7 p-3 w-[80%] fixed">
        <div className="container mx-auto py-3">
          <div className="flex w-full z-50 justify-between">
            <a href="/" className="text-xl flex  ml-3 font-bold no-underline  gap-2"><GiFlamedLeaf className="w-[30px] h-[30px] "/>Cafe</a><div onClick={Menubar} className="text-3xl right-8 top-6 cursor-pointer lg:hidden"><TiThMenu className='' /></div>
          </div>
        </div>
        
        <ul className={`hidden  lg:flex md:items-center lg:justify-center md:-pb-0 `}>
          {
            Links.map((link)=>(
              <li key={link} className="lg:ml-8 !scroll-smooth text-lg lg:my-0 my-7">
                <a href={link.link} className="hover:text-orange-400 duration-500">{link.name}</a>
                {/* <Link href={link.link} smooth={true} offset={-100} duration={500} className="hover:text-orange-400 cursor-pointer duration-500">{link.name}</Link> */}
              </li>
            ))
          }
          <button className="bg-transparent border-2 hover:bg-orange-400 px-4  rounded-xl ml-8">Reservation</button>
        </ul>
        {/* Mobile Menu */}
        <div className={isOpen ? "bg-black opacity-50  rounded-2xl w-[76%] h-[50%] fixed bottom-0 top-[17%] transition-all duration-700 " : "fixed top-0 -left-full transition-all "}>
        <ul className={`flex items-start ml-4 flex-col w-full justify-center -pb-0 my-4 `}>
          {
            Links.map((link)=>(
              <li key={link} className="  text-lg z-50 font-bold  my-3">
                <a href={link.link} className="hover:text-orange-400  duration-500">{link.name}</a>
              </li>
            ))
          }
          <button className="bg-transparent border-2 hover:bg-orange-400 px-4  rounded-xl ml-8">Reservation</button>
        </ul>
        </div>
        </nav>
      </div>
    )
  };
  
  export default Navbar;
