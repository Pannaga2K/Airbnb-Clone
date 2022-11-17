import Image from "next/image";

function LargeCard({img, title, desc, buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer" >
            <div className="relative h-96 min-w-[300px]" >
                <Image className="rounded-2xl" src={img} layout="fill" objectFit="cover" alt="" />
            </div>
            <div className="absolute top-32 left-12" >
                <h3 className="text-4xl mb-3 w-64" >{title}</h3>
                <p>{desc}</p>
                <button className="text-sm text-white border-2 border-black bg-gray-900 px-4 py-2 rounded-full mt-5 hover:border-2 hover:border-black hover:bg-white hover:text-black transition duration-200" >{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard;