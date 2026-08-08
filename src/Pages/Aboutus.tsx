import banner from "../assets/bannerAbout.png";
import story1 from "../assets/story1.png";
import story2 from "../assets/story2.png";
import story3 from "../assets/story3.png";
import story4 from "../assets/story4.png";
import mission from "../assets/mission.png";
import vision from "../assets/vission.png";
import care from "../assets/Carethatflow.png";
import visionmission from "../assets/Vission&Mission.png";

import {
  ShieldCheck,
  Users,
  BookOpen,
  BadgeCheck,
  Flag,
  Heart,
  RefreshCcw,
} from "lucide-react";

const values = [
  {
    letter: "S",
    title: "Safety",
    desc: "Safety is at the heart of every service we deliver.",
    icon: ShieldCheck,
  },
  {
    letter: "U",
    title: "Unity",
    desc: "We work together with customers and colleagues to achieve shared success.",
    icon: Users,
  },
  {
    letter: "K",
    title: "Knowledge",
    desc: "We continuously enhance our technical expertise and engineering excellence.",
    icon: BookOpen,
  },
  {
    letter: "A",
    title: "Accountability",
    desc: "We take ownership of our commitments and deliver with integrity.",
    icon: BadgeCheck,
  },
  {
    letter: "L",
    title: "Leadership",
    desc: "We lead with innovation, professionalism, and customer focus.",
    icon: Flag,
  },
  {
    letter: "P",
    title: "Passion",
    desc: "We are passionate about powering the future of electric mobility.",
    icon: Heart,
  },
  {
    letter: "A",
    title: "Adaptability",
    desc: "We embrace change and continuously improve to meet evolving customer needs.",
    icon: RefreshCcw,
  },
];

