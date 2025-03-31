import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import ProductCard from "../Product/productCard";

export default function DesktopNav() {
  const links = [
    {
      label:"All categories",
      path:'/categories',
      id:1
    },
    {
      label:"Kids shoes",
      path:'/shoes',
      id:2
    },
    {
      label:"Bags",
      path:'/bags',
      id:3
    },
    {
      label:"Table runners",
      path:'/runners',
      id:4
    }
  ]

  return (
    <>
      <div className="hidden sm:block w-[98%] mx-auto border border-gray-400 bg-[#092347] text-white">
        <div className=" border flex flex-row items-center justify-around py-4 px-3 gap-2.5">
          <p className="font-extrabold font-sans">SOLYN.</p>
          <input type='text' placeholder="Search" className="w-[50%] h-fit p-3 rounded-lg border border-black"/>
          <div className="flex flex-row items-center gap-2">
            <div className="text-4xl">
              <IoPerson />
            </div>
            <div className="flex flex-col">
              <p>Welcome</p>
              <NavLink to=''>Sign In / Register</NavLink>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="text-4xl">
              <MdOutlineShoppingCart />
            </div>
            <p className="text-[18px]">Cart</p>
          </div>
        </div>
        <div className="flex items-center justify-around gap-2.5 border-t-gray-700 p-2.5">
          {links.map(link =>(
            <NavLink to={link.path} key={link.id}>{link.label}</NavLink>
          ))}
        </div>
      </div>
      <ProductCard title1='hi' text1='me' image1='who' text2='yes' image2='try' text3='never' image3='give' text4='work' image4='who'/>
    </>

  );
}