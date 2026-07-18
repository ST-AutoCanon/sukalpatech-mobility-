import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Bus from "../assets/Bus.png";
import { ArrowRight } from "lucide-react";
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
                    <div className="-translate-y-16 sm:-translate-y-12 lg:-translate-y-10">
                        {/* Tagline */}
                            <p className="uppercase tracking-wide text-sm font-semibold mb-5 lg:ml-1">
                                <span className="text-[#7BAF2A]">
                                    CARE THAT FLOWS WITH YOU.
                                </span>
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
                </div>
                </div>
                 <div
                        className="mt-[60vh] sm:mt-[55vh] lg:mt-0 pt-6 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-bottom-20 w-full lg:w-[80%] bg-white rounded-3xl lg:rounded-full shadow-xl px-5 lg:py-4 py-5 z-20">
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
            </section>
            <section className="pt-20 lg:pt-32 pb-12 bg-white">
               <div className="w-[94%] lg:w-[82%] mx-auto lg:pl-8 xl:pl-10">

                    <div className="max-w-6xl">

                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2D63]">
                            About <span className="text-[#7BAF2A]">Us</span>
                        </h2>

                       <div className="w-14 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-8"></div>
                        <p className="mt-6 text-gray-600 text-lg leading-8 text-left lg:text-justify">
                            Sukalpa Mobility Services is a leading EV after-sales service provider dedicated
                            to maximizing vehicle uptime and ensuring reliable fleet performance.
                        </p>

                        <p className="mt-6 text-gray-600 text-lg leading-8 text-left lg:text-justify">
                            With expertise in electric buses, commercial EVs, diagnostics, commissioning,
                            and technical support, we partner with OEMs and fleet operators to deliver
                            world-class service solutions across India.
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
                className="bg-white pt-0 pb-16"
            >
               <div className=" w-[94%] lg:w-[82%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch ">

                    {/* OUR SERVICES */}
                   <div className="bg-white rounded-[32px] shadow-lg border border-gray-100 p-8 flex flex-col">

                        <p className="text-2xl font-bold tracking-wide uppercase">
                            <span className="text-[#0A2D63]">Our </span>
                            <span className="text-[#7BAF2A]">Services</span>
                        </p>

                        <div className="w-12 h-1 bg-[#7BAF2A] rounded-full mt-2 mb-8"></div>

                        {/* Content */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

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
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Dedicated engineering helpline</span>
                                    </li>
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
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Standard operating procedures</span>
                                    </li>
                                    <li>• Workforce training programs</li>
                                    <li>• Technical manual curation</li>
                                </ul>
                            </div>
                        </div>


                        {/* Button */}
                        <button
                            onClick={() => navigate("/services")}
                            className="mt-auto pt-8 text-xl font-semibold flex items-center gap-2 group"
                        >
                            <span className="text-[#7BAF2A] group-hover:text-[#0A2D63] transition">
                                Explore All Services
                            </span>
                            <ArrowRight className="w-5 h-5 text-[#7BAF2A] group-hover:text-[#0A2D63] transition" />
                        </button>
                    </div>

                    {/* OUR CAPABILITIES */}
                   <div className="bg-white rounded-[32px] shadow-lg border border-gray-100 p-8 flex flex-col">
                    <p className="text-2xl font-bold tracking-wide uppercase">
                            <span className="text-[#0A2D63]">Our </span>
                            <span className="text-[#7BAF2A]">CAPABILITIES</span>
                        </p>

                        <div className="w-12 h-1 bg-[#7BAF2A] rounded-full mt-2 mb-8"></div>



                      <div className="space-y-4 flex-grow">
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
                                        NEW PROTO DEVELOPMENT
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
                                        POST PRODUCTION SERVICES
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
                                        PRE HOMOLOGATION AND VEHICLE CERTIFICATION
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
                            {/* <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">

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
                            </div> */}
                        </div>

                        <button
                            onClick={() => navigate("/capabilities")}
                            className="mt-auto pt-8 text-xl font-semibold flex items-center gap-2 group"
                        >
                            <span className="text-[#7BAF2A] group-hover:text-[#0A2D63] transition">
                                Explore All Capabilities
                            </span>
                            <ArrowRight className="w-5 h-5 text-[#7BAF2A] group-hover:text-[#0A2D63] transition" />
                        </button>
                    </div>
                </div>
            </section>

            { }

           <section className="bg-white pt-8 pb-16">

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
                                        Experienced EV Engineers
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        Skilled professionals with extensive expertise in electric mobility solutions.
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
                                        Pan India Support
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        Nationwide service network providing timely support wherever you operate.
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
                                        Fast Response Time
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        Rapid diagnostics and quick resolution to maximize fleet uptime.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <section className="pt-10 pb-20 bg-white">
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
            <section className="bg-white pt-5 pb-16">
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
              
        </>
    );
};

export default Home;
