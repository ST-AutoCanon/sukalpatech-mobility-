import genuineImg from "../../assets/genuine-parts.png";
import criticalImg from "../../assets/critical-parts.png";
import procurementImg from "../../assets/parts-procrument.png";
import distributionImg from "../../assets/sparepart.png";
import supportImg from "../../assets/Technicalsupport.png";
import documentationImg from "../../assets/documentation.png";
import sparepart from "../../assets/spare_parts.png";
import service from "../../assets/service_repair_vehicles.png";
import repair from "../../assets/repair_centre.png";

import {
  Handshake,
  Search,
  PackageCheck,
  ShoppingCart,
  ClipboardCheck,
  FileCheck,
  Truck,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const Sparepartservices = () => {
  const sparePartsServices = [
    {
      image: sparepart,
      title: "Genuine Parts Supply",
      description:
        "We supply OEM-approved spare parts that meet the highest standards of quality, safety, and reliability, ensuring optimal vehicle performance and extended component life.",
    },
    {
      image: service,
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
      image: repair,
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
    {
      title: "Customer Requirement Analysis",
      icon: Handshake,
    },
    {
      title: "Spare Part Identification",
      icon: Search,
    },
    {
      title: "Availability & Inventory Check",
      icon: PackageCheck,
    },
    {
      title: "Procurement",
      icon: ShoppingCart,
    },
    {
      title: "Quality Inspection",
      icon: ClipboardCheck,
    },
    {
      title: "Packaging & Documentation",
      icon: FileCheck,
    },
    {
      title: "Dispatch & Delivery",
      icon: Truck,
    },
    {
      title: "Installation Support",
      icon: Wrench,
    },
    {
      title: "Warranty & Service Record Update",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="pt-10 pb-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6">
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
                className={`flex justify-center ${index % 2 === 0 ? "lg:order-2 lg:justify-end" : "lg:order-1 lg:justify-start"
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
                className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"
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

      {/* ================= SPARE PARTS PROCESS ================= */}
      {/* ================= SPARE PARTS PROCESS ================= */}
<div className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-left mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2D63]">
        Our Spare Parts Process
      </h2>

      <div className="w-24 h-1 bg-[#7BAF2A] mt-4 rounded-full"></div>
    </div>


    {/* =====================================================
        MOBILE PROCESS
    ===================================================== */}
    <div className="block lg:hidden">

      <div className="relative">

        {/* VERTICAL LINE */}
        <div
          className="
            absolute
            left-[27px]
            top-6
            bottom-6
            w-[2px]
            bg-[#0A2D63]/30
          "
        />

        <div className="space-y-7">

          {sparePartsProcess.map((step, index) => {

            const StepIcon = step.icon;

            return (
              <div
                key={index}
                className="relative flex items-center gap-5"
              >

                {/* NUMBER + ICON */}
                <div
                  className="
                    relative
                    z-10
                    flex-shrink-0
                    w-14
                    h-14
                    rounded-full
                    bg-[#0A2D63]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-md
                  "
                >
                  <StepIcon
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>


                {/* CONTENT */}
                <div
                  className="
                    flex-1
                    bg-[#F8FAFC]
                    border
                    border-gray-200
                    rounded-xl
                    px-5
                    py-4
                    shadow-sm
                  "
                >

                  <div className="flex items-center gap-3 mb-1">

                    <span className="text-sm font-bold text-[#7BAF2A]">
                      {index + 1}.
                    </span>

                    <h3 className="text-base font-bold text-[#0A2D63] leading-6">
                      {step.title}
                    </h3>

                  </div>

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </div>


    {/* =====================================================
        DESKTOP PROCESS
    ===================================================== */}
    <div className="hidden lg:block">

      <div className="w-full overflow-visible">

        <div className="relative w-full px-2">

          {/* HORIZONTAL LINE */}
          <div
            className="
              absolute
              left-8
              right-8
              top-1/2
              -translate-y-1/2
              h-[2px]
              bg-[#0A2D63]
            "
          />


          {/* PROCESS ITEMS */}
          <div className="relative grid grid-cols-9">

            {sparePartsProcess.map((step, index) => {

              const StepIcon = step.icon;
              const isTop = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative h-[360px]"
                >

                  {/* ================= TOP ITEM ================= */}
                  {isTop && (

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[140px]
                        h-[360px]
                      "
                    >

                      {/* NUMBER + ICON */}
                      <div
                        className="
                          absolute
                          top-0
                          left-1/2
                          -translate-x-1/2
                          flex
                          items-center
                          z-20
                        "
                      >

                        <span className="text-xl font-bold text-[#0A2D63] mr-2">
                          {index + 1}.
                        </span>

                        <div
                          className="
                            w-14
                            h-14
                            rounded-full
                            bg-[#0A2D63]
                            flex
                            items-center
                            justify-center
                            text-white
                            shadow-md
                          "
                        >
                          <StepIcon
                            size={28}
                            strokeWidth={1.8}
                          />
                        </div>

                      </div>


                      {/* VERTICAL CONNECTOR */}
                      <div
                        className="
                          absolute
                          left-1/2
                          -translate-x-1/2
                          top-[56px]
                          h-[124px]
                          w-[2px]
                          bg-[#0A2D63]
                        "
                      />


                      {/* DOT */}
                      <div
                        className="
                          absolute
                          left-1/2
                          top-[174px]
                          -translate-x-1/2
                          w-3
                          h-3
                          rounded-full
                          bg-[#0A2D63]
                          z-30
                        "
                      />


                      {/* DETAILS */}
                      <div
                        className="
                          absolute
                          left-[calc(50%+18px)]
                          top-[70px]
                          w-[125px]
                          text-left
                        "
                      >
                        <h3 className="text-sm font-bold text-[#0A2D63] leading-5">
                          {step.title}
                        </h3>
                      </div>

                    </div>

                  )}


                  {/* ================= BOTTOM ITEM ================= */}
                  {!isTop && (

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[140px]
                        h-[360px]
                      "
                    >

                      {/* DOT */}
                      <div
                        className="
                          absolute
                          left-1/2
                          top-[174px]
                          -translate-x-1/2
                          w-3
                          h-3
                          rounded-full
                          bg-[#0A2D63]
                          z-30
                        "
                      />


                      {/* VERTICAL CONNECTOR */}
                      <div
                        className="
                          absolute
                          left-1/2
                          -translate-x-1/2
                          top-[180px]
                          h-[124px]
                          w-[2px]
                          bg-[#0A2D63]
                        "
                      />


                      {/* DETAILS */}
                      <div
                        className="
                          absolute
                          right-[calc(50%+18px)]
                          top-[205px]
                          w-[125px]
                          text-right
                        "
                      >
                        <h3 className="text-sm font-bold text-[#0A2D63] leading-5">
                          {step.title}
                        </h3>
                      </div>


                      {/* NUMBER + ICON */}
                      <div
                        className="
                          absolute
                          top-[298px]
                          left-1/2
                          -translate-x-1/2
                          flex
                          items-center
                          z-20
                        "
                      >

                        <span className="text-xl font-bold text-[#0A2D63] mr-2">
                          {index + 1}.
                        </span>

                        <div
                          className="
                            w-14
                            h-14
                            rounded-full
                            bg-[#0A2D63]
                            flex
                            items-center
                            justify-center
                            text-white
                            shadow-md
                          "
                        >
                          <StepIcon
                            size={28}
                            strokeWidth={1.8}
                          />
                        </div>

                      </div>

                    </div>

                  )}

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </div>

  </div>
</div>
    </section>
  );
};

export default Sparepartservices;