const About = () => {
  return (
    <section className="bg-white">

      {/* ================= HERO ================= */}

      <section
        className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[580px] bg-cover bg-top"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0A2D63]/70"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="w-[90%] lg:w-[82%] mx-auto text-white">

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              About Us
            </h1>

            <div className="w-16 sm:w-20 h-1 bg-[#7BAF2A] mt-4 sm:mt-5 mb-5 sm:mb-6"></div>

            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold max-w-4xl leading-snug">
              Driving the Future of Electric Mobility with Reliable
              After-Sales Excellence
            </h2>

          </div>
        </div>
      </section>



      {/* ================= OUR STORY ================= */}

<section className="pt-12 sm:pt-16 pb-4 sm:pb-6">

  <div className="w-[90%] lg:w-[82%] mx-auto">

<div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">

  {/* ================= LEFT IMAGES ================= */}

  <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-5 h-full">

    <img
      src={story1}
      alt="Our Story"
      className="w-full h-full min-h-0 object-cover rounded-xl shadow-lg"
    />

    <img
      src={story2}
      alt="Our Story"
      className="w-full h-full min-h-0 object-cover rounded-xl shadow-lg"
    />

    <img
      src={story3}
      alt="Our Story"
      className="w-full h-full min-h-0 object-fill rounded-xl shadow-lg"
    />

    <img
      src={story4}
      alt="Our Story"
      className="w-full h-full min-h-0 object-cover rounded-xl shadow-lg"
    />

  </div>


  {/* ================= RIGHT CONTENT ================= */}

  <div className="flex flex-col">

    {/* ABOUT US */}

    <div>

      <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2D63]">
        About <span className="text-[#7BAF2A]">Us</span>
      </h2>

      <div className="w-16 h-1 bg-[#7BAF2A] rounded-full mt-3"></div>

      <p className="mt-4 text-gray-600 text-[15px] sm:text-base leading-7 text-left xl:text-justify">
        At Sukalpa Mobility Services, we are committed to delivering reliable,
        efficient, and customer-focused after-sales solutions for the electric
        mobility industry. We specialize in supporting electric buses and
        commercial EVs throughout their lifecycle, helping OEMs, fleet
        operators, and mobility companies maximize vehicle uptime and
        operational efficiency.
      </p>

    </div>


    {/* OUR STORY */}

    <div className="mt-8 lg:mt-10">

      <h3 className="text-3xl sm:text-4xl font-bold text-[#0A2D63]">
        Our <span className="text-[#7BAF2A]">Story</span>
      </h3>

      <div className="w-16 h-1 bg-[#7BAF2A] rounded-full mt-3"></div>

      <p className="mt-4 text-gray-600 text-[15px] sm:text-base leading-7 text-left xl:text-justify">
        Sukalpa Mobility Services was established with a vision to bridge
        the gap between electric vehicle manufacturers and reliable
        after-sales support. As the EV industry continues to grow rapidly,
        the need for skilled technical partners has become more important
        than ever.
      </p>

      <p className="mt-3 text-gray-600 text-[15px] sm:text-base leading-7 text-left xl:text-justify">
        With extensive experience working on electric bus projects across
        India, our team understands the challenges faced by OEMs and fleet
        operators. We combine engineering expertise with field service
        excellence to deliver dependable support throughout the vehicle
        lifecycle.
      </p>

      <p className="mt-3 text-gray-600 text-[15px] sm:text-base leading-7 text-left xl:text-justify">
        Today, Sukalpa Mobility Services serves as a trusted technical
        partner, helping customers improve vehicle reliability, reduce
        downtime, and enhance operational performance.
      </p>

    </div>

  </div>

</div>

  </div>

</section>



      {/* ================= MISSION & VISION ================= */}

      <section className="pt-8 pb-8">

        <div className="w-[90%] lg:w-[82%] mx-auto">

          <div className="grid lg:grid-cols-[42%_58%] shadow-xl rounded-2xl overflow-hidden border border-gray-200">

            {/* Left Banner */}

            <div className="h-[280px] sm:h-[350px] lg:h-auto">
              <img
                src={visionmission}
                alt="Mission and Vision"
                className="w-full h-full object-fill"
              />
            </div>


            {/* Right Content */}

            <div className="bg-white">

              {/* Heading */}

              <div className="px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8">

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2D63] leading-tight">
                  Our Mission
                  <br />
                  & Vision
                </h2>

                <div className="w-16 sm:w-20 h-1 bg-[#7BAF2A] mt-4 sm:mt-5 rounded-full"></div>

              </div>


              {/* Mission */}

              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-8 px-6 sm:px-8 lg:px-12 py-7 sm:py-8 border-t">

                <img
                  src={mission}
                  alt="Mission"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg flex-shrink-0"
                />

                <div className="text-center sm:text-left">

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2D63] mb-3">
                    Mission
                  </h3>

                  <p className="text-gray-600 leading-7 text-[15px] sm:text-base">
                    Our mission is to provide world-class after-sales support
                    that enhances vehicle performance, maximizes fleet uptime,
                    and builds long-term customer relationships through
                    technical excellence, innovation, and continuous
                    improvement.
                  </p>

                </div>

              </div>


              {/* Divider */}

              <div className="border-t"></div>


              {/* Vision */}

              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 sm:gap-8 px-6 sm:px-8 lg:px-12 py-7 sm:py-8">

                <div className="flex-1 text-center sm:text-left">

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2D63] mb-3">
                    Vision
                  </h3>

                  <p className="text-gray-600 leading-7 text-[15px] sm:text-base">
                    To become India's most trusted after-sales service partner
                    for electric mobility by delivering innovative, reliable,
                    and sustainable service solutions.
                  </p>

                </div>

                <img
                  src={vision}
                  alt="Vision"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg flex-shrink-0"
                />

              </div>

            </div>

          </div>

        </div>

      </section>



  
{/* ================= CARE THAT FLOWS ================= */}

<section className="pt-4 pb-16 sm:pb-20 bg-white">

  <div className="w-[90%] lg:w-[82%] mx-auto">

    <div className="relative">

      {/* ================= BANNER IMAGE ================= */}

      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
        <img
  src={care}
  alt="Care That Flows"
  className="
    w-full
    h-[440px]
    sm:h-[540px]
    md:h-[700px]
    lg:h-[900px]
    object-cover
    rounded-2xl
    sm:rounded-3xl
  "
