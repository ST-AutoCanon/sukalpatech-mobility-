import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Enquiry = () => {

  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowSuccess(true);

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
            {showSuccess && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center animate-[fadeIn_.3s_ease]">

                  <CheckCircle
                    size={64}
                    className="mx-auto text-[#7BAF2A] mb-5"
                  />

                  <h2 className="text-2xl font-bold text-[#0A2D63]">
                    Enquiry Submitted
                  </h2>

                  <p className="text-gray-600 mt-3 leading-7">
                    Thank you for contacting Sukalpa Mobility Services.
                    <br />
                    We have received your enquiry and our team will get back to you shortly.
                  </p>

                  <button
                    onClick={() => setShowSuccess(false)}
                    className="mt-8 bg-[#7BAF2A] hover:bg-[#0A2D63] text-white px-8 py-3 rounded-full transition"
                  >
                    OK
                  </button>

                </div>
              </div>
            )}
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