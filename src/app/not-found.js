import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NotFound from "@/components/NotFound/404-Not-Found";

const NotFoundpage = () => {
  return (
    <div className="bg-white dark:bg-defaultTheme flex flex-col items-center ">
      <Navbar />
      <NotFound />
      <Footer />
      <Copyright />
    </div>
  );
};

export default NotFoundpage;
