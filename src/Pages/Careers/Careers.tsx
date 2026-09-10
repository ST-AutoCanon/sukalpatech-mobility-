import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, Upload, ArrowRight } from "lucide-react";
import carrer from "../../assets/Carrer.png";

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

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.files?.length) {
            setFormData((prev) => ({
                ...prev,
                resume: e.target.files![0],
            }));
        }
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!formData.resume) {
            alert("Please upload your resume.");
            return;
        }

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
        <section className="min-h-screen bg-[#F8FAFC] py-10 lg:py-16 px-4 sm:px-6">
            <div className="w-[92%] max-w-[1450px] mx-auto">

                {/* =====================================================
                    TOP SECTION
                ===================================================== */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

                    {/* LEFT */}
                    <div className="bg-[#E8EDF5] rounded-[28px] p-7 sm:p-10 lg:p-12 flex items-center">

                        <div className="w-full">

                            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#0A2D63] leading-tight">
                                Join Our Team
                            </h2>

                            <div className="w-20 h-1 bg-[#7BAF2A] rounded-full mt-5 mb-8"></div>

                            <div className="space-y-5">

                                <p className="text-base sm:text-lg text-gray-600 leading-8">
                                    Once you submit your application, our team reviews your profile
                                    based on the role requirements and technical fit.
                                </p>

                                <p className="text-base sm:text-lg text-gray-600 leading-8">
                                    Shortlisted candidates are contacted for further discussions,
                                    followed by role-specific evaluations and final interviews.
                                    Successful candidates will receive an offer and onboarding
                                    details directly from our HR team.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT */}
                    <div className="h-auto lg:h-[540px]">

                        <img
                            src={carrer}
                            alt="Join Our Team"
                            className="w-full h-auto lg:h-full object-contain lg:object-cover rounded-[28px] shadow-xl"
                        />

                    </div>

                </div>


                {/* =====================================================
                    FORM SECTION
                ===================================================== */}
                <div className="mt-12 lg:mt-16">

                    <div className="bg-[#F6F8FB] rounded-[30px] p-1">

                        <div className="bg-white rounded-[28px] border border-gray-200 shadow-lg p-6 sm:p-8 lg:p-12">

                            {/* FORM HEADER */}
                            <div className="mb-9">

                                <span className="inline-block px-5 py-2 rounded-full bg-[#0A2D63]/10 text-[#0A2D63] text-sm font-semibold">
                                    Career Application
                                </span>

                                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2D63] mt-5">
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


                            <form
                                onSubmit={handleSubmit}
                                className="space-y-7"
                            >

                                {/* SUCCESS POPUP */}
                                {showSuccess && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/40 backdrop-blur-sm">

                                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 text-center">

                                            <div className="w-20 h-20 mx-auto rounded-full bg-[#7BAF2A]/10 flex items-center justify-center">
                                                <CheckCircle
                                                    size={52}
                                                    className="text-[#7BAF2A]"
                                                />
                                            </div>

                                            <h2 className="text-2xl font-bold text-[#0A2D63] mt-5">
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
                                                className="mt-7 bg-[#7BAF2A] hover:bg-[#0A2D63] text-white px-9 py-3 rounded-full transition"
                                            >
                                                OK
                                            </button>

                                        </div>

                                    </div>
                                )}


                                {/* FIRST + LAST NAME */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            First Name <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Enter your first name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3.5 text-sm sm:text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7BAF2A] focus:border-transparent transition"
                                            required
                                        />
                                    </div>


                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Enter your last name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3.5 text-sm sm:text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7BAF2A] focus:border-transparent transition"
                                            required
                                        />
                                    </div>

                                </div>


                                {/* QUALIFICATION */}
                                <div>

                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Highest Qualification
                                    </label>

                                    <select
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7BAF2A] focus:border-transparent transition"
                                    >
                                        <option value="">
                                            Select Qualification
                                        </option>
                                        <option>B.Tech / B.E.</option>
                                        <option>M.Tech / M.E.</option>
                                        <option>Diploma</option>
                                        <option>ITI</option>
                                        <option>B.Sc</option>
                                        <option>MBA</option>
                                        <option>Other</option>
                                    </select>

                                </div>


                                {/* EMAIL */}
                                <div>

                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7BAF2A] focus:border-transparent transition"
                                        required
                                    />

                                </div>


                                {/* RESUME */}
                                <div>

                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Upload Resume <span className="text-red-500">*</span>
                                    </label>

                                    <label className="block cursor-pointer">

                                        <div className="border-2 border-dashed border-gray-300 hover:border-[#7BAF2A] hover:bg-[#7BAF2A]/5 rounded-2xl px-5 py-7 text-center transition">

                                            <div className="w-12 h-12 mx-auto rounded-full bg-[#0A2D63]/10 text-[#0A2D63] flex items-center justify-center">
                                                <Upload size={22} />
                                            </div>

                                            <p className="mt-3 font-semibold text-[#0A2D63]">
                                                {formData.resume
                                                    ? formData.resume.name
                                                    : "Upload Resume"}
                                            </p>

                                            <p className="text-sm text-gray-500 mt-2">
                                                Upload Resume (.pdf, .doc, .docx)
                                            </p>

                                        </div>

                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            required
                                        />

                                    </label>

                                </div>


                                {/* SUBMIT */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-[#0A2D63] hover:bg-[#7BAF2A] py-4 rounded-xl text-white text-lg font-semibold transition duration-300 shadow-lg"
                                >
                                    Submit Application
                                    <ArrowRight size={20} />
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Careers;