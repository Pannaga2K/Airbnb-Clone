import Image from 'next/image';

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[] xl:h-[] " >
            <Image className='' src="https://links.papareact.com/0fm" layout='fill' objectFit='cover' alt="" />
            <div className='absolute top-1/2 w-full text-center' >
                <p>Not sure where to go? Perfect.</p>
                <button className='text-red-500 bg-white border-2 border-red-500 px-10 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:text-white hover:bg-red-500 active:scale-90 transition duration-200' >I'm Flexible</button>
            </div>
        </div>
    )
}

export default Banner;