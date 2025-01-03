import { CarCard, CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars()
  console.log(allCars)

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" /> */}
            <CustomFilter title="year" />
          </div>
        </div>

        { !isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-xl text-black font-bold">opps! no result</h2>
            <p>{ allCars.message }</p>
          </div>
        ) }

      </div>

    </main>
  );
}
