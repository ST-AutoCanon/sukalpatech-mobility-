import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Enquiry = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Enquiry submitted successfully! We will contact you shortly.");

    // Optional: Reset the form after submission
    e.currentTarget.reset();
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] pt-6 pb-16">
      <div className="w-[94%] lg:w-[60%] mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#0A2D63] font-semibold mb-8"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h1 className="text-4xl font-bold text-[#0A2D63]">
            Enquiry <span className="text-[#7BAF2A]">Form</span>
          </h1>

          <div className="w-16 h-1 bg-[#7BAF2A] rounded-full mt-3 mb-8"></div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7BAF2A]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7BAF2A]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7BAF2A]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Company</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7BAF2A]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Write your enquiry..."
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7BAF2A]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#7BAF2A] hover:bg-[#0A2D63] text-white px-8 py-3 rounded-full transition"
            >
              Submit Enquiry
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;