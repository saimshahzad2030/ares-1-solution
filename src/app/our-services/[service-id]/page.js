import React from "react";
import { SERVICES } from "../../../../constants/constants";
import Navbar from "@/components/Navbar/Navbar";
import HeroGlobal from "@/components/HeroSection/HeroGlobal";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import SpecificService from "@/components/ServicesSection/SpecificService";

async function getServiceData(serviceId) {
  const blog = SERVICES.find((service, index) => index == serviceId);
  if (!blog) {
    return null;
  }
  return blog;
}

const page = async ({ params }) => {
  const serviceId = params["service-id"];
  const serviceData = await getServiceData(serviceId);
  if (!serviceData) {
    notFound();
  }
  console.log(serviceData);
  return (
    <>
      <div className="bg-white dark:bg-defaultTheme flex flex-col items-center ">
        <Navbar />
        <HeroGlobal
          url={`/our-services/${serviceId}`}
          heading={serviceData.name}
          urlName={serviceData.name}
          text={
            "Giusmod enim tempor incididunt aut labore et dolore magna aliua ruis nostrud exercitation ullamco laboris."
          }
        />
        <SpecificService service={serviceData} />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default page;