/>

        {/* ================= BANNER HEADING ================= */}

        <div
          className="
            absolute
            top-6
            left-5
            sm:top-10
            sm:left-8
            lg:top-20
            lg:left-12
            z-20
            bg-white/85
            backdrop-blur-sm
            px-5
            sm:px-8
            lg:px-10
            py-5
            sm:py-6
            lg:py-8
            rounded-xl
            sm:rounded-2xl
          "
        >

          <h2
            className="
              text-2xl
              sm:text-3xl
              lg:text-5xl
              font-bold
              leading-tight
              text-[#0A2D63]
            "
          >
            Care That Flows
            <br />
            <span className="text-[#7BAF2A]">
              With You
            </span>
          </h2>

        </div>

      </div>


      {/* ================= WHITE VALUES CARD ================= */}

    <div
  className="
    relative
    lg:absolute
    lg:bottom-8
    lg:left-1/2
    lg:-translate-x-1/2

    -mt-24
    sm:-mt-28
    md:-mt-32
    lg:mt-0

    w-[100%]
    sm:w-[90%]
    lg:w-[70%]

    mx-auto

    bg-white
    rounded-xl
    sm:rounded-2xl
    lg:rounded-3xl

    shadow-2xl
    overflow-hidden

    z-30
  "
>

        {values.map(({ letter, title, desc, icon: Icon }, index) => {

          const isBlue = index % 2 === 0;

          return (
            <div
              key={index}
              className={`
                grid

                grid-cols-[42px_36px_1fr]
                sm:grid-cols-[50px_45px_150px_1fr]
                lg:grid-cols-[60px_55px_170px_1fr]

                items-center

                gap-2
                sm:gap-3
                lg:gap-0

                px-3
                sm:px-4
                lg:px-5

                py-2
                sm:py-2
                lg:py-2

                ${index !== values.length - 1
                  ? "border-b border-gray-200"
                  : ""
                }
              `}
            >

              {/* ================= LETTER ================= */}

              <div
                className={`
                  w-9
                  h-9

                  sm:w-11
                  sm:h-11

                  lg:w-12
                  lg:h-12

                  rounded-lg

                  text-white

                  flex
                  items-center
                  justify-center

                  text-xl
                  sm:text-2xl
                  lg:text-3xl

                  font-bold

                  ${isBlue
                    ? "bg-[#0A2D63]"
                    : "bg-[#7BAF2A]"
                  }
                `}
              >
                {letter}
              </div>


              {/* ================= ICON ================= */}

              <div className="flex justify-center">

                <Icon
                  className={`
                    w-5
                    h-5

                    sm:w-6
                    sm:h-6

                    lg:w-7
                    lg:h-7

                    ${isBlue
                      ? "text-[#0A2D63]"
                      : "text-[#7BAF2A]"
                    }
                  `}
                  strokeWidth={2.2}
                />

              </div>


              {/* ================= DESKTOP TITLE ================= */}

              <div
                className="
                  hidden
                  sm:flex

                  pr-3
                  lg:pr-5

                  border-r
                  border-gray-300

                  h-full

                  items-center
                "
              >

                <h4
                  className={`
                    text-base
                    lg:text-xl

                    font-semibold

                    ${isBlue
                      ? "text-[#0A2D63]"
                      : "text-[#7BAF2A]"
                    }
                  `}
                >
                  {title}
                </h4>

              </div>


              {/* ================= MOBILE TITLE ================= */}

              <div className="sm:hidden">

                <h4
                  className={`
                    text-sm
                    font-semibold

                    ${isBlue
                      ? "text-[#0A2D63]"
                      : "text-[#7BAF2A]"
                    }
                  `}
                >
                  {title}
                </h4>

              </div>


              {/* ================= DESCRIPTION ================= */}

              <div
                className="
                  col-span-3
                  sm:col-span-1

                  pl-0
                  sm:pl-3
                  lg:pl-5

                  mt-1
                  sm:mt-0
                "
              >

                <p
  className="
    text-gray-600
    leading-4
    sm:leading-5
    lg:leading-6
    text-[10px]
    sm:text-[13px]
    lg:text-[15px]
  "
>
                  {desc}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>

  </div>

</section>


    </section>
  );
};

export default About;

