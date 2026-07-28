import {
  Truck,
  Package,
  Headset,
  Wrench,
  FileText,
  ShieldCheck,
  Boxes,
  BatteryCharging,
  MapPinned,
  SearchCheck,
  FileCode,
  PencilRuler,
  Factory,
  BookOpenCheck,
  ClipboardList,
} from "lucide-react";

const Services = () => {
  const sparePartsServices = [
    {
      icon: ShieldCheck,
      title: "Genuine Parts Supply",
      description:
        "We supply OEM-approved spare parts that meet the highest standards of quality, safety, and reliability, ensuring optimal vehicle performance and extended component life.",
    },
    {
      icon: Boxes,
      title: "Critical Parts Availability",
      description:
        "Frequently required and mission-critical components are strategically stocked to ensure rapid replacement and faster turnaround during maintenance or breakdowns.",
    },
    {
      icon: Package,
      title: "Parts Procurement",
      description:
        "We manage end-to-end procurement from approved manufacturers and suppliers, ensuring timely sourcing, quality verification, and cost-effective purchasing.",
    },
    {
      icon: Truck,
      title: "Spare Parts Distribution",
      description:
        "With an organized logistics network, we ensure prompt delivery of spare parts to service centers, customer locations, and field service teams across India.",
    },
    {
      icon: Wrench,
      title: "Technical Parts Support",
      description:
        "Our experienced engineers assist customers in identifying the correct spare parts using technical documentation, exploded views, and engineering expertise.",
    },
    {
      icon: FileText,
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

  const technicalSupportServices = [
    {
      icon: Headset,
      title: "Remote Technical Assistance",
      description:
        "Receive real-time support through phone, email, or video conferencing for rapid troubleshooting and issue resolution.",
    },
    {
      icon: SearchCheck,
      title: "Fault Diagnosis & Troubleshooting",
      description:
        "Comprehensive analysis of electrical, mechanical, and software-related issues using advanced diagnostic tools and engineering expertise.",
    },
    {
      icon: MapPinned,
      title: "On-Site Technical Support",
      description:
        "Our field engineers visit customer locations to perform inspections, repairs, and technical investigations whenever on-site assistance is required.",
    },
    {
      icon: BatteryCharging,
      title: "High-Voltage System Support",
      description:
        "Expert assistance for battery systems, motor controllers, BMS, charging systems, and other high-voltage components, ensuring safe and reliable operation.",
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description:
        "Preparation and support for service manuals, troubleshooting guides, wiring diagrams, inspection reports, and standard operating procedures.",
    },
  ];

  const documentationServices = [
    {
      icon: FileCode,
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
      icon: PencilRuler,
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
      icon: Factory,
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
      icon: BookOpenCheck,
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
      icon: ClipboardList,
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
    <section className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="bg-[#0A2D63] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Spare Parts Management
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            At Sukalpa Mobility Services, we understand that timely
            availability of genuine spare parts is essential for maximizing
            vehicle uptime and reducing operational costs. Our Spare Parts
            Management solutions ensure that customers receive the right
            parts, at the right time, with complete traceability and
            technical support.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-200">
            We work closely with OEMs and trusted suppliers to provide
            high-quality genuine components for electric buses, trucks, and
            commercial EVs.
          </p>
        </div>
      </div>

      {/* Spare Parts Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2D63]">
            Our Spare Parts Services
          </h2>

          <div className="w-24 h-1 bg-[#7BAF2A] mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sparePartsServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-[#7BAF2A]/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#7BAF2A]" />
                </div>

                <h3 className="text-xl font-semibold text-[#0A2D63] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
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

      {/* Technical Support */}
      <div className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-left">
            <h2 className="text-4xl font-bold text-[#0A2D63]">
              Technical Support
            </h2>

            <div className="w-24 h-1 bg-[#7BAF2A] mt-4 rounded-full"></div>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              At Sukalpa Mobility Services, our Technical Support team provides
              prompt and reliable assistance to ensure your vehicles remain
              operational with minimal downtime. Backed by experienced EV
              engineers and advanced diagnostic capabilities, we support OEMs,
              fleet operators, dealers, and service partners in resolving
              technical issues quickly and efficiently.
            </p>

            <p className="mt-5 text-gray-600 leading-8 text-lg">
              Whether you need remote guidance, on-site engineering support,
              fault diagnosis, or service documentation, our experts are
              committed to delivering accurate solutions that enhance vehicle
              performance and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {technicalSupportServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-full bg-[#7BAF2A]/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#7BAF2A]" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#0A2D63] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Service Manuals & Technical Documentation */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-left">
            <h2 className="text-4xl font-bold text-[#0A2D63]">
              Service Manuals & Technical Documentation
            </h2>

            <p className="mt-3 text-xl font-medium text-[#7BAF2A]">
              Complete Engineering Documentation Across the Vehicle Lifecycle
            </p>

            <div className="w-24 h-1 bg-[#7BAF2A]  mt-5 rounded-full"></div>

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

          <div className="text-left mt-16 mb-10">
            <h3 className="text-3xl font-bold text-[#0A2D63]">
              Our Documentation Services
            </h3>

            <div className="w-20 h-1 bg-[#7BAF2A]  mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {documentationServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[#7BAF2A]/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#7BAF2A]" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#0A2D63] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-6">
                    {service.description}
                  </p>

                  <h4 className="font-semibold text-[#0A2D63] mb-4">
                    Includes:
                  </h4>

                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#7BAF2A] flex-shrink-0"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Technical Training */}
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

            <div className="w-24 h-1 bg-[#7BAF2A]  mt-5 rounded-full"></div>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              At Sukalpa Mobility Services, we provide industry-focused technical
              training programs designed to equip technicians, engineers,
              dealers, and fleet maintenance teams with the practical skills
              required to service and maintain electric commercial vehicles
              safely and efficiently.
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
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#7BAF2A] mt-2"></span>
                    <span className="text-gray-700">{item}</span>
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
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#7BAF2A] mt-2"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;