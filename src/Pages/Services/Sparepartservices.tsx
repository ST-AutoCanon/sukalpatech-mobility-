import genuineImg from "../../assets/genuine-parts.png";
import criticalImg from "../../assets/critical-parts.png";
import procurementImg from "../../assets/parts-procrument.png";
import distributionImg from "../../assets/sparepart.png";
import supportImg from "../../assets/Technicalsupport.png";
import documentationImg from "../../assets/documentation.png";

const Sparepartservices = () => {
  const sparePartsServices = [
    {
      image: genuineImg,
      title: "Genuine Parts Supply",
      description:
        "We supply OEM-approved spare parts that meet the highest standards of quality, safety, and reliability, ensuring optimal vehicle performance and extended component life.",
    },
    {
      image: criticalImg,
      title: "Critical Parts Availability",
      description:
        "Frequently required and mission-critical components are strategically stocked to ensure rapid replacement and faster turnaround during maintenance or breakdowns.",
    },
    {
      image: procurementImg,
      title: "Parts Procurement",
      description:
        "We manage end-to-end procurement from approved manufacturers and suppliers, ensuring timely sourcing, quality verification, and cost-effective purchasing.",
    },
    {
      image: distributionImg,
      title: "Spare Parts Distribution",
      description:
        "With an organized logistics network, we ensure prompt delivery of spare parts to service centers, customer locations, and field service teams across India.",
    },
    {
      image: supportImg,
      title: "Technical Parts Support",
      description:
        "Our experienced engineers assist customers in identifying the correct spare parts using technical documentation, exploded views, and engineering expertise.",
    },
    {
      image: documentationImg,
      title: "Spare Parts Documentation",
      description:
        "We maintain comprehensive records of part numbers, specifications, revisions, interchangeability, and replacement history to support accurate maintenance planning.",
    },
  ];

  const sparePartsProcess = [
    "Customer Requirement Analysis",
    "Spare Part Identification",
    "Availability & Inventory Check",
    "Procurement (if required)",
    "Quality Inspection",
    "Packaging & Documentation",
    "Dispatch & Delivery",
    "Installation Support",
    "Warranty & Service Record Update",
  ];

  return (
    <section className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="pt-10 pb-10 lg:pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2D63]">
            Spare Parts Management
          </h1>

          <div className="w-24 h-1 bg-[#7BAF2A] mt-5 rounded-full"></div>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            At Sukalpa Mobility Services, we understand that timely availability of
            genuine spare parts is essential for maximizing vehicle uptime and
            reducing operational costs. Our Spare Parts Management solutions ensure
            that customers receive the right parts, at the right time, with complete
            traceability and technical support.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We work closely with OEMs and trusted suppliers to provide high-quality
            genuine components for electric buses, trucks, and commercial EVs.
          </p>
        </div>
      </div>

      {/* Spare Parts Services */}
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-12">
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2D63]">
            Our Spare Parts Services
          </h2>

          <div className="w-24 h-1 bg-[#7BAF2A] mt-4 rounded-full"></div>
        </div>

       <div className="space-y-20">
  {sparePartsServices.map((service, index) => (
    <div
      key={index}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image */}
      <div
        className={`flex justify-center ${
          index % 2 === 0 ? "lg:order-2 lg:justify-end" : "lg:order-1 lg:justify-start"
        } order-1`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full max-w-[420px] h-[240px] md:h-[260px] object-cover rounded-2xl shadow-lg"
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

      {/* Spare Parts Process */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2D63]">
              Our Spare Parts Process
            </h2>
            <div className="w-24 h-1 bg-[#7BAF2A]  mt-4 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sparePartsProcess.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#7BAF2A] text-white font-bold flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>

                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sparepartservices;

