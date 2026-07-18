import { Wrench } from "lucide-react";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#F8FAFC] px-6">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#7BAF2A]/10 flex items-center justify-center mb-6">
          <Wrench className="w-10 h-10 text-[#7BAF2A]" />
        </div>

        <h1 className="text-4xl font-bold text-[#0A2D63]">
          Services
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Our Services page is currently under development.
        </p>

        <p className="text-gray-500 mt-2">
          Coming Soon...
        </p>
      </div>
    </section>
  );
};

export default Services;