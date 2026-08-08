import { useState } from "react";

import {
  Wrench,
  ShieldCheck,
} from "lucide-react";

import prototypeImg from "../../assets/Screenshot (653).png";
import designImg from "../../assets/Screenshot (654).png";
import productionImg from "../../assets/Screenshot (655).png";
import serviceManualImg from "../../assets/Screenshot (656).png";
import sparePartsDocImg from "../../assets/Screenshot (657).png";
import trainingMethodsImg from "../../assets/Screenshot (658).png";
import trainingBenefitsImg from "../../assets/Screenshot (659).png";

const Technicaldoc = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const documentationServices = [
    {
      image: prototypeImg,
      title: "Prototype Development Manuals (NPD)",
      description:
        "Support engineering teams during prototype builds with structured documentation for vehicle assembly, subsystem integration, testing, validation, and engineering change implementation.",
      includes: [
        "Prototype Assembly Manuals",
        "Build Sequence Documents",
        "Engineering Build Instructions",
        "Prototype Validation Checklists",
        "Trial Build Procedures",
        "Engineering Change Records (ECR/ECO)",
        "Prototype Testing Reports",
        "Vehicle Integration Manuals",
      ],
    },
    {
      image: designImg,
      title: "Design Documentation",
      description:
        "Comprehensive engineering documentation to support vehicle design, development, and system integration.",
      includes: [
        "Assembly Drawings",
        "Exploded View Drawings",
        "Wiring Harness Layouts",
        "System Architecture Documents",
        "Installation Manuals",
        "Design Release Documents",
        "Bill of Materials (BOM)",
        "Design Change Management",
      ],
    },
    {
      image: productionImg,
      title: "Production Manuals",
      description:
        "Standardized documentation to ensure consistent, safe, and high-quality vehicle manufacturing.",
      includes: [
        "Production Assembly Work Instructions",
        "Chassis Assembly Manuals",
        "Bus Body Integration Manuals",
        "High Voltage Assembly Procedures",
        "Battery Installation Manuals",
        "Torque Specifications",
        "Quality Inspection Standards",
        "Production Quality Checklists",
      ],
    },
    {
      image: serviceManualImg,
      title: "After-Sales Service Manuals",
      description:
        "Complete documentation enabling technicians to perform maintenance, diagnostics, repairs, and warranty activities efficiently.",
      includes: [
        "Preventive Maintenance Manuals",
        "Corrective Repair Manuals",
        "Electrical Wiring Diagrams",
        "CAN Communication Guides",
        "Technical Service Updates",
      ],
    },
    {
      image: sparePartsDocImg,
      title: "Spare Parts Documentation",
      description:
        "Provide accurate information for identifying, ordering, and replacing vehicle components.",
      includes: [
        "Illustrated Parts Catalogues (IPC)",
        "Exploded Component Views",
        "Spare Parts Lists",
        "Part Number Identification",
        "Component Cross-Reference Guides",
        "Replacement Procedures",
      ],
    },
  ];

  const trainingMethods = [
    "Hands-on Practical Sessions",
    "Live Vehicle Demonstrations",
    "Workshop-Based Learning",
    "On-Site Customer Training",
    "Remote Technical Sessions",
    "Assessment & Certification",
  ];

  const trainingBenefits = [
    "Improved technician competency",
    "Faster fault diagnosis and repairs",
    "Enhanced safety awareness",
    "Reduced vehicle downtime",
    "Higher first-time fix rates",
    "Consistent service quality",
    "Increased customer satisfaction",
    "OEM-standard maintenance practice",
  ];

  return (
    <>
      {/* =========================================================
          SERVICE MANUALS & TECHNICAL DOCUMENTATION
      ========================================================= */}
      <div className="bg-white pt-10 pb-20 px-6">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-[#0A2D63]">
              Service Manuals & Technical Documentation
            </h2>

            <p className="mt-3 text-xl font-medium text-[#7BAF2A]">
              Complete Engineering Documentation Across the Vehicle Lifecycle
            </p>

            <div className="w-24 h-1 bg-[#7BAF2A] mt-5 rounded-full"></div>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              At Sukalpa Mobility Services, we develop comprehensive service
              manuals and technical documentation that support every stage of a
              vehicle's lifecycle from concept and prototype development to
              production, after-sales service, and fleet maintenance. Our
              documentation is created by experienced automotive engineers to
              ensure accuracy, standardization, safety, and operational
              efficiency for OEMs, manufacturers, dealers, and fleet operators.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Whether launching a new vehicle platform or supporting an existing
              fleet, our manuals help engineering, production, and service teams
              perform every task with confidence and consistency.
            </p>
          </div>

          {/* Documentation Services Heading */}
          <div className="text-left mt-16 mb-10">
            <h3 className="text-3xl font-bold text-[#0A2D63]">
              Our Documentation Services
            </h3>

            <div className="w-20 h-1 bg-[#7BAF2A] mt-4 rounded-full"></div>
          </div>

         {/* Documentation Services */}
<div className="space-y-16">
  {documentationServices.map((service, index) => {
    const isOpen = selectedService === index;

    return (
      <div key={index} className="w-full">

        {/* IMAGE + TITLE + DESCRIPTION */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >

          {/* IMAGE */}
          <div
            className={`w-full flex ${
              index % 2 === 0
                ? "lg:justify-start lg:order-1"
                : "lg:justify-end lg:order-2"
            }`}
          >
            <button
              type="button"
              onClick={() =>
                setSelectedService(isOpen ? null : index)
              }
              className="
                group
                relative
                w-full
                max-w-[500px]
                overflow-hidden
                rounded-2xl
                shadow-lg
                cursor-pointer
                focus:outline-none
                focus:ring-4
                focus:ring-[#7BAF2A]/30
              "
            >
              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-[250px]
                  md:h-[330px]
                  object-cover
                  rounded-2xl
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* Hover overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#0A2D63]/0
                  group-hover:bg-[#0A2D63]/40
                  transition-all
                  duration-300
                "
              />

              {/* View Details */}
              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  bg-white
                  text-[#0A2D63]
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                  shadow-lg
                "
              >
                View More
              </div>
            </button>
          </div>

          {/* TITLE + DESCRIPTION */}
          <div
            className={`${
              index % 2 === 0
                ? "lg:order-2"
                : "lg:order-1"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2D63]">
              {service.title}
            </h3>

            {/* Green line */}
            <div className="w-20 h-1 bg-[#7BAF2A] rounded-full mt-4 mb-5"></div>

            <p className="text-base md:text-lg text-gray-600 leading-7 md:leading-8">
              {service.description}
            </p>
          </div>
        </div>

        {/* EXPANDED CONTENT */}
        {isOpen && (
          <div
            className="
              mt-8
              w-full
              bg-[#F8FAFC]
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              p-6
              md:p-8
            "
          >
            <h4 className="text-lg md:text-xl font-semibold text-[#0A2D63] mb-5">
              Includes:
            </h4>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {service.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                >
                  <span
                    className="
                      mt-2
                      w-2
                      h-2
                      rounded-full
                      bg-[#7BAF2A]
                      flex-shrink-0
                    "
                  ></span>

                  <span className="text-gray-700 leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  })}
</div>
        </div>
      </div>

      {/* =========================================================
          TECHNICAL TRAINING
      ========================================================= */}
      <div className="bg-[#F8FAFC] py-20 px-6">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-[#0A2D63]">
              Technical Training
            </h2>

            <p className="mt-3 text-xl font-medium text-[#7BAF2A]">
              Building Skilled Technicians for the Future of Electric Mobility
            </p>

            <div className="w-24 h-1 bg-[#7BAF2A] mt-5 rounded-full"></div>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              At Sukalpa Mobility Services, we provide industry-focused
              technical training programs designed to equip technicians,
              engineers, dealers, and fleet maintenance teams with the practical
              skills required to service and maintain electric commercial
              vehicles safely and efficiently.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Our training combines classroom sessions, hands-on workshop
              experience, live vehicle demonstrations, and advanced diagnostic
              practices to build confidence and technical excellence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {/* Training Methods */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-lg transition-all duration-300">

              <div className="w-14 h-14 rounded-full bg-[#7BAF2A]/10 flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-[#7BAF2A]" />
              </div>

              <h3 className="text-2xl font-semibold text-[#0A2D63] mb-6">
                Training Methods
              </h3>

              <ul className="space-y-4">
                {trainingMethods.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#7BAF2A] mt-2"></span>

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-lg transition-all duration-300">

              <div className="w-14 h-14 rounded-full bg-[#7BAF2A]/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[#7BAF2A]" />
              </div>

              <h3 className="text-2xl font-semibold text-[#0A2D63] mb-6">
                Benefits
              </h3>

              <ul className="space-y-4">
                {trainingBenefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#7BAF2A] mt-2"></span>

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Technicaldoc;