import Banner from "../Banner/Banner";
import OurPrograms from "../OurPrograms/OurPrograms";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <h2>This is HomePage</h2>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <OurPrograms />
    </div>
  );
};

export default Home;
