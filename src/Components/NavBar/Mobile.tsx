import { IoMdMenu } from "react-icons/io";

function MobileNav() {
  return (
    <div className="flex flex-row items-center justify-between text-xl sm:hidden">
        <p>logo</p>
        <div className="text-4xl">
          <IoMdMenu/>
        </div>
    </div>
  )
}

export default MobileNav