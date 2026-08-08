import { useState } from "react";

import {
  ClipboardCheck,
  ShieldCheck,
  Laptop,
  FlaskConical,
  Search,
  Wrench,
  Battery,
  Zap,
  Settings,
  CircleCheck,
  Gauge,
  Lightbulb,
  Radio,
  Thermometer,
  CircleAlert,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const PreHomologation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      step: "01",
      icon: ClipboardCheck,
      title: "Vehicle Readiness Assessment",
      points: [
        {
          icon: Search,
          heading: "Inspection",
          text: "Complete vehicle inspection",
        },
        {
          icon: Wrench,
          heading: "Verification",
          text: "Mechanical & electrical system verification",
        },
        {
          icon: CircleCheck,
          heading: "Quality",
          text: "Assembly quality checks",
        },
      ],
    },

    {
      step: "02",
      icon: ShieldCheck,
      title: "Functional System Validation",
      
      points: [
        {
          icon: Zap,
          heading: "HV System",
          text: "High Voltage system validation",
        },
        {
          icon: Battery,
          heading: "LV System",
          text: "Low Voltage system checks",
        },
        {
          icon: CircleCheck,
          heading: "Brakes",
          text: "Brake system inspection",
        },
        {
          icon: Settings,
          heading: "Steering",
          text: "Steering system verification",
        },
        {
          icon: Wrench,
          heading: "Suspension",
          text: "Suspension inspection",
        },
        {
          icon: Lightbulb,
          heading: "Lighting",
          text: "Lighting & signalling verification",
        },
        {
          icon: Thermometer,
          heading: "HVAC",
          text: "HVAC functional checks",
        },
        {
          icon: ShieldCheck,
          heading: "Safety",
          text: "Safety system validation",
        },
      ],
    },

    {
      step: "03",
      icon: Laptop,
      title: "Diagnostics & Software Validation",
      points: [
        {
          icon: Radio,
          heading: "CAN",
          text: "CAN communication verification",
        },
        {
          icon: Laptop,
          heading: "Software",
          text: "Software flashing",
        },
      ],
    },

    {
      step: "04",
      icon: FlaskConical,
      title: "Test Preparation",
     
      points: [
        {
          icon: ClipboardCheck,
          heading: "Inspection",
          text: "Pre-test inspection",
        },
        {
          icon: Gauge,
          heading: "Performance",
          text: "Performance validation",
        },
        {
          icon: Settings,
          heading: "Testing",
          text: "Functional testing",
        },
        {
          icon: CircleAlert,
          heading: "Issues",
          text: "Issue identification",
        },
        {
          icon: Wrench,
          heading: "Improvement",
          text: "Engineering improvements",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#F8FAFC] pt-8 pb-16 lg:pt-10 lg:pb-24">

      <div className="w-[92%] sm:w-[90%] lg:w-[90%] mx-auto">

        {/* =====================================================
            PAGE TITLE
        ===================================================== */}

        <div className="mb-10">

          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2D63]">
            Pre Homologation & Vehicle Certification
          </h1>

          <div className="w-24 h-1 bg-[#7BAF2A] mt-4 rounded-full"></div>

          <p className="mt-7 text-base md:text-lg text-gray-600 leading-8 max-w-6xl">
            At Sukalpa Mobility Services, we help OEMs prepare their vehicles
            for successful homologation by identifying compliance gaps,
            validating vehicle systems, and ensuring readiness before official
            certification testing. Our pre-homologation support minimizes
            development risks, reduces testing failures, and accelerates the
            journey from prototype to production.
          </p>

        </div>


        {/* =====================================================
            SECTION TITLE
        ===================================================== */}

        <h2 className="text-2xl md:text-3xl font-bold text-[#0A2D63] mb-10">
          What We Offer
        </h2>


        {/* =====================================================
            MAIN VERTICAL TIMELINE
        ===================================================== */}

        <div className="relative">

          {/* MAIN VERTICAL LINE */}
          <div
            className="
      hidden
      sm:block
      absolute
      left-[34px]
      top-10
      bottom-12
      w-[1px]
      bg-[#7BAF2A]/30
      rounded-full
    "
          />




          <div className="space-y-8">

            {sections.map((item, index) => {

              const isOpen = activeIndex === index;
              const StepIcon = item.icon;

              return (
                <div
                  key={index}
                  className="relative flex items-start"
                >

                  {/* ================================================
      DESKTOP NUMBER CIRCLE
      Outside the card
      ================================================ */}
                  <div
                    className="
      hidden
      sm:flex
      absolute
      left-0
      top-6
      z-20
      w-[68px]
      h-[68px]
      rounded-full
      bg-white
      border-4
      border-[#7BAF2A]
      shadow-md
      items-center
      justify-center
      text-lg
      font-bold
      text-[#0A2D63]
    "
                  >
                    {item.step}
                  </div>

                  {/* =================================================
                      LARGE GREEN NUMBER CIRCLE
                  ================================================= */}


                  {/* =================================================
                      MAIN CARD
                  ================================================= */}

                  <div
                    className={`
    w-full
    sm:ml-[100px]
    flex-1
    bg-white
                      rounded-2xl
                      border
                      overflow-hidden
                      transition-all
                      duration-300

                      ${isOpen
                        ? "border-[#7BAF2A] shadow-lg"
                        : "border-gray-200 shadow-sm"
                      }
                    `}
                  >

                    {/* =================================================
                        CARD HEADER
                    ================================================= */}

                   {/* =================================================
    CARD HEADER
================================================= */}

<button
  type="button"
  onClick={() =>
    setActiveIndex(isOpen ? -1 : index)
  }
  className="
    w-full
    flex
    items-center
    justify-between
    gap-2
    sm:gap-5
    px-4
    sm:px-8
    py-5
    sm:py-7
    text-left
  "
>

  {/* LEFT HEADER CONTENT */}

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

        ${
          isOpen
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


    {/* TITLE */}

    <div className="min-w-0 flex-1">

      <h3
        className="
          text-base
          sm:text-2xl
          font-bold
          text-[#0A2D63]
          leading-5
          sm:leading-7
          break-words
        "
      >
        {item.title}
      </h3>

    </div>

  </div>


  {/* =================================================
      CHEVRON
  ================================================= */}

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


                    {/* =================================================
                        EXPANDED CONTENT
                    ================================================= */}

                    {isOpen && (

                      <div className="border-t border-gray-100">

                        <div
                          className="
                            bg-[#F8FAFC]
                            px-6
                            py-7
                            sm:px-8
                            sm:py-8
                          "
                        >

                          {/* =================================================
                              KEY ACTIVITIES TITLE
                          ================================================= */}

                          <div className="flex items-center gap-3 mb-7">

                            <div
                              className="
                                w-1
                                h-7
                                bg-[#7BAF2A]
                                rounded-full
                              "
                            />

                            <h4
                              className="
                                text-lg
                                sm:text-xl
                                font-bold
                                text-[#0A2D63]
                              "
                            >
                              Key Activities
                            </h4>

                          </div>


                          {/* =================================================
                              ACTIVITY VERTICAL TIMELINE
                          ================================================= */}

                          {/* =================================================
    KEY ACTIVITIES LAYOUT
================================================= */}

                          <div className="relative">

                            {/* VERTICAL LINE ONLY FOR STEP 01 */}

                            {index === 0 && (
                              <div
                                className="
        absolute
        left-[21px]
        top-6
        bottom-6
        w-[2px]
        bg-[#7BAF2A]/30
      "
                              />
                            )}


                            <div
                              className={`
      ${index === 0
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
                                    className={`
            relative
            flex
            items-center
            ${index === 0 ? "" : "min-w-0"}
          `}
                                  >

                                    {/* =================================================
              ACTIVITY ICON CIRCLE
          ================================================= */}

                                    <div
                                      className="
              relative
              z-10
              flex-shrink-0
              w-[43px]
              h-[43px]
              rounded-full
              bg-white
              border-2
              border-[#7BAF2A]
              flex
              items-center
              justify-center
              text-[#0A2D63]
            "
                                    >
                                      <PointIcon
                                        size={20}
                                        strokeWidth={1.8}
                                      />
                                    </div>


                                    {/* =================================================
              ACTIVITY CARD
          ================================================= */}

                                    <div
                                      className="
              ml-5
              flex-1
              bg-white
              rounded-xl
              border
              border-gray-200
              px-5
              py-4
              shadow-sm
              transition-all
              duration-300
              hover:border-[#7BAF2A]
              hover:shadow-md
              min-w-0
            "
                                    >

                                      <div
                                        className="
                flex
                items-center
                justify-between
                gap-4
              "
                                      >

                                        {/* TEXT */}

                                        <div className="min-w-0">

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


                                        {/* STEP BADGE */}

                                        <div
                                          className="
                  hidden
                  sm:block
                  flex-shrink-0
                  px-3
                  py-1
                  rounded-full
                  bg-[#7BAF2A]/10
                  text-[#7BAF2A]
                  text-sm
                  font-semibold
                "
                                        >
                                          Step {i + 1}
                                        </div>

                                      </div>

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

export default PreHomologation;