const About = () => {
  return (
    <section className="min-h-screen bg-white py-24">
      <div className="w-[94%] lg:w-[82%] mx-auto">

        <h1 className="text-4xl font-bold text-[#0A2D63]">
          About <span className="text-[#7BAF2A]">Us</span>
        </h1>

        <div className="w-14 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-10"></div>

        <p className="text-lg leading-8 text-gray-600">
          Sukalpa Mobility Services is a leading EV after-sales service provider
          dedicated to maximizing vehicle uptime and ensuring reliable fleet
          performance.
        </p>

        <br />

        <p className="text-lg leading-8 text-gray-600">
          We specialize in electric buses, commercial EVs, diagnostics,
          commissioning, warranty support, technical consulting, fleet
          maintenance, spare parts management, and lifecycle support.
        </p>

        <br />

        <p className="text-lg leading-8 text-gray-600">
          Our mission is to provide world-class mobility solutions that improve
          vehicle reliability, reduce downtime, and enhance customer
          satisfaction across India.
        </p>

      </div>
    </section>
  );
};

export default About;