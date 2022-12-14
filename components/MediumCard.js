import Image from 'next/image';

function MediumCard({img, title}) {
    return (
        <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out mb-6' >
            {/* LEFT */}
            <div className='relative h-80 w-80' >
                <Image className="rounded-xl" src={img} layout="fill" alt="" />
            </div>
            <h3 className='text-2xl mt-3 text-white' >{title}</h3>
        </div>
    )
}

export default MediumCard;