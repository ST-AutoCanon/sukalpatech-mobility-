const About = () => {
  return (
    <section className="bg-white pt-4 pb-16 lg:pt-8 lg:pb-20">
      <div className="w-[94%] lg:w-[82%] mx-auto">

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2D63]">
          About <span className="text-[#7BAF2A]">Us</span>
        </h1>

        <div className="w-16 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-10"></div>

        {/* Intro */}
        <h2 className="text-2xl lg:text-3xl font-bold text-[#0A2D63] leading-snug">
          Driving the Future of Electric Mobility with Reliable After-Sales Excellence
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-8 text-justify">
          At Sukalpa Mobility Services, we are committed to delivering reliable,
          efficient, and customer-focused after-sales solutions for the electric
          mobility industry. We specialize in supporting electric buses and
          commercial EVs throughout their lifecycle, helping OEMs, fleet
          operators, and mobility companies maximize vehicle uptime and
          operational efficiency.
        </p>

        {/* Our Story */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-[#0A2D63]">
            Our <span className="text-[#7BAF2A]">Story</span>
          </h2>

          <div className="w-14 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-6"></div>

          <p className="text-gray-600 text-lg leading-8 text-justify">
            Sukalpa Mobility Services was established with a vision to bridge
            the gap between electric vehicle manufacturers and reliable
            after-sales support. As the EV industry continues to grow rapidly,
            the need for skilled technical partners has become more important
            than ever.
          </p>

          <p className="mt-6 text-gray-600 text-lg leading-8 text-justify">
            With extensive experience working on electric bus projects across
            India, our team understands the challenges faced by OEMs and fleet
            operators. We combine engineering expertise with field service
            excellence to deliver dependable support throughout the vehicle
            lifecycle.
          </p>

          <p className="mt-6 text-gray-600 text-lg leading-8 text-justify">
            Today, Sukalpa Mobility Services serves as a trusted technical
            partner, helping customers improve vehicle reliability, reduce
            downtime, and enhance operational performance.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          <div className="bg-[#F8FAFC] rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0A2D63]">
              Vision
            </h3>

            <div className="w-12 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-5"></div>

            <p className="text-gray-600 leading-8">
              To become India's most trusted after-sales service partner for
              electric mobility by delivering innovative, reliable, and
              sustainable service solutions.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0A2D63]">
              Mission
            </h3>

            <div className="w-12 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-5"></div>

            <p className="text-gray-600 leading-8">
              Our mission is to provide world-class after-sales support that
              enhances vehicle performance, maximizes fleet uptime, and builds
              long-term customer relationships through technical excellence,
              innovation, and continuous improvement.
            </p>
          </div>

        </div>

        {/* SUKALPA VALUES */}
<div className="mt-16">
  <h2 className="text-3xl font-bold text-[#0A2D63]">
    CARE THAT FLOWS  <span className="text-[#7BAF2A]">WITH YOU</span>
  </h2>

  <div className="w-14 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-8"></div>

  <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200">
    <table className="min-w-full border-collapse">
      <thead className="bg-[#0A2D63] text-white">
        <tr>
          <th className="px-6 py-4 text-left">Letter</th>
          <th className="px-6 py-4 text-left">Value</th>
          <th className="px-6 py-4 text-left">Meaning</th>
        </tr>
      </thead>

      <tbody className="bg-white">
        {[
          ["S", "Safety", "Safety is at the heart of every service we deliver."],
          ["U", "Unity", "We work together with customers and colleagues to achieve shared success."],
          ["K", "Knowledge", "We continuously enhance our technical expertise and engineering excellence."],
          ["A", "Accountability", "We take ownership of our commitments and deliver with integrity."],
          ["L", "Leadership", "We lead with innovation, professionalism, and customer focus."],
          ["P", "Passion", "We are passionate about powering the future of electric mobility."],
          ["A", "Adaptability", "We embrace change and continuously improve to meet evolving customer needs."],
        ].map(([letter, value, meaning], index) => (
          <tr
            key={index}
            className="border-t border-gray-200 hover:bg-[#F8FAFC] transition"
          >
            <td className="px-6 py-5 font-bold text-[#0A2D63]">{letter}</td>

            <td className="px-6 py-5 font-semibold text-[#7BAF2A]">
              {value}
            </td>

            <td className="px-6 py-5 text-gray-600 leading-7">
              {meaning}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;