const PreHomologation = () => {
  const sections = [
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
  ];

  return (
    <section className="bg-white pt-6 pb-12 lg:pt-8 lg:pb-20">
      <div className="w-[92%] sm:w-[90%] lg:w-[82%] mx-auto">

        <h1 className="text-4xl font-bold text-[#0A2D63]">
          Pre Homologation & Vehicle Certification
        </h1>

        <div className="w-16 h-1 bg-[#7BAF2A] mt-3 mb-8 rounded-full"></div>

        <p className="text-gray-600 leading-8 mb-8">
          At Sukalpa Mobility Services, we help OEMs prepare their vehicles
          for successful homologation by identifying compliance gaps,
          validating vehicle systems, and ensuring readiness before official
          certification testing. Our pre-homologation support minimizes
          development risks, reduces testing failures, and accelerates the
          journey from prototype to production.
        </p>

        <h2 className="text-2xl font-bold text-[#0A2D63] mb-8">
          What We Offer
        </h2>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-[#0A2D63] mb-4">
                {section.heading}
              </h3>

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

export default PreHomologation;