import logo from "../assets/img/header/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { counter, library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
library.add(faBars);
function Header() {
    const [NavActive, setNavActive] = useState(true);
    const NavShow = () => {
        const nav = document.querySelector("nav ul");
        if (NavActive) {
            nav.style.right = "-10px";
            nav.style.transition = "all 0.5s ease-in-out";
        } else {
            nav.style.right = "-50vw";
            nav.style.transition = "all 0.5s ease-in-out";
        }
    };
    return (
        <header className="max-ms:border-b-[0.5px] max-ms:border-gray w-[100vw] fixed max-ms:relative max-ms:h-[53px] max-lg:h-[59px] h-[80px] flex max-ms:items-start max-ms:pt-[10px] max-md:px-[10px] items-center bg-white justify-between px-[88px]">
            <img className="max-ms:h-[40px] max-lg:h-[50px] h-[71px]" src={logo} alt="Logo" />
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <nav className="ml-4 max-ms:fixed max-ms:right-[10px] max-ms:translate-y-[-50%]  max-ms:top-[27px]">
                       <button onClick={() => {
                            if (NavActive) {
                                NavShow();
                                setNavActive(false);
                            } else {
                                NavShow();
                                setNavActive(true);
                            }
                       }} className="w-[30px] h-[30px] flex items-center justify-center  bg-[#e4e6ea] md:fixed md:top-[-1000px] rounded-[5px]">
                        <FontAwesomeIcon  className="text-[18px]" icon={faBars} />
                       </button>
                        <ul className="bg-white max-md:right-[-50vw] max-md:fixed max-md:h-[100vh] max-md:block flex space-x-[50px] max-md:top-[59px]">
                            <li className="max-ms:w-[100%]"><a className=" pl-[10px] font-['Roboto', sans-serif] text-[18px] max-ms:p-y-[50px] max-lg:text-[12px] leading-[21px] lg:font-[500]" href="#home">Home</a></li>
                            <li className="max-ms:w-[100%] max-ms:border-t-[0.5px] max-ms:border-gray-300 "><a className="pl-[10px] font-['Roboto', sans-serif] text-[18px] max-ms:p-y-[50px] max-lg:text-[12px] leading-[21px] lg:font-[500]" href="#about">Explore</a></li>
                            <li className="max-ms:w-[100%] max-ms:border-t-[0.5px] max-ms:border-gray-300 "><a className="pl-[10px] font-['Roboto', sans-serif] text-[18px] max-ms:p-y-[50px] max-lg:text-[12px] leading-[21px] lg:font-[500]" href="#services">About Us</a></li>
                            <li className="max-ms:w-[100%] max-ms:border-t-[0.5px] max-md:border-gray-300 "><a className="pl-[10px] font-['Roboto', sans-serif] text-[18px] max-md:p-y-[50px] max-lg:text-[12px] leading-[21px] lg:font-[500]" href="#contact">Photo Album</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
