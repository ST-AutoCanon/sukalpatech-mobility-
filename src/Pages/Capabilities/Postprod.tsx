const PostProduction = () => {
  const sections = [
    {
      heading: "Vehicle Commissioning",
      description:
        "Ensure every vehicle is ready for operation through comprehensive commissioning and final system validation.",
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
      description:
        "Provide prompt engineering assistance for technical issues encountered in the field.",
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
      description:
        "Improve fleet reliability through planned maintenance programs.",
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
      description:
        "Deliver rapid assistance to minimize vehicle downtime and restore operations quickly.",
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
      description:
        "Ensure the right parts are available at the right time to support uninterrupted fleet operations.",
      label: "Key Activities",
      points: [
        "Spare parts planning",
        "Inventory management",
        "Parts identification",
        "Critical spare recommendations",
        "Supply coordination",
      ],
    },
  ];

  return (
    <section className="bg-white pt-6 pb-12 lg:pt-8 lg:pb-20">
      <div className="w-[92%] sm:w-[90%] lg:w-[82%] mx-auto">

        <h1 className="text-4xl font-bold text-[#0A2D63]">
          Post Production Services
        </h1>

        <div className="w-16 h-1 bg-[#7BAF2A] mt-3 mb-8 rounded-full"></div>

        <p className="text-gray-600 leading-8 mb-8">
          At Sukalpa Mobility Services, our commitment doesn't end when a vehicle
          leaves the production line. We provide comprehensive post-production
          support to ensure every vehicle continues to perform safely, reliably,
          and efficiently throughout its operational life. Our dedicated
          engineering and after-sales teams work closely with OEMs, fleet
          operators, and service partners to maximize vehicle uptime, improve
          reliability, and enhance customer satisfaction.
        </p>

        <h2 className="text-2xl font-bold text-[#0A2D63] mb-8">
          Our Post-Production Service
        </h2>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-[#0A2D63] mb-3">
                {section.heading}
              </h3>

              <p className="text-gray-600 mb-3">
                {section.description}
              </p>

              <h4 className="text-[#7BAF2A] font-semibold mb-3">
                {section.label}
              </h4>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.points.map((point, i) => (
                  <li
                    key={i}
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
    </section>
  );
};

export default PostProduction;