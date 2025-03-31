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
            nav.style.right = "0px";
            nav.style.transition = "all 0.2s ease-in-out";
        } else {
            nav.style.right = "-150px";
            nav.style.transition = "all 0.2s ease-in-out";
        }
    };
    return (
        <header className="z-[5] border-b-[0.3px] border-gray-700 w-[100vw] sticky top-0 flex justify-between items-center px-[10px] py-[5px] bg-[#fff] shadow-md md:px-[50px] xl:px-[100px]">
            <img className="relatve h-[45px] xl:h-[70px] translate-y-[4px] xl:translate-y-[5px]" src={logo} alt="Logo" />
            <div className="">
                <div className="">
                    <nav className="">
                       <button className = "flex justify-center items-center h-[35px] w-[35px] bg-[#e4e6ea] rounded-[5px] md:hidden" onClick={() => {
                            if (NavActive) {
                                NavShow();
                                setNavActive(false);
                            } else {
                                NavShow();
                                setNavActive(true);
                            }
                       }}>
                        <FontAwesomeIcon  className="text-[20px]" icon={faBars} />
                       </button>
                        <ul className="fixed right-[-150px] top-[55.3px] h-[calc(100vh)] bg-white md:static md:flex md:h-auto md:gap-[20px] xl:gap-[50p] xL:top-[80.3px]">
                            <li className="px-[10px] py-[6px] border-b-[0.3px] border-gray-300 md:border-b-0"><a className="font-['Roboto',_sans-serif] font-[500] text-[13px] xl:text-[18px]" href="#home">Home</a></li>
                            <li className="px-[10px] py-[6px] border-b-[0.3px] border-gray-300 md:border-b-0"><a className="font-['Roboto',_sans-serif] font-[500] text-[13px] xl:text-[18px]" href="#about">Explore</a></li>
                            <li className="px-[10px] py-[6px] border-b-[0.3px] border-gray-300 md:border-b-0"><a className="font-['Roboto',_sans-serif] font-[500] text-[13px] xl:text-[18px]" href="#services">About Us</a></li>
                            <li className="px-[10px] py-[6px] border-b-[0.3px] border-gray-300 md:border-b-0"><a className="font-['Roboto',_sans-serif] font-[500] text-[13px] xl:text-[18px]" href="#contact">Photo Album</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
