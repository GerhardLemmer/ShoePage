import NikeLogo from "../assets/nike-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const ROUTES = ["Home", "Shop", "About", "Contact"];

export function Nav(){
    const [isMobileMenuShown , setIsMobileMenuShown ] = useState(false);
    return  <nav className="z-10 relative flex items-center justify-between">
        {/*logo*/}
        <a href="#" className="p-4">
            <img src={NikeLogo} alt="Nike logo" className="h-20 w-20" />
        </a>

        {/*burgerButton*/}
        <button onClick={() => setIsMobileMenuShown(!isMobileMenuShown)} className="focus:ring-2 focus:ring-gray-200 p-2 rounded-lg hover:bg-gray-100 lg:hidden top-4 right-4">
            <RxHamburgerMenu size={25} />
        </button>

        {/*navLinks*/}
        <div className={`${
            isMobileMenuShown === false && "hidden"
        }
        w-full lg:w-auto lg:block`}
        >
            <ul className="bg-gray-50 text-lg border-gray-100 rounded-lg p-4 lg:flex lg:justify-center lg:space-x-8 lg:bg-transparent lg:border-none ">
                {ROUTES.map((route, i) => {
                    return (
                    <li  className={`lg:hover:text-blue-500 lg:hover:bg-transparent px-3 py-2 cursor-pointer rounded ${
                        i === 0
                         ? "bg-blue-400 text-white lg:bg-transparent lg:text-blue-400" 
                         : "hover:bg-gray-100"
                         } ${(i==2 || i==3) && "lg:text-white"}`} 
                         key={route}>
                         {route}
                         </li>
                    );
                })}
            </ul>
        </div>

        {/*cartButton*/}
        <div className="fixed left-4 bottom-4 lg:static lg:mr-8 cursor-pointer">
            <div className="flex items-center justify-center rounded-full h-12 w-12 bg-white shadow-md">
                <FaShoppingCart size={25} />
            </div>
        </div>
    </nav>
}