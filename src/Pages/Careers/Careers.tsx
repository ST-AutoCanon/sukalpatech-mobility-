import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle } from "lucide-react";
import carrer from "../../assets/Carrer.png"

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
            <div className="w-[90%] lg:w-[94%] mx-auto">
                {/* Left Section */}
                <div className="w-full">
                    {/* Hero Section */}
                    <div className="text-left">

                        <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2D63]">
                            Join Our Team
                        </h2>

                        <div className="w-20 h-1 bg-[#7BAF2A] rounded-full mt-5 mb-8"></div>
                        <div className="space-y-5">
                            <p className="text-lg text-gray-600 leading-8">
                                Once you submit your application, our team reviews your profile
                                based on the role requirements and technical fit.
                            </p>

                            <p className="text-lg text-gray-600 leading-8">
                                Shortlisted candidates are contacted for further discussions,
                                followed by role-specific evaluations and final interviews.
                                Successful candidates will receive an offer and onboarding
                                details directly from our HR team.
                            </p>
                        </div>
                        <div className="mt-12">
                            <img
                                src={carrer}
                                alt="Join Our Team"
                                className="w-full h-[680px] rounded-3xl shadow-2xl object-fill"
                            />
                        </div>

                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full mt-16 bg-white rounded-3xl border border-gray-200 shadow-xl p-8 lg:p-12">

                    <div className="text-left mb-10">

                        <span className="inline-block px-5 py-2 rounded-full bg-[#0A2D63]/10 text-[#0A2D63] text-sm font-semibold">
                            Career Application
                        </span>

                        <h2 className="text-3xl font-bold text-[#0A2D63] mt-5">
                            Apply for an Opportunity
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Complete the form below to submit your application.
                        </p>

                    </div>

                    <p className="text-gray-600 mb-10">
                        If you are interested in joining Sukalpa Mobility Services, please
                        complete the application form below.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {showSuccess && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
                                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center pointer-events-auto">

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

                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#7BAF2A] transition">

                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="w-full cursor-pointer"
                                />

                                <p className="text-sm text-gray-500 mt-3">
                                    Upload Resume (.pdf, .doc, .docx)
                                </p>

                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0A2D63] hover:bg-[#7BAF2A] py-4 rounded-xl text-white text-lg font-semibold transition duration-300 shadow-lg"
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