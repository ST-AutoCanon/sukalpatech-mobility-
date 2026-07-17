import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Bus from "../assets/Bus.png";
import { ArrowRight } from "lucide-react";
import logo from "../assets/image1.png";
import onsitediagnostic from "../assets/on_site_diagnostic.png";
import homologation from "../assets/homologation.png";
import operation from "../assets/operations.png";
import prepost from "../assets/pre_post_production.png";
import {
    RefreshCw,
    Headset,
    Users,
    Cpu,
    ShieldCheck,
    Leaf,
    Package,
    Truck,
    BookOpen,
    FileCheck,
    Wrench,
    MonitorCog
} from "lucide-react";


const Home = () => {

    const servicesRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const scrollToServices = () => {
        servicesRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <>
            <section
                className="relative w-full min-h-screen lg:min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${Bus})` }}
            >
              <div className="relative z-10 w-full h-full flex flex-col">
                <div className="w-full lg:w-[48%] px-6 sm:px-8 lg:pl-10 xl:pl-16 pt-20 lg:pt-16 pb-12 lg:pb-20 flex flex-col h-full">
                     <div className="lg:-translate-y-10">
                        {/* Tagline */}
                        <p className="uppercase tracking-wide text-sm font-semibold mb-5">
                            <span className="text-[#7BAF2A]">CARE THAT FLOWS WITH YOU.</span>{" "}
                        </p>

                        {/* Heading */}
                        <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[58px] font-bold leading-[1.1] text-[#0A2D63]">
                            Powering the
                            <br />
                            Future of Mobility.
                        </h1>

                        <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[58px] font-bold leading-[1.1] text-[#7BAF2A]">
                            Together.
                        </h2>
                        {/* Description */}
                        <p className="mt-5 max-w-[650px] text-base sm:text-lg lg:text-[22px] xl:text-[24px] font-semibold leading-snug text-[#1f2937]">
                            End-to-End EV After Sales & Lifecycle Support
                            <br />
                            for Every Journey.
                        </p>
                        {/* Additional Description */}
                        <p className="mt-6 text-sm text-gray-700 leading-relaxed">
                            Professional EV diagnostics, field service,
                            <br />
                            commissioning, warranty support, and
                            <br />
                            technical consulting across India.
                        </p>
                        {/* Buttons */}
                       <div className="flex flex-row sm:flex-row gap-3 mt-8 w-full">

                                <button
                                    onClick={() => navigate("/enquiry")}
                                    className="w-full sm:w-auto bg-[#0A2D63] text-white px-8 py-3 rounded-full hover:bg-[#7BAF2A] transition"
                                >
                                    Request Services
                                </button>

                                <button
                                    onClick={scrollToServices}
                                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#7BAF2A] text-white px-8 py-3 rounded-full hover:bg-[#0A2D63] transition"
                                >
                                    <span>Explore Services</span>
                                    <ArrowRight size={18} />
                                </button>

                        </div>
                    </div>
                    {/* Features Card */}
                        <div className="mt-[50vh] pt-10 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-bottom-32 w-full lg:w-[80%]
                           bg-white rounded-3xl lg:rounded-full shadow-xl px-5 py-6 z-20"
                        >
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 lg:gap-0 lg:divide-x divide-gray-200">

                            {/* Item 1 */}
                            <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-2 lg:gap-3 px-2 py-3">
                                <RefreshCw className="w-10 h-10 text-[#0A2D63] flex-shrink-0" />

                                <div>
                                    <h3 className="text-2xl font-bold text-[#0A2D63]">360°</h3>
                                    <p className="text-sm text-gray-600 whitespace-nowrap">
                                        Lifecycle Support
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-2 lg:gap-3 px-2 py-3">
                                <Headset className="w-10 h-10 text-[#0A2D63] flex-shrink-0" />

                                <div>
                                    <h3 className="text-2xl font-bold text-[#0A2D63]">24/7</h3>
                                    <p className="text-sm text-gray-600 whitespace-nowrap">
                                        Customer Assistance
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-2 lg:gap-3 px-2 py-3">
                                <Users className="w-10 h-10 text-[#0A2D63] flex-shrink-0" />

                                <div>
                                    <h3 className="text-2xl font-bold text-[#0A2D63]">100+</h3>
                                    <p className="text-sm text-gray-600 whitespace-nowrap">
                                        Service Network
                                    </p>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-2 lg:gap-3 px-2 py-3">
                                <Cpu className="w-10 h-10 text-[#0A2D63] flex-shrink-0" />

                                <div>
                                    <h3 className="text-xl font-bold text-[#0A2D63]">
                                        AI-Powered
                                    </h3>
                                    <p className="text-sm text-gray-600 whitespace-nowrap">
                                        Smart Solutions
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="pt-32 lg:pt-36 pb-20 bg-white">
                <div className="w-[94%] lg:w-[82%] mx-auto">

                    <div className="max-w-4xl">

                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2D63]">
                            About <span className="text-[#7BAF2A]">Us</span>
                        </h2>

                       <div className="w-14 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-8"></div>
                        <p className="text-gray-600 text-lg leading-8 text-justify">
                            Sukalpa Mobility Services is a leading EV after-sales
                            service provider dedicated to maximizing vehicle uptime
                            and ensuring reliable fleet performance.
                            <br /><br />
                            With expertise in electric buses, commercial EVs,
                            diagnostics, commissioning and technical support,
                            we partner with OEMs and fleet operators.to deliver
                            world-class service solutions across india.
                        </p>

                        <button
                            onClick={() => navigate("/about")}
                            className="mt-10 bg-[#0A2D63] hover:bg-[#7BAF2A] transition text-white px-8 py-3 rounded-full"
                        >
                            View More
                        </button>

                    </div>

                </div>
            </section>

            <section
                ref={servicesRef}
                className="bg-white pt-2 pb-16"
            >
               <div className=" w-[94%] lg:w-[82%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch ">

                    {/* OUR SERVICES */}
                    <div className="bg-white rounded-[32px] shadow-lg border border-gray-100 p-8 flex flex-col h-full">
                        <p className="text-2xl font-bold tracking-wide uppercase">
                            <span className="text-[#0A2D63]">Our </span>
                            <span className="text-[#7BAF2A]">Services</span>
                        </p>

                        <div className="w-12 h-1 bg-[#7BAF2A] rounded-full mt-2 mb-8"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">

                            {/* Card 1 */}
                            <div className="bg-white rounded-3xl shadow-md p-6">
                                {/* Icon + Title */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                                    <Package className="w-12 h-12 text-[#7BAF2A] flex-shrink-0" />

                                    <h3 className="font-bold text-[#0A2D63] text-xl leading-tight">
                                        SPARE PART <br />
                                        MANAGEMENT
                                    </h3>
                                </div>

                                {/* Description */}
                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Optimized component lines</li>
                                    <li>• Supply chain efficiency</li>
                                    <li>• Minimized asset standby</li>
                                </ul>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-3xl shadow-md p-6">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                                    <Truck className="w-12 h-12 text-[#0A2D63] flex-shrink-0" />

                                    <h3 className="font-bold text-[#0A2D63] text-xl leading-tight">
                                        MOBILE SERVICE <br />
                                        VEHICLES
                                    </h3>
                                </div>

                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Rapid dispatch vans</li>
                                    <li>• Specialized toolkits</li>
                                    <li>• Real-time on-field service</li>
                                </ul>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-3xl shadow-md p-6">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                                    <Headset className="w-12 h-12 text-[#7BAF2A] flex-shrink-0" />

                                    <h3 className="font-bold text-[#0A2D63] text-xl leading-tight">
                                        TECHNICAL <br />
                                        SUPPORT CELL
                                    </h3>
                                </div>

                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Dedicated engineering helpline</li>
                                    <li>• Real-time fault diagnostics</li>
                                    <li>• 24×7 continuous support</li>
                                </ul>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-3xl shadow-md p-6">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                                    <BookOpen className="w-12 h-12 text-[#0A2D63] flex-shrink-0" />

                                    <h3 className="font-bold text-[#0A2D63] text-xl leading-tight">
                                        MANUAL,MMI <br />
                                        & TRAINING
                                    </h3>
                                </div>

                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Standard operating procedures</li>
                                    <li>• Workforce training programs</li>
                                    <li>• Technical manual curation</li>
                                </ul>
                            </div>
                        </div>

                        <button className="mt-8 text-xl font-semibold flex items-center gap-2">
                            <span className="text-[#7BAF2A] hover:text-[#0A2D63] transition">
                                Explore All Services
                            </span>
                            <span className="text-[#7BAF2A] text-2xl">→</span>
                        </button>
                    </div>

                    {/* OUR CAPABILITIES */}
                    <div className="bg-white rounded-[32px] shadow-lg border border-gray-100 p-8 flex flex-col h-full ml-0 lg:ml-9">

                        <p className="text-2xl font-bold tracking-wide uppercase">
                            <span className="text-[#0A2D63]">Our </span>
                            <span className="text-[#7BAF2A]">CAPABILITIES</span>
                        </p>

                        <div className="w-12 h-1 bg-[#7BAF2A] rounded-full mt-2 mb-8"></div>


                        <div className="space-y-4 flex-1">

                            {/* Capability Card 1 */}
                            <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">

                                {/* Image */}
                                <img
                                    src={onsitediagnostic}
                                    className="w-full sm:w-30 h-48 sm:h-25 rounded-xl object-cover"
                                />

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-[#0A2D63] text-lg">
                                        ON SITE DIAGNOSTIC SOLUTION
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        We initiate multi-vehicle audits,in-depth logs of cycle
                                        evaluations,rapid corrective rapid conimize downtime minimize
                                        downtime and improve performance
                                    </p>
                                </div>
                                {/* Right Icon */}
                                <div className="w-10 h-10 rounded-full border border-[#7BAF2A] flex items-center justify-center">
                                    <MonitorCog className="w-5 h-5 text-[#7BAF2A]" />
                                </div>

                            </div>
                            {/* Capability Card 2 */}
                            <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <img
                                    src={prepost}
                                    className="w-full sm:w-30 h-48 sm:h-25 rounded-xl object-cover"
                                />
                                <div className="flex-1">

                                    <h3 className="font-bold text-[#0A2D63] text-lg">
                                        PRE & POST PRODUCTION SUPPORT
                                    </h3>


                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        We provide comprehensive pre-and post-production support,
                                        ensuring every electric vehicle(EV) is optimized for physical
                                        assembly,accurate technical integration,and long-term reliability.
                                    </p>

                                </div>

                                <div className="w-10 h-10 rounded-full border border-[#7BAF2A] flex items-center justify-center">
                                    <Wrench className="w-5 h-5 text-[#0A2D63]" />
                                </div>

                            </div>
                            {/* Capability Card 3 */}
                            <div className="bg-white rounded-3xl shadow-md p-4 flex
                              flex-col
                              sm:flex-row
                              items-start
                              sm:items-center
                                gap-4">


                                <img
                                    src={homologation}
                                    className="
                                   w-full
                                   sm:w-30
                                   h-48
                                  sm:h-25
                                 rounded-xl
                                object-cover"
                                />
                                <div className="flex-1">

                                    <h3 className="font-bold text-[#0A2D63] text-lg">
                                        PRE, POST HOMOLOGATION & CERTIFICATION SUPPORT
                                    </h3>


                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        We provide pre-homologation support for testing and
                                        certification,ensuring commercial vehicle achieve first-time
                                        regulatory compliance
                                    </p>

                                </div>
                                <div className="w-10 h-10 rounded-full border border-[#7BAF2A] flex items-center justify-center">
                                    <FileCheck className="w-5 h-5 text-[#7BAF2A]" />
                                </div>

                            </div>
                            {/* Capability Card 4 */}
                            <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">

                                <img
                                    src={operation}
                                    className="w-full sm:w-30 h-48 sm:h-25 rounded-xl object-cover"
                                    alt="Operations"
                                />

                                <div className="flex-1">
                                    <h3 className="font-bold text-[#0A2D63] text-lg">
                                        OPERATIONS
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        We build sustainable partnerships by delivering
                                        precise, data-driven maintenance that optimizes
                                        vehicle lifespan and ensures peak fleet performance.
                                    </p>
                                </div>

                                <div className="w-10 h-10 rounded-full border border-[#7BAF2A] flex items-center justify-center">
                                    <Users className="w-5 h-5 text-[#0A2D63]" />
                                </div>
                            </div>
                        </div>

                        <button className="mt-8 text-xl font-semibold flex items-center gap-2">

                            <span className="text-[#7BAF2A] hover:text-[#0A2D63] transition">
                                Explore All Capabilities
                            </span>

                            <span className="text-[#7BAF2A] text-2xl">
                                →
                            </span>

                        </button>
                    </div>
                </div>
            </section>

           {/* ================= WHY SUKALPA ================= */}

            <section className="bg-white py-16">

                <div className="w-[94%] lg:w-[82%] mx-auto">

                    {/* Heading */}
                    <div className="max-w-4xl mb-10">

                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2D63]">
                            Why <span className="text-[#7BAF2A]">Sukalpa</span>
                        </h2>

                        <div className="w-14 h-1 bg-[#7BAF2A] rounded-full mt-3"></div>

                    </div>

                    {/* Content */}
                    <div className="bg-[#F8FAFC] rounded-3xl px-8 py-6 shadow-sm">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-gray-200">

                            {/* Card 1 */}
                            <div className="flex items-center gap-5 px-6">

                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-[#7BAF2A]">
                                    <Leaf className="w-7 h-7 text-[#7BAF2A]" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#0A2D63] text-lg">
                                        Sustainable by Design
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        Environment-first approach
                                        for a better tomorrow.
                                    </p>
                                </div>

                            </div>

                            {/* Card 2 */}
                            <div className="flex items-center gap-5 px-6">

                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-[#7BAF2A]">
                                    <ShieldCheck className="w-7 h-7 text-[#7BAF2A]" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#0A2D63] text-lg">
                                        Reliable & Scalable
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        Built to scale with your
                                        mobility operations.
                                    </p>
                                </div>

                            </div>

                            {/* Card 3 */}
                            <div className="flex items-center gap-5 px-6">

                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-[#7BAF2A]">
                                    <Users className="w-7 h-7 text-[#7BAF2A]" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#0A2D63] text-lg">
                                        Customer-Centric
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        Experience that puts your
                                        business first.
                                    </p>
                                </div>

                            </div>

                            {/* Card 4 */}
                            <div className="flex items-center gap-5 px-6">

                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-[#7BAF2A]">
                                    <Cpu className="w-7 h-7 text-[#7BAF2A]" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#0A2D63] text-lg">
                                        Data-Driven Insights
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        Smarter decisions for
                                        better outcomes.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <section className="py-20 bg-white">
                <div className="w-[94%] lg:w-[82%] mx-auto">

                    {/* Heading */}
                    <div className="max-w-4xl mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2D63]">
                            Testimonials
                        </h2>

                        <div className="w-14 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-8"></div>
                    </div>

                    {/* Testimonial Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                            <p className="text-gray-600 leading-7 italic">
                                "Excellent EV support and quick response."
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                            <p className="text-gray-600 leading-7 italic">
                                "Professional engineering team."
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                            <p className="text-gray-600 leading-7 italic">
                                "Reliable after sales partner."
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* ================= CALL TO ACTION ================= */}
            <section className="bg-white py-16">
                <div className="w-[94%] lg:w-[82%] mx-auto">
                    <div className="bg-[#F8FAFC] rounded-3xl px-8 py-14 text-center shadow-sm">

                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2D63]">
                            Ready to Power
                            <span className="text-[#7BAF2A]"> Your Mobility?</span>
                        </h2>

                        <button
                            onClick={() => navigate("/enquiry")}
                            className="mt-8 bg-[#7BAF2A] hover:bg-[#0A2D63] transition text-white px-8 py-3 rounded-full inline-flex items-center gap-2"
                        >
                            Query Form
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
            {/* ================= FOOTER ================= */}

            <footer className="relative bg-[#F8FAFC] overflow-hidden">

                {/* WAVE TOP BACKGROUND */}
                <div className="absolute top-0 left-0 w-full h-[260px] overflow-hidden z-0">
                    <svg
                        viewBox="0 0 1440 300"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                    >

                        {/* Blue Top + Bottom Wave */}
                        <path
                            fill="#D4E8F5"
                            d="M0 80 C220 10 420 20 650 80 C900 150 1180 160 1440 70 L1440 180 C1200 260 950 270 720 210 C450 140 220 150 0 230 Z" />

                        {/* Green Inner Wave */}
                        <path
                            fill="#DDECC8"
                            d="M0 110 C250 40 500 50 720 120 C980 200 1200 190 1440 100 L1440 210 C1180 280 950 290 720 230 C450 170 220 180 0 250 Z" />
                        {/* Footer Background Cut */}
                        <path
                            fill="#F8FAFC"
                            d="M0 220 C280 150 520 160 760 220 C1050 290 1250 270 1440 210 L1440 300 L0 300 Z " />
                    </svg>
                </div>


                {/* FOOTER CONTENT */}
                <div className="relative z-10 w-[94%] lg:w-[82%] mx-auto pt-44 lg:pt-[230px] pb-10 ">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                        {/* READY TO POWER */}
                        <div className="col-span-1">

                            <h2 className="mt-8 text-3xl mt-5 font-bold text-[#0A2D63] leading-tight">
                                Ready to Power
                                <br />
                                <span className="text-[#7BAF2A]">
                                    Your Mobility?
                                </span>
                            </h2>


                            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                Let's build a smarter, cleaner and
                                <br />
                                more mobility future together.
                            </p>

                        </div>

                        {/* GET IN TOUCH BUTTON */}
                       <div className="flex justify-start lg:justify-center">
                            <button
                                className="
                    bg-[#7BAF2A]
                    text-white
                    px-6
                    py-3
                    rounded-full
                    flex
                    items-center
                    gap-3
                    hover:bg-[#0A2D63]
                    transition
                    shadow-md
                    "
                            >

                                Get in Touch

                                <ArrowRight size={18} />

                            </button>

                        </div>
                        {/* CONTACT DETAILS */}
                        <div className="space-y-4">


                            <div className="flex items-center gap-3">

                                <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                                    <Headset
                                        size={18}
                                        className="text-[#7BAF2A]"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Call Us
                                    </p>

                                    <p className="text-sm font-semibold text-[#0A2D63]">
                                         +91 98765 43210
                                    </p>
                                </div>

                            </div>
                            <div className="flex items-center gap-3">

                                <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                                    <Cpu
                                        size={18}
                                        className="text-[#7BAF2A]"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Email
                                    </p>

                                    <p className="text-sm font-semibold text-[#0A2D63]">
                                         info@sukalpamobility.com
                                    </p>

                                </div>
                            </div>
                            <div className="flex items-center gap-3">

                                <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                                    <Leaf
                                        size={18}
                                        className="text-[#7BAF2A]"
                                    />
                                </div>
                                <div>

                                    <p className="text-xs text-gray-500">
                                        Location
                                    </p>

                                    <p className="text-sm font-semibold text-[#0A2D63]">
                                        Belagavi, Karnataka 590019
                                    </p>

                                </div>
                            </div>
                        </div>
                        {/* LOGO */}
                       <div className="flex justify-start lg:justify-end">
                            <div className="flex items-center">
                                <img
                                    src={logo}
                                    alt="Sukalpa Logo"
                                    className="h-20 w-auto"
                                />
                                <div className="-ml-2">

                                    <h1 className="text-[34px] font-semibold text-[#0A2D63] leading-none">
                                        Sukalpa
                                    </h1>


                                    <p className="text-[14px] font-semibold uppercase tracking-wide text-[#7BAF2A]">
                                        Mobility Services
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </footer>
    
        </>
    );
};

export default Home;
