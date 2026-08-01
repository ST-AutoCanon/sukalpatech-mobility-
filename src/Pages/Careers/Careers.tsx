import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle } from "lucide-react";

const Careers = () => {
    const [showSuccess, setShowSuccess] = useState(false);
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

        try {
            // 1. Send notification to company
            await emailjs.send(
                "service_4im2i73",
                "template_f9sr6pq",
                {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    qualification: formData.qualification,
                    email: formData.email,
                },
                "MTAnQRgr1M_DqWtX4"
            );

            // 2. Send auto reply to applicant
            await emailjs.send(
                "service_4im2i73",
                "template_zycwdr5",
                {
                    to_email: formData.email,
                    full_name: formData.firstName,
                },
                "MTAnQRgr1M_DqWtX4"
            );

            setShowSuccess(true);
            setFormData({
                firstName: "",
                lastName: "",
                qualification: "",
                email: "",
                resume: null,
            });

        } catch (error) {
            console.error(error);
            alert("Failed to submit application.");
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
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {showSuccess && (
                            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center animate-[fadeIn_.3s_ease]">

                                    <CheckCircle
                                        size={64}
                                        className="mx-auto text-[#7BAF2A] mb-5"
                                    />

                                    <h2 className="text-2xl font-bold text-[#0A2D63]">
                                        Application Submitted
                                    </h2>

                                    <p className="text-gray-600 mt-3 leading-7">
                                        Thank you for applying to Sukalpa Mobility Services.
                                        <br />
                                        We have received your application and our HR team will review it.
                                        <br />
                                        If your profile matches our requirements, we'll contact you soon.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setShowSuccess(false)}
                                        className="mt-8 bg-[#7BAF2A] hover:bg-[#0A2D63] text-white px-8 py-3 rounded-full transition"
                                    >
                                        OK
                                    </button>

                                </div>
                            </div>
                        )}

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