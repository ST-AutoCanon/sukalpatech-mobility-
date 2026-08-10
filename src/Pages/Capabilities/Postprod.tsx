import { useState } from "react";

import {
  Truck,
  Headset,
  Wrench,
  Ambulance,
  Package,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Power,
  CheckCircle,
  Laptop,
  Search,
  Battery,
  Zap,
  Settings,
  CircleAlert,
  Boxes,
  Users,
  Car,
} from "lucide-react";

const PostProduction = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const sections = [
    {
      step: "01",
      icon: Truck,
      title: "Vehicle Commissioning",
      tagline:
        "Ensure every vehicle is ready for operation through comprehensive commissioning and final system validation.",
      label: "Key Activities",

      points: [
        {
          icon: ClipboardCheck,
          heading: "PDI",
          text: "Pre-delivery inspection (PDI)",
        },
        {
          icon: Power,
          heading: "Power-On",
          text: "Vehicle power-on support",
        },
        {
          icon: CheckCircle,
          heading: "Verification",
          text: "Functional system verification",
        },
        {
          icon: Laptop,
          heading: "Software",
          text: "Software configuration",
        },
        {
          icon: Search,
          heading: "Quality",
          text: "Final quality inspection",
        },
        {
          icon: Users,
          heading: "Handover",
          text: "Customer handover support",
        },
      ],
    },

    {
      step: "02",
      icon: Headset,
      title: "Technical Support",
      tagline:
        "Provide prompt engineering assistance for technical issues encountered in the field.",
      label: "Key Activities",

      points: [
        {
          icon: Headset,
          heading: "Remote",
          text: "Remote technical assistance",
        },
        {
          icon: Users,
          heading: "On-Site",
          text: "On-site engineering support",
        },
        {
          icon: Search,
          heading: "Diagnosis",
          text: "Technical troubleshooting",
        },
        {
          icon: CircleAlert,
          heading: "Root Cause",
          text: "Root cause analysis",
        },
        {
          icon: Wrench,
          heading: "Engineering",
          text: "Engineering consultation",
        },
      ],
    },

    {
      step: "03",
      icon: Wrench,
      title: "Preventive Maintenance",
      tagline:
        "Improve fleet reliability through planned maintenance programs.",
      label: "Key Activities",

      points: [
        {
          icon: ClipboardCheck,
          heading: "Inspection",
          text: "Periodic vehicle inspections",
        },
        {
          icon: Battery,
          heading: "Battery",
          text: "Battery health checks",
        },
        {
          icon: Zap,
          heading: "HV",
          text: "High Voltage inspection",
        },
        {
          icon: Settings,
          heading: "Cooling",
          text: "Cooling system maintenance",
        },
        {
          icon: Car,
          heading: "Brakes",
          text: "Brake & suspension inspection",
        },
        {
          icon: Laptop,
          heading: "Updates",
          text: "Software updates",
        },
      ],
    },

    {
      step: "04",
      icon: Ambulance,
      title: "Breakdown & Emergency Support",
      tagline:
        "Deliver rapid assistance to minimize vehicle downtime and restore operations quickly.",
      label: "Key Activities",

      points: [
        {
          icon: Ambulance,
          heading: "Emergency",
          text: "Emergency field support",
        },
        {
          icon: Search,
          heading: "Diagnosis",
          text: "Fault diagnosis",
        },
        {
          icon: Wrench,
          heading: "Repair",
          text: "On-site repair",
        },
        {
          icon: Settings,
          heading: "Replacement",
          text: "Component replacement",
        },
        {
          icon: Truck,
          heading: "Recovery",
          text: "Recovery coordination",
        },
      ],
    },

    {
      step: "05",
      icon: Package,
      title: "Spare Parts Management",
      tagline:
        "Ensure the right parts are available at the right time to support uninterrupted fleet operations.",
      label: "Key Activities",

      points: [
        {
          icon: ClipboardCheck,
          heading: "Planning",
          text: "Spare parts planning",
        },
        {
          icon: Boxes,
          heading: "Inventory",
          text: "Inventory management",
        },
        {
          icon: Search,
          heading: "Identification",
          text: "Parts identification",
        },
        {
          icon: CircleAlert,
          heading: "Critical",
          text: "Critical spare recommendations",
        },
        {
          icon: Truck,
          heading: "Supply",
          text: "Supply coordination",
        },
      ],
    },
  ];
  return (
    <section className="bg-[#F8FAFC] pt-8 pb-16 lg:pt-10 lg:pb-24">

      <div className="w-[92%] sm:w-[90%] lg:w-[90%] mx-auto">

        {/* ================= PAGE HEADING ================= */}

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A2D63]">
          Post Production Services
        </h1>

        <div className="w-16 h-1 bg-[#7BAF2A] mt-3 mb-8 rounded-full"></div>

        <p className="text-gray-600 leading-8 text-base md:text-lg max-w-7xl">
          At Sukalpa Mobility Services, our commitment doesn't end when a vehicle
          leaves the production line. We provide comprehensive post-production
          support to ensure every vehicle continues to perform safely, reliably,
          and efficiently throughout its operational life. Our dedicated
          engineering and after-sales teams work closely with OEMs, fleet
          operators, and service partners to maximize vehicle uptime, improve
          reliability, and enhance customer satisfaction.
        </p>


        {/* ================= PROCESS HEADING ================= */}

        <div className="mt-14 mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2D63]">
            Our Post-Production Service
          </h2>

          <div className="w-20 h-1 bg-[#7BAF2A] mt-4 rounded-full"></div>

        </div>


        {/* ================= VERTICAL PROCESS ================= */}

        <div className="relative">

          {/* MAIN VERTICAL LINE */}

          <div
            className="
              absolute
              left-[28px]
              sm:left-[34px]
              top-8
              bottom-8
              w-[2px]
              bg-[#7BAF2A]/30
              hidden
              sm:block
            "
          />


          <div className="space-y-6">

            {sections.map((item, index) => {

              const isOpen = activeIndex === index;
              const StepIcon = item.icon;

              return (
                <div
                  key={index}
                  className="relative"
                >

                  {/* ================= STEP NUMBER ================= */}

                  <div
                    className="
                      absolute
                      left-0
                      top-6
                      hidden
                      sm:flex
                      w-[68px]
                      h-[68px]
                      rounded-full
                      bg-white
                      border-4
                      border-[#7BAF2A]
                      items-center
                      justify-center
                      z-10
                      shadow-md
                    "
                  >
                    <span className="text-lg font-bold text-[#0A2D63]">
                      {item.step}
                    </span>
                  </div>


                  {/* ================= MAIN CARD ================= */}

                  <div
                    className={`
                      sm:ml-[100px]
                      bg-white
                      rounded-2xl
                      border
                      shadow-sm
                      overflow-hidden
                      transition-all
                      duration-300

                      ${isOpen
                        ? "border-[#7BAF2A] shadow-lg"
                        : "border-gray-200 hover:border-[#7BAF2A]/50 hover:shadow-md"
                      }
                    `}
                  >


                    {/* ================= HEADER ================= */}

                    <button
                      type="button"
                      onClick={() => {
                        if (isOpen) {
                          setActiveIndex(-1);
                        } else {
                          setActiveIndex(index);
                        }

                        setShowAll(false);
                      }}
                      className="
    w-full
    flex
    items-center
    justify-between
    gap-2
    sm:gap-5
    px-4
    sm:px-7
    py-5
    sm:py-6
    text-left
  "
                    >
                      {/* ================= LEFT HEADER CONTENT ================= */}

                      <div
                        className="
      flex
      items-center
      gap-3
      sm:gap-5
      min-w-0
      flex-1
    "
                      >

                        {/* MOBILE NUMBER */}

                        <div
                          className="
        sm:hidden
        flex-shrink-0
        w-10
        h-10
        rounded-full
        bg-[#0A2D63]
        text-white
        flex
        items-center
        justify-center
        font-bold
        text-sm
      "
                        >
                          {item.step}
                        </div>


                        {/* SECTION ICON */}

                        <div
                          className={`
        flex-shrink-0
        w-11
        h-11
        sm:w-14
        sm:h-14
        rounded-full
        flex
        items-center
        justify-center
        transition-all
        duration-300

        ${isOpen
                              ? "bg-[#7BAF2A] text-white"
                              : "bg-[#0A2D63]/10 text-[#0A2D63]"
                            }
      `}
                        >
                          <StepIcon
                            size={23}
                            strokeWidth={1.8}
                          />
                        </div>


                        {/* ================= TITLE + TAGLINE ================= */}

                        <div className="min-w-0 flex-1">

                          <h3
                            className="
          text-base
          sm:text-xl
          md:text-2xl
          font-bold
          text-[#0A2D63]
          leading-5
          sm:leading-7
          break-words
        "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
          text-xs
          sm:text-base
          text-gray-500
          mt-1
          leading-5
          sm:leading-6
          break-words
        "
                          >
                            {item.tagline}
                          </p>

                        </div>

                      </div>


                      {/* ================= CHEVRON ================= */}

                      <div
                        className="
      flex-shrink-0
      w-7
      h-7
      sm:w-8
      sm:h-8
      flex
      items-center
      justify-center
      ml-1
      sm:ml-2
    "
                      >

                        {isOpen ? (
                          <ChevronUp
                            size={24}
                            strokeWidth={2}
                            className="text-[#7BAF2A]"
                          />
                        ) : (
                          <ChevronDown
                            size={24}
                            strokeWidth={2}
                            className="text-[#0A2D63]"
                          />
                        )}

                      </div>

                    </button>


                    {/* ================= OPEN CONTENT ================= */}

                    {isOpen && (

                      <div className="px-5 sm:px-8 pb-7">

                        <div className="border-t border-gray-100 pt-7">

                          {/* LABEL */}

                          <h4 className="text-lg font-bold text-[#0A2D63] mb-6">
                            {item.label}
                          </h4>

                          {/* ================================================ KEY ACTIVITIES ================================================= */}

                          <div className="relative">


                            {/* POINTS */}

                            <div
                              className="
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-5
    "
                            >

                              {item.points.map((point, i) => {

                                const PointIcon = point.icon;

                                return (

                                  <div
                                    key={i}
                                    className="
            relative
            flex
            items-center
            gap-4
            min-w-0
          "
                                  >

                                    {/* =================================================
              POINT ICON
          ================================================= */}

                                    <div
                                      className="
              relative
              z-10
              w-10
              h-10
              rounded-full
              bg-[#F8FAFC]
              border-2
              border-[#7BAF2A]
              flex
              items-center
              justify-center
              flex-shrink-0
            "
                                    >

                                      <PointIcon
                                        size={19}
                                        strokeWidth={2}
                                        className="text-[#0A2D63]"
                                      />

                                    </div>


                                    {/* =================================================
              POINT CARD
          ================================================= */}

                                    <div
                                      className="
              flex-1
              min-w-0
              bg-[#F8FAFC]
              rounded-xl
              border
              border-gray-100
              px-5
              py-4
              hover:border-[#7BAF2A]/40
              transition-all
              duration-200
            "
                                    >

                                      <div
                                        className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-1
                sm:gap-4
              "
                                      >

                                        {/* HEADING */}

                                        <h5
                                          className="
                  text-base
                  sm:text-lg
                  font-bold
                  text-[#0A2D63]
                "
                                        >
                                          {point.heading}
                                        </h5>


                                        {/* STEP BADGE */}

                                        <span
                                          className="
                  text-xs
                  font-semibold
                  text-[#7BAF2A]
                  bg-[#7BAF2A]/10
                  px-3
                  py-1
                  rounded-full
                  w-fit
                "
                                        >
                                          Step {i + 1}
                                        </span>

                                      </div>


                                      {/* DESCRIPTION */}

                                      <p
                                        className="
                mt-1
                text-sm
                sm:text-base
                text-gray-600
                leading-6
              "
                                      >
                                        {point.text}
                                      </p>

                                    </div>

                                  </div>

                                );

                              })}

                            </div>

                          </div>

                        </div>

                      </div>

                    )}

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default PostProduction;