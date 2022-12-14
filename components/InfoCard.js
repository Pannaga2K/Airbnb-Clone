import Image from "next/image";
import {HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid";
import { useRouter } from "next/router";

function InfoCard({img, location, title, desc, star, price, total, index}) {

    const router = useRouter();

    return (
        <div className="flex py-7 px-2 rounded-md cursor-pointer hover:opacity-80 hover:bg-[#1f1f1f] pr-4 transition duration-200 ease-out" id={`infoCard__index${index}`} onClick={() => router.push(`/stay/${index}`)} >
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0" >
                <Image className="rounded-2xl" src={img} layout="fill" objectFit="cover" alt="" />
            </div>
            <div className="flex flex-col flex-grow pl-5" >
                <div className="flex justify-between" >
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl" >{title}</h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-sm text-gray-500 flex-grow" >{desc}</p>
                <div className="flex justify-between items-end pt-5" >
                    <p className="flex items-center" >
                        <StarIcon className="h-5 text-red-400" />{star}
                    </p>
                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight" >{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;