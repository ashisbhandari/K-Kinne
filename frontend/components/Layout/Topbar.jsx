import { FaMeta } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white p-4">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="hover:text-gray-300">
                    <FaMeta className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-300">
                    <BiLogoInstagramAlt className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-300">
                    <BsTwitterX className="h-5 w-5" />
                </a>
            </div>
            <div className="text-sm text-center flex-grow">
                <span> We ship WorldWide-Feel Free to Order Items!</span>
            </div>
            <div className="text-sm hidden md:block">
                <a href="tel:+977 9824915826" className="hover:text-gray-300">+9779824915826</a>
            </div>
        </div>
    </div>
  )
}

export default Topbar
