import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import { Outlet } from "react-router-dom";

const HeaderTransparentLayout = () => {
  return (
    <>
      <Header transparant={true} />
      <Outlet />
      <Footer />
    </>
  );
};

export default HeaderTransparentLayout;
