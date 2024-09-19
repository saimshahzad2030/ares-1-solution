import React from "react";
import ContactUsDirectives from "./ContactUsDirectives";
import ContactUsForm from "./ContactUsForm";

const ContactMain = () => {
  return (
    <div className=" lexend-deca-normal flex flex-col items-center w-full py-8 md:py-24 px-4 lg:px-20">
      <ContactUsDirectives />
      <ContactUsForm />
    </div>
  );
};

export default ContactMain;
