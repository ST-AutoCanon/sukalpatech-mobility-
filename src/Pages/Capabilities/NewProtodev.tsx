const NewProtoDevelopment = () => {
  const sections = [
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
  ];

  return (
    <section className="bg-white pt-6 pb-12 lg:pt-8 lg:pb-20">
      <div className="w-[92%] sm:w-[90%] lg:w-[82%] mx-auto">

        <h1 className="text-4xl font-bold text-[#0A2D63]">
          New Proto Development
        </h1>

        <div className="w-16 h-1 bg-[#7BAF2A] mt-3 mb-8 rounded-full"></div>

        <h2 className="text-2xl font-bold text-[#7BAF2A] mb-4">
          Turning Ideas into Road-Ready Electric Vehicles
        </h2>

        <p className="text-gray-600 leading-8 mb-8">
          At Sukalpa Mobility Services, we partner with OEMs, startups, and
          mobility innovators to transform concepts into fully functional
          electric vehicle prototypes.
        </p>

        <h3 className="text-2xl font-bold text-[#0A2D63] mb-8">
          Our NPD Process
        </h3>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold text-[#0A2D63] mb-3">
                {section.heading}
              </h4>

              <p className="italic text-gray-600 mb-4">
                {section.tagline}
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-[#7BAF2A]">✔</span>
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

export default NewProtoDevelopment;