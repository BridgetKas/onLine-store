import { IoMdMenu } from "react-icons/io";

function MobileNav() {
  return (
    <div className="flex flex-row items-center justify-between text-xl sm:hidden">
        <p className="font-extrabold font-sans">SOLYN.</p>
        <div className="text-4xl">
          <IoMdMenu/>
        </div>
    </div>
  )
}

export default MobileNav