import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <h2>This is HomePage</h2>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <div>
        **Extra Section -** Add one relevant sections. Make it attractive
        :heart_eyes:. Try to use animation effects.
      </div>
    </div>
  );
};

export default Home;
