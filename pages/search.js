import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {format} from "date-fns";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Maps";

function Search({searchResults}) {

    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    console.log(range);

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`} />

            <main className="flex bg-[#0f0f0f] text-white px-5" >
                <section className="flex-grow pt-14 px-6" >
                    <p className="text-xs" >300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6" >Stays in {location}</h1>
                    <div className="hidden md:inline-flex mb-5 space-x-3 text-white whitespace-nowrap" >
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>
                    <div className="flex flex-col !w-[70%]" >
                        {searchResults?.map(({img, location, title, description, star, price, total}, index) => (
                            <InfoCard key={index} img={img} location={location} title={title} desc={description} star={star} price={price} total={total} index={index} />
                        ))}
                    </div>
                </section>
                <section className="hidden xl:inline-flex xl:w-[30%] xl:h-screen fixed right-0" >
                    <Maps searchResults={searchResults} />
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }

}