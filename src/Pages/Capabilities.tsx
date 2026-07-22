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
   <section className="bg-white pt-5 pb-16 lg:pt-8 lg:pb-20">
      <div className="w-[94%] lg:w-[82%] mx-auto">

        <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2D63]">
          Our <span className="text-[#7BAF2A]">Capabilities</span>
        </h1>

        <div className="w-16 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-10"></div>

        <div className="space-y-6">

          {capabilities.map((item, index) => (

            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center bg-[#0A2D63] text-white px-6 py-5 text-left"
              >
                <h2 className="text-xl lg:text-2xl font-semibold">
                  {item.title}
                </h2>

                {open === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>

              {open === index && (

                <div className="p-8 bg-white">

                  {item.description && (
                    <h3 className="text-2xl font-bold text-[#7BAF2A] mb-4">
                      {item.description}
                    </h3>
                  )}

                  <p className="text-gray-600 leading-8 mb-8 text-justify whitespace-pre-line">
                    {item.intro}
                  </p>

                  {item.tagline && (
                    <h3 className="text-2xl font-bold text-[#0A2D63] mb-8">
                      {item.tagline}
                    </h3>
                  )}


                  <div className="space-y-8">

                    {item.sections.map((section, i) => (

                      <div key={i}>

                        <h4 className="text-xl font-semibold text-[#0A2D63] mb-4">
                          {section.heading}
                        </h4>

                        {section.tagline && (
                          <p className="text-gray-600 italic mt-2 mb-3">
                            {section.tagline}
                          </p>
                        )}

                        {section.description && (
                          <p className="text-gray-600 mt-2 mb-3">
                            {section.description}
                          </p>
                        )}
                        {section.label && (
                          <h5 className="text-[#7BAF2A] font-semibold mb-3">
                            {section.label}
                          </h5>
                        )}
                        <ul className="grid md:grid-cols-2 gap-3">

                          {section.points.map((point, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-gray-600"
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