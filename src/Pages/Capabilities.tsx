import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const capabilities = [
  {
    title: "New Proto Development",
    description:
      "Turning Ideas into Road-Ready Electric Vehicles",

    intro:
      "At Sukalpa Mobility Services, we partner with OEMs, startups, and mobility innovators to transform concepts into fully functional electric vehicle prototypes. Our engineering-driven approach ensures every prototype is developed with precision, validated for performance, and prepared for production. From design validation to vehicle commissioning, we provide end-to-end technical support throughout the prototype development lifecycle.",
    tagline: "Our NPD Process",

    sections: [
      {
        heading: "01. Project Understanding & Planning",
        tagline: "Laying the foundation for success.",
        points: [
          "Customer requirement analysis",
          "Technical feasibility review",
          "Project planning",
        ],
      },
      {
        heading: "02. Design Review",
        tagline: "Transforming concepts into manufacturable solutions.",
        points: [
          "Design review",
          "Fitment and packaging verification",
          "Bill of Material verification",
        ],
      },
      {
        heading: "03. Prototype Procurement & Build Support",
        tagline: "Building the first vehicle with precision.",
        points: [
          "Component procurement coordination",
          "Supplier coordination",
          "Chassis assembly",
          "Body integration",
          "HV & LV wiring integration",
          "Battery installation",
          "Cooling & pneumatic system assembly",
        ],
      },
      {
        heading: "04. Vehicle Integration & Commissioning",
        tagline: "Bringing the vehicle to life.",
        points: [
          "Vehicle power-on",
          "CAN communication validation",
          "Functional checks",
          "Electrical troubleshooting",
          "System calibration",
        ],
      },
    ],
  },

  {
    title: "Pre Homologation & Vehicle Certification",

    intro:
      "At Sukalpa Mobility Services, we help OEMs prepare their vehicles for successful homologation by identifying compliance gaps, validating vehicle systems, and ensuring readiness before official certification testing. Our pre-homologation support minimizes development risks, reduces testing failures, and accelerates the journey from prototype to production.",
    tagline: "What We Offer",
    sections: [
      {
        heading: "Vehicle Readiness Assessment",
        points: [
          "Complete vehicle inspection",
          "Mechanical & electrical system verification",
          "Assembly quality checks",
        ],
      },
      {
        heading: "Functional System Validation",
        points: [
          "High Voltage system validation",
          "Low Voltage system checks",
          "Brake system inspection",
          "Steering system verification",
          "Suspension inspection",
          "Lighting & signalling verification",
          "HVAC functional checks",
          "Safety system validation",
        ],
      },
      {
        heading: "Diagnostics & Software Validation",
        points: [
          "CAN communication verification",
          "Software flashing",
        ],
      },
      {
        heading: "Test Preparation",
        points: [
          "Pre-test inspection",
          "Performance validation",
          "Functional testing",
          "Issue identification",
          "Engineering improvements",
        ],
      },
    ],
  },

  {
    title: "Post Production Services",

    intro: "At Sukalpa Mobility Services, our commitment doesn't end when a vehicle leaves the production line. We provide comprehensive post-production support to ensure every vehicle continues to perform safely, reliably, and efficiently throughout its operational life. Our dedicated engineering and after-sales teams work closely with OEMs, fleet operators, and service partners to maximize vehicle uptime, improve reliability, and enhance customer satisfaction.",
    tagline: "Our Post-Production Service",
    label: "Key Activities",
    sections: [
      {
        heading: "Vehicle Commissioning",
        description: "Ensure every vehicle is ready for operation through comprehensive commissioning and final system validation.",
        label: "Key Activities",
        points: [
          "Pre-delivery inspection (PDI)",
          "Vehicle power-on support",
          "Functional system verification",
          "Software configuration",
          "Final quality inspection",
          "Customer handover support",
        ],
      },
      {
        heading: "Technical Support",
        description: "Provide prompt engineering assistance for technical issues encountered in the field.",
        label: "Key Activities",
        points: [
          "Remote technical assistance",
          "On-site engineering support",
          "Technical troubleshooting",
          "Root cause analysis",
          "Engineering consultation",
        ],
      },
      {
        heading: "Preventive Maintenance",
        description: "Improve fleet reliability through planned maintenance programs.",
        label: "Key Activities",
        points: [
          "Periodic vehicle inspections",
          "Battery health checks",
          "High Voltage inspection",
          "Cooling system maintenance",
          "Brake & suspension inspection",
          "Software updates",
        ],
      },
      {
        heading: "Breakdown & Emergency Support",
        description: "Deliver rapid assistance to minimize vehicle downtime and restore operations quickly.",
        label: "Key Activities",
        points: [
          "Emergency field support",
          "Fault diagnosis",
          "On-site repair",
          "Component replacement",
          "Recovery coordination",
        ],
      },
      {
        heading: "Spare Parts Management",
        description: "Ensure the right parts are available at the right time to support uninterrupted fleet operations.",
        label: "Key Activities",
        points: [
          "Spare parts planning",
          "Inventory management",
          "Parts identification",
          "Critical spare recommendations",
          "Supply coordination",
        ],
      },
    ],
  },
];

const Capabilities = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
   <section className="bg-white pt-6 pb-12 lg:pt-8 lg:pb-20">
  <div className="w-[92%] sm:w-[90%] lg:w-[82%] mx-auto">

       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2D63] leading-tight">
          Our <span className="text-[#7BAF2A]">Capabilities</span>
        </h1>

       <div className="w-14 lg:w-16 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-8 lg:mb-10"></div>

        <div className="space-y-6">

          {capabilities.map((item, index) => (

            <div
              key={index}
              className="border rounded-xl lg:rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center gap-4 bg-[#0A2D63] text-white px-4 sm:px-6 py-4 lg:py-5 text-left"
              >
               <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
                  {item.title}
                </h2>

                {open === index ? (
                 <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>

              {open === index && (

                <div className="p-5 sm:p-6 lg:p-8 bg-white">

                  {item.description && (
                   <h3 className="text-xl sm:text-2xl font-bold text-[#7BAF2A] mb-4 leading-snug">
                      {item.description}
                    </h3>
                  )}

                 <p className="text-[15px] sm:text-base text-gray-600 leading-7 lg:leading-8 mb-6 lg:mb-8 text-justify break-words">
                    {item.intro}
                  </p>

                  {item.tagline && (
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2D63] mb-6 lg:mb-8">
                      {item.tagline}
                    </h3>
                  )}


                  <div className="space-y-6 lg:space-y-8">

                    {item.sections.map((section, i) => (

                      <div key={i}>

                      <h4 className="text-lg sm:text-xl font-semibold text-[#0A2D63] mb-3 lg:mb-4 leading-snug">
                          {section.heading}
                        </h4>

                        {section.tagline && (
                         <p className="text-sm sm:text-base text-gray-600 italic mt-2 mb-3">
                            {section.tagline}
                          </p>
                        )}

                        {section.description && (
                         <p className="text-[15px] sm:text-base text-gray-600 mt-2 mb-3 leading-7">
                            {section.description}
                          </p>
                        )}
                        {section.label && (
                          <h5 className="text-[#7BAF2A] font-semibold text-sm sm:text-base mb-3">
                            {section.label}
                          </h5>
                        )}
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">

                          {section.points.map((point, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-[15px] sm:text-base text-gray-600 leading-7"
                            >
                              <span className="text-[#7BAF2A] mt-1">✔</span>
                              {point}
                            </li>
                          ))}

                        </ul>

                      </div>

                    ))}

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Capabilities;