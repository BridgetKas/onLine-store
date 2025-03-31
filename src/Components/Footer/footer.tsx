import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
function Footer() {
  return (
    <div className="fixed bottom-0 w-full border border-t-gray-600 bg-[#092347] text-white">
        <div className="p-3 w-[80%] mx-auto flex flex-row items-start justify-between">
            <div>
                <p className="font-extrabold font-sans">SOLYN.</p>
                <div className="flex flex-row gap-2 items-center">
                    <div className="text-[26px]">
                        <a href="#"><FaInstagram/></a>
                    </div>
                    <div className="text-[26px]">
                        <a href="#"><FaFacebookSquare /></a>
                    </div>
                    <div className="text-[30px]">
                        <a href="#"> <FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <a href="#">Terms and Policies</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Service</a>
            </div>
            <div className="footer">
                <a href="#">Company</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
       
       
        <div className="text-center flex flex-row items-center justify-center gap-1 border border-t-gray-600 p-2">
            <div><FaRegCopyright /></div>
            <p>2025 Solyn All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer