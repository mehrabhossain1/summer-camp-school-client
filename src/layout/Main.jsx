import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const hoHeaderFooter = location.pathname.includes("login");

  return (
    <div>
      {hoHeaderFooter || <Navbar />}
      <Outlet />
      {hoHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
