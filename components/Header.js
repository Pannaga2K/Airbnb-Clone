import Image from 'next/image';
import { SearchIcon } from "@heroicons/react/solid"
import { GlobeAltIcon } from "@heroicons/react/solid"
import { UserCircleIcon } from "@heroicons/react/solid"
import { UsersIcon } from "@heroicons/react/solid"
import { MenuIcon } from "@heroicons/react/solid"
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        console.log(ranges)
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput("");
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        });
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-[#0f0f0f] text-white shadow-md py-5 px-5 md:px-10" >
            {/* LEFT */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto" onClick={() => router.push("/")} >
                <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition="left" alt="" />
            </div>
            {/* MIDDLE */}
            <div className="flex items-center md:border-2 border-red-400 rounded-full py-2 md:shadow-sm" >
                <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-white placeholder-grey-400" type="text" placeholder={placeholder || 'Start Yout Search'} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
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

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto transition duration-200" >
                    <DateRangePicker className="text-black" ranges={[selectionRange]} minDate={new Date()} rangeColors={["#FD5B61"]} onChange={handleSelect} />
                    <div className='flex items-center border-b my-4' >
                        <h2 className='text-2xl flex-grow font-semibold' >Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input className='w-12 pl-2 text-lg outline-none text-red-400 bg-transparent' type="number" min={1} value={noOfGuests} onChange={e => setNoOfGuests(e.target.value)} />
                    </div>
                    <div className='flex' >
                        <button className='flex-grow text-gray-500' onClick={resetInput} >Cancel</button>
                        <button className='flex-grow text-red-400' onClick={search} >Search</button>
                    </div>
                </div>
            )}
             
        </header>
    )
}

export default Header;