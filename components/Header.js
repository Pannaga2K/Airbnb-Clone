import Image from 'next/image';
import { SearchIcon } from "@heroicons/react/solid"
import { GlobeAltIcon } from "@heroicons/react/solid"
import { UserCircleIcon } from "@heroicons/react/solid"
import { UsersIcon } from "@heroicons/react/solid"
import { MenuIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-[#0f0f0f] text-white shadow-md py-5 px-5 md:px-10" >
            {/* LEFT */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto" >
                <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition="left" alt="" />
            </div>
            {/* MIDDLE */}
            <div className="flex items-center md:border-2 border-red-400 rounded-full py-2 md:shadow-sm" >
                <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-grey-400" type="text" placeholder='Start Yout Search' />
                <SearchIcon className="hidden md:inline-flex h-8 bg-white text-black rounded-full p-2 cursor-pointer md:mx-2 " />
            </div>
            {/* RIGHT */}
            <div className="flex space-x-4 items-center justify-end text-red-400" >
                <p className='hidden md:inline cursor-pointer' >Become a Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex items-center space-x-2 p-2 rounded-full' >
                    <MenuIcon className='h-6 ' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}

export default Header;