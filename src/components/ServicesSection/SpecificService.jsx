import Image from "../Image/Image";

const SpecificService = ({ service }) => {
  return (
    <div className="bg-white dark:bg-transparent lexend-deca-normal flex flex-col items-center w-full bg-defaultTheme  py-8 md:py-24  px-4 lg:px-20">
      <Image
        imageObject={{ src: service.bgImage, name: service.name }}
        className={"w-full h-auto"}
      />
      <h1 className="mt-4 lexend-deca-bold dark:text-white text-darkBlack w-full text-center sm:text-start">
        {service.name}
      </h1>
      <p className="mt-4 text-lightBlack w-full text-start">
        {service.description}
      </p>
    </div>
  );
};

export default SpecificService;
