import { useState } from "react";
import emailjs from "@emailjs/browser";

const Careers = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        qualification: "",
        email: "",
        resume: null as File | null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setFormData((prev) => ({
                ...prev,
                resume: e.target.files![0],
            }));
        }
    };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

  const form = new FormData();

  form.append(
    "access_key",
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  );

  form.append("first_name", formData.firstName);
  form.append("last_name", formData.lastName);
  form.append("email", formData.email);
  form.append("qualification", formData.qualification);

//   if (formData.resume) {
//     form.append("resume", formData.resume);
//   }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: form,
  });

  const result = await response.json();

  if (result.success) {
    await emailjs.send(
  "service_rgv58wa",
  "template_zycwdr5", // Auto Reply Template
  {
    to_email: formData.email,
    full_name: formData.firstName,
  },
  "MTAnQRgr1M_DqWtX4"
);
    setSuccessMessage("Your application has been submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      qualification: "",
      email: "",
      resume: null,
    });

    setTimeout(() => setSuccessMessage(""), 4000);
  } else {
    console.error(result);
    alert("Failed to submit application");
  }
};

    return (
        <section className="py-10 lg:py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

                {/* Left Section */}
                <div className="lg:w-1/2 mt-2">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2D63]">
                            Join Our Team
                        </h2>

                        <div className="w-20 h-1 bg-[#7BAF2A] rounded-full mb-2"></div>

                        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
                            Once you submit your application, our team reviews
                            your profile based on the role requirements and technical
                            fit.
                        </p>

                        <p className="mt-5 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
                            Shortlisted candidates are contacted for further discussions,
                            followed by role-specific evaluations and final interviews. Successful
                            candidates will receive an offer and onboarding details directly
                            from our HR team.
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2D63] mb-3">
                        Career Application
                    </h2>

                    <p className="text-gray-600 mb-10">
                        If you are interested in joining Sukalpa Mobility Services, please
                        complete the application form below.
                    </p>
                    {successMessage && (
                        <div className="mb-6 rounded-lg border border-green-300 bg-green-100 px-4 py-3 text-sm sm:text-base text-green-700">
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block font-medium mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#7BAF2A]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7BAF2A]"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Highest Qualification
                            </label>

                            <select
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7BAF2A]"
                            >
                                <option value="">Select Qualification</option>
                                <option>B.Tech / B.E.</option>
                                <option>M.Tech / M.E.</option>
                                <option>Diploma</option>
                                <option>ITI</option>
                                <option>B.Sc</option>
                                <option>MBA</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7BAF2A]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Upload Resume <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="block w-full border rounded-lg p-3 text-sm
             file:bg-[#0A2D63]
             file:text-white
             file:border-0
             file:px-4
             file:py-2
             file:rounded-md
             file:mr-3
             file:mb-2
             sm:file:mb-0"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-[#0A2D63] hover:bg-[#08306F] text-white px-8 py-3 rounded-lg font-semibold transition"
                        >
                            Submit Application
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default Careers;