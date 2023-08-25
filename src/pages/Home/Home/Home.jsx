import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <h2>This is HomePage</h2>
      <Navbar />
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <div>
        **Extra Section -** Add one relevant sections. Make it attractive
        :heart_eyes:. Try to use animation effects.
      </div>
      <Footer />
    </div>
  );
};

export default Home;
