import { useState } from "react";
import {
  Search,
  ClipboardCheck,
  Wrench,
  Zap,
  ListChecks,
  ChevronDown,
  ChevronUp,
  Battery,
  Settings,
  Wifi,
  CheckCircle,
  SlidersHorizontal,
  Power,
  Users,
} from "lucide-react";

const NewProtoDevelopment = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = [
    {
      step: "01",
      icon: Search,
      title: "Project Understanding & Planning",
      tagline: "Laying the foundation for success.",
      points: [
        {
          icon: Search,
          heading: "Analysis",
          text: "Customer Requirement Analysis",
        },
        {
          icon: ClipboardCheck,
          heading: "Review",
          text: "Technical Feasibility Review",
        },
        {
          icon: Wrench,
          heading: "Planning",
          text: "Project Planning",
        },
      ],
    },
    {
      step: "02",
      icon: ClipboardCheck,
      title: "Design Review",
      tagline: "Transforming concepts into manufacturable solutions.",
      points: [
        {
          icon: ClipboardCheck,
          heading: "Review",
          text: "Design Review",
        },
        {
          icon: Search,
          heading: "Verification",
          text: "Fitment & Packaging Verification",
        },
        {
          icon: ListChecks,
          heading: "BOM",
          text: "Bill of Material Verification",
        },
      ],
    },
    {
      step: "03",
      icon: Wrench,
      title: "Prototype Procurement & Build Support",
      tagline: "Building the first vehicle with precision.",
      points: [
        {
          icon: Search,
          heading: "Procurement",
          text: "Component Procurement Coordination",
        },
        {
          icon: Users,
          heading: "Supplier",
          text: "Supplier Coordination",
        },
        {
          icon: Wrench,
          heading: "Assembly",
          text: "Chassis Assembly",
        },
        {
          icon: ClipboardCheck,
          heading: "Integration",
          text: "Body Integration",
        },
        {
          icon: Zap,
          heading: "Wiring",
          text: "HV & LV Wiring Integration",
        },
        {
          icon: Battery,
          heading: "Battery",
          text: "Battery Installation",
        },
        {
          icon: Settings,
          heading: "Systems",
          text: "Cooling & Pneumatic System Assembly",
        },
      ],
    },
    {
      step: "04",
      icon: Zap,
      title: "Vehicle Integration & Commissioning",
      tagline: "Bringing the vehicle to life.",
      points: [
        {
          icon: Power,
          heading: "Power",
          text: "Vehicle Power-On",
        },
        {
          icon: Wifi,
          heading: "CAN",
          text: "CAN Communication Validation",
        },
        {
          icon: CheckCircle,
          heading: "Checks",
          text: "Functional Checks",
        },
        {
          icon: Wrench,
          heading: "Troubleshooting",
          text: "Electrical Troubleshooting",
        },
        {
          icon: SlidersHorizontal,
          heading: "Calibration",
          text: "System Calibration",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#F8FAFC] pt-8 pb-16 lg:pt-10 lg:pb-24">

      <div className="w-[92%] sm:w-[90%] lg:w-[82%] mx-auto">

        {/* ================= PAGE HEADING ================= */}

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A2D63]">
          New Proto Development
        </h1>

        <div className="w-16 h-1 bg-[#7BAF2A] mt-3 mb-8 rounded-full"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#7BAF2A] mb-4">
          Turning Ideas into Road-Ready Electric Vehicles
        </h2>

        <p className="text-gray-600 leading-8 text-base md:text-lg">
          At Sukalpa Mobility Services, we partner with OEMs, startups, and mobility innovators to transform concepts into fully functional electric vehicle prototypes.
        </p>

        {/* ================= PROCESS HEADING ================= */}

        <div className="mt-14 mb-8">

          <h3 className="text-3xl md:text-4xl font-bold text-[#0A2D63]">
            Our NPD Process
          </h3>

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


          {/* ================= PROCESS SECTIONS ================= */}

          <div className="space-y-6">

            {sections.map((item, index) => {

              const isOpen = openIndex === index;
              const StepIcon = item.icon;

              return (
                <div
                  key={index}
                  className="relative"
                >

                  {/* ================= STEP NUMBER / NODE ================= */}

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

                    {/* ================= HEADER ================= */}

                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
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

                      {/* ================= LEFT CONTENT ================= */}

                      <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1">

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


                        {/* ICON */}

                        <div
                          className={`
        w-11
        h-11
        sm:w-14
        sm:h-14
        rounded-full
        flex
        items-center
        justify-center
        flex-shrink-0
        transition-all
        duration-300

        ${isOpen
                              ? "bg-[#7BAF2A] text-white"
                              : "bg-[#0A2D63]/10 text-[#0A2D63]"
                            }
      `}
                        >

                          <StepIcon
                            size={24}
                            strokeWidth={1.8}
                          />

                        </div>


                        {/* TITLE + TAGLINE */}

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
      w-8
      h-8
      sm:w-9
      sm:h-9
      flex
      items-center
      justify-center
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

                          {/* INNER TIMELINE */}

                          {/* =================================================
    INNER ACTIVITIES LAYOUT
================================================= */}

                          <div className="relative">

                            {/* INNER LINE — ONLY FOR VERTICAL LAYOUT */}

                            {index < 2 && (
                              <div
                                className="
        absolute
        left-[19px]
        top-5
        bottom-5
        w-[2px]
        bg-[#7BAF2A]/30
      "
                              />
                            )}


                            {/* =================================================
      POINTS
  ================================================= */}

                            <div
                              className={`
      ${index < 2
                                  ? "space-y-5"
                                  : "grid grid-cols-1 sm:grid-cols-2 gap-5"
                                }
    `}
                            >

                              {item.points.map((point, i) => {

                                const PointIcon = point.icon;

                                return (

                                  <div
                                    key={i}
                                    className="
            relative
            flex
            items-start
            gap-4
            min-w-0
          "
                                  >

                                    {/* =================================================
              POINT NODE
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

                                        <h4
                                          className="
                  text-base
                  sm:text-lg
                  font-bold
                  text-[#0A2D63]
                "
                                        >
                                          {point.heading}
                                        </h4>

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

export default NewProtoDevelopment;