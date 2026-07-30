import remoteSupportImg from "../../assets/Screenshot (646).png";
import faultDiagnosisImg from "../../assets/Screenshot (647).png";
import onsiteSupportImg from "../../assets/Screenshot (648).png";
import hvSupportImg from "../../assets/Screenshot (649).png";
import documentationImg from "../../assets/Screenshot (650).png";

const Technicalsupport = () => {
  const technicalSupportServices = [
    {
      image: remoteSupportImg,
      title: "Remote Technical Assistance",
      description:
        "Receive real-time support through phone, email, or video conferencing for rapid troubleshooting and issue resolution.",
    },
    {
      image: faultDiagnosisImg,
      title: "Fault Diagnosis & Troubleshooting",
      description:
        "Comprehensive analysis of electrical, mechanical, and software-related issues using advanced diagnostic tools and engineering expertise.",
    },
    {
      image: onsiteSupportImg,
      title: "On-Site Technical Support",
      description:
        "Our field engineers visit customer locations to perform inspections, repairs, and technical investigations whenever on-site assistance is required.",
    },
    {
      image: hvSupportImg,
      title: "High-Voltage System Support",
      description:
        "Expert assistance for battery systems, motor controllers, BMS, charging systems, and other high-voltage components, ensuring safe and reliable operation.",
    },
    {
      image: documentationImg,
      title: "Technical Documentation",
      description:
        "Preparation and support for service manuals, troubleshooting guides, wiring diagrams, inspection reports, and standard operating procedures.",
    },
  ];

  return (
    <div className="pt-10 py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-[#0A2D63]">
            Technical Support
          </h2>

          <div className="w-24 h-1 bg-[#7BAF2A] mt-4 rounded-full"></div>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            At Sukalpa Mobility Services, our Technical Support team provides
            prompt and reliable assistance to ensure your vehicles remain
            operational with minimal downtime.
          </p>

          <p className="mt-5 text-gray-600 leading-8 text-lg">
            Whether you need remote guidance, on-site engineering support,
            fault diagnosis, or service documentation, our experts are
            committed to delivering accurate solutions.
          </p>
        </div>

      <div className="space-y-20 mt-16">
  {technicalSupportServices.map((service, index) => (
    <div
      key={index}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image */}
      <div
        className={`flex justify-center ${
          index % 2 === 0
            ? "lg:order-2 lg:justify-end"
            : "lg:order-1 lg:justify-start"
        } order-1`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full max-w-[450px] h-[240px] md:h-[280px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div
        className={`${
          index % 2 === 0 ? "lg:order-1" : "lg:order-2"
        } order-2`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#0A2D63] mb-5">
          {service.title}
        </h3>

        <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-600">
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Technicalsupport;