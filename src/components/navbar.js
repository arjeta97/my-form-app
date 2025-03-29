import React from "react";
import logo from "../assets/logo.png";
import phone from "../assets/phone-icon.svg";

const NavBar = () => {


    return (
        <div className="border-b border-[#cecece] w-full px-[20px] md:px-0">
            <div className="flex justify-between py-4 flex-wrap mx-auto max-w-[1360px]">
                <a href="/">                
                    <img src={logo} alt="logo"></img>
                </a>
                <div className="flex text-blu content-center flex-wrap justify-center md:justify-start">
                    <p className="text-blu font-bold pr-4">Talk to a Consolidation Specialist</p>
                    <div className="flex content-center justify-center">
                        <img src={phone} className="w-[15px] bg-blue" alt="phone-icon"></img>
                        <p className="pl-1">(888) 888-8888</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavBar;