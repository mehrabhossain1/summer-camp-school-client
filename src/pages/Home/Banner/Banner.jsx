import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../../assets/HomePage/slider1.jpg";
import slider2 from "../../../assets/HomePage/slider2.jpg";
import slider3 from "../../../assets/HomePage/slider3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={slider1} />
        <p className='legend'>A Perfect learning center for your kids</p>
      </div>
      <div>
        <img src={slider2} />
        <p className='legend'>Legend 2</p>
      </div>
      <div>
        <img src={slider3} />
        <p className='legend'>Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
